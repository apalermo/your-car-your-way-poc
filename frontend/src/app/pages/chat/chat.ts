import { Component, OnInit, inject, signal, DestroyRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ChatService, ChatMessage } from '../../core/services/chat';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class ChatComponent implements OnInit {
  private chatService = inject(ChatService);
  private destroyRef = inject(DestroyRef);

  public messages = this.chatService.messages;
  public currentUser = signal<string>('Agence_Sarah');
  public newMessageContent = signal<string>('');

  ngOnInit(): void {
    this.chatService.connect();

    this.destroyRef.onDestroy(() => {
      this.chatService.disconnect();
    });
  }

  sendMessage(): void {
    const content = this.newMessageContent().trim();

    if (content) {
      const message: ChatMessage = {
        sender: this.currentUser(),
        content: content,
      };

      this.chatService.sendMessage(message);

      this.newMessageContent.set('');
    }
  }
}
