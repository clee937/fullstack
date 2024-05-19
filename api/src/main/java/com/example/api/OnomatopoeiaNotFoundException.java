package com.example.api;

// INHERIT EXCEPTION BEHAVIOUR FROM SUPER CLASS
// PASS IN THE EXCEPTION MESSAGE IN THE CONSTRUCTOR

public class OnomatopoeiaNotFoundException extends RuntimeException  {

    public OnomatopoeiaNotFoundException() {
        super("Onomatopoeia has not been found");
    }
}
