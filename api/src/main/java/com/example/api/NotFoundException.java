package com.example.api;

// INHERIT EXCEPTION BEHAVIOUR FROM SUPER CLASS

import org.springframework.http.HttpStatus;

public class NotFoundException extends RuntimeException {
    private HttpStatus code = HttpStatus.NOT_FOUND;

    public NotFoundException(String message) {
        super(message);
    }

    public HttpStatus getCode() {
        return code;
    }

    public void setCode(HttpStatus code) {
        this.code = code;
    }
}
