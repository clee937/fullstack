package com.example.api;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Onomatopoeia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String onomatopoeia;
    private String meaning;
    private String example;
    private String category;

    public Onomatopoeia() {

    }

    public Onomatopoeia(Long id, String onomatopoeia, String meaning, String example, String category) {
        this.id = id;
        this.onomatopoeia = onomatopoeia;
        this.meaning = meaning;
        this.example = example;
        this.category = category;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getOnomatopoeia() {
        return onomatopoeia;
    }

    public void setOnomatopoeia(String onomatopoeia) {
        this.onomatopoeia = onomatopoeia;
    }

    public String getMeaning() {
        return meaning;
    }

    public void setMeaning(String meaning) {
        this.meaning = meaning;
    }

    public String getExample() {
        return example;
    }

    public void setExample(String example) {
        this.example = example;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}

