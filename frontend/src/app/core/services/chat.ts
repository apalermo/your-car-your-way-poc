import { Injectable, signal, Signal } from '@angular/core';
import { Client, Message } from '@stomp/stompjs';

export interface ChatMessage {
  sender: string;
  content: string;
  timestamp?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private stompClient: Client;

  private messagesSignal = signal<ChatMessage[]>([]);

  public messages: Signal<ChatMessage[]> = this.messagesSignal.asReadonly();

  constructor() {
    this.stompClient = new Client({
      brokerURL: 'ws://localhost:8080/ws-chat',
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    this.stompClient.onConnect = (frame) => {
      console.log('Connecté au broker STOMP !', frame);

      this.stompClient.subscribe('/topic/messages', (message: Message) => {
        if (message.body) {
          try {
            const parsedMessage: ChatMessage = JSON.parse(message.body);

            this.messagesSignal.update((currentMessages) => [...currentMessages, parsedMessage]);
          } catch (error) {
            console.error('Erreur lors de la désérialisation du message STOMP :', error);
          }
        }
      });
    };

    this.stompClient.onStompError = (frame) => {
      console.error('Erreur STOMP de Spring: ' + frame.headers['message']);
      console.error('Détails: ' + frame.body);
    };
  }

  connect(): void {
    this.stompClient.activate();
  }

  disconnect(): void {
    if (this.stompClient.active) {
      this.stompClient.deactivate();
    }
  }

  sendMessage(chatMessage: ChatMessage): void {
    if (this.stompClient.active) {
      this.stompClient.publish({
        destination: '/app/chat.sendMessage',
        body: JSON.stringify(chatMessage),
      });
    } else {
      console.error("Impossible d'envoyer, le WebSocket n'est pas connecté.");
    }
  }
}
