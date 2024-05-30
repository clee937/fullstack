package com.example.api;

import com.example.api.models.Onomatopoeia;
import com.example.api.responses.Option;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5174/")
public class OnomatopoeiasController {

    @Autowired
    OnomatopoeiasService onomatopoeiaService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    // CREATE

    @PostMapping("/onomatopoeia")
    public ResponseEntity<Onomatopoeia> createOnomatopoeia(@RequestBody Onomatopoeia onomatopoeia) {
        Onomatopoeia newOnomatopoeia = onomatopoeiaService.addOnomatopoeia(onomatopoeia);
        return ResponseEntity.status(HttpStatus.CREATED).body(newOnomatopoeia);
    }

    // READ

    @GetMapping("/onomatopoeias")
    public ResponseEntity<List<Onomatopoeia>> getOnomatopoeias(@RequestParam(required = false) String categoryName, @RequestParam(defaultValue = "200") int limit) {

        if (categoryName != null) {
            return ResponseEntity.status(HttpStatus.OK).body(onomatopoeiaService.getOnomatopoeiasByCategoryName(categoryName, limit));
        }

        return ResponseEntity.status(HttpStatus.OK).body(onomatopoeiaService.getAllOnomatopoeias(limit));
    }

    @GetMapping("/onomatopoeias/ids")
    public ResponseEntity<List<Long>> getOnomatopoeiaIds() {
        return ResponseEntity.status(HttpStatus.OK).body(onomatopoeiaService.getOnomatopoeiaIds());
    }

    @GetMapping("/onomatopoeias/categories")
    public ResponseEntity<List<Option>> getOnomatopoeiasCategories() {
        return ResponseEntity.status(HttpStatus.OK).body(onomatopoeiaService.getCategories());
    }

    @GetMapping("/onomatopoeia/{id}")
    public ResponseEntity<Onomatopoeia> getOnomatopoeiaById(@PathVariable long id) {
        return ResponseEntity.status(HttpStatus.OK).body(onomatopoeiaService.getOnomatopoeiaById(id));
    }
}