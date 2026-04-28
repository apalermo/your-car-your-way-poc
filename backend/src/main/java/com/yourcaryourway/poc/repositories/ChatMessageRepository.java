package com.yourcaryourway.poc.repositories;

import com.yourcaryourway.poc.entities.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface d'accès aux données pour l'entité ChatMessage.
 * En étendant JpaRepository, Spring génère automatiquement toutes les requêtes SQL de base
 * (save, findAll, findById, delete) sans que nous ayons à écrire de code supplémentaire.
 */
@Repository
public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {
}