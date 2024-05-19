package com.example.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OnomatopoeiasService {
    @Autowired
    OnomatopoeiasRepository OnomatopoeiasRepository;

    // READ
    public List<Onomatopoeia> getAllOnomatopoeias() {
        return OnomatopoeiasRepository.getAllOnomatopoeias();
    }
}
