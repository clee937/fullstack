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
//    public String handleException(OnomatopoeiaNotFoundException exception) {
//        return exception.getMessage();
//    }


//    List<String> meals = new ArrayList<>();
//    {
//        meals.addAll(List.of("Chicken and Mushroom risotto", "Chicken korma", "King Prawn linguine"));
//    }

    public ResponseEntity<String> handleExceptions(OnomatopoeiaNotFoundException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

//     READ
//    public List<Meal> getMeals() {
//        return mealService.getAllMeals();
//    }

    @GetMapping("/onomatopoeias")
    public ResponseEntity<List<Onomatopoeia>> getOnomatopoeias() {
        System.out.println("INSIDE GET onomatopoeias()");
        return ResponseEntity.status(HttpStatus.OK).body(onomatopoeiasService.getAllOnomatopoeias());
    }


    // CREATE

    // READ

//    @GetMapping("/meals")
//    public List<String> getMeals() {
//        return meals;
//    }

}