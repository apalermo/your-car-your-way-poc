package com.yourcaryourway.poc.services;

import com.yourcaryourway.poc.entities.ChatMessage;
import com.yourcaryourway.poc.repositories.ChatMessageRepository;
import org.springframework.stereotype.Service;

@Service
public class ChatMessageService {

    private final ChatMessageRepository repository;

    public ChatMessageService(ChatMessageRepository repository) {
        this.repository = repository;
    }

    public ChatMessage saveMessage(ChatMessage message) {
        return repository.save(message);
    }
}