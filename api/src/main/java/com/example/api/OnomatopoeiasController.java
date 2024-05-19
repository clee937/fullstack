package com.example.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5174/")
public class OnomatopoeiasController {

    @Autowired
    OnomatopoeiasService onomatopoeiasService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(OnomatopoeiaNotFoundException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    @GetMapping("/onomatopoeias")
    public ResponseEntity<List<Onomatopoeia>> getOnomatopoeias() {
        return ResponseEntity.status(HttpStatus.OK).body(onomatopoeiasService.getAllOnomatopoeias());
    }
}