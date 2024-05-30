package com.example.api.models;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "onomatopoeias")
public class Onomatopoeia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String onomatopoeia;
    private String meaning;
    private String example;
    private LocalDate dateCreated = LocalDate.now();

    // Foreign key -> Primary key for the categories table
    @Column(name = "category_id")
    private long categoryId;

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(long categoryId) {
        this.categoryId = categoryId;
    }

    // - The key used for the join
    // - Column doesn't exist that it doesn't need to be updated or inserted
    @ManyToOne
    @JoinColumn(name = "category_id", insertable = false, updatable = false)
    private Category category;

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

    public LocalDate getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
    }

    @Override
    public String toString() {
        return "Onomatopoeia{" +
                "onomatopoeia=" + onomatopoeia +
                ", id=" + id +
                ", meaning='" + meaning + '\'' +
                ", example='" + example + '\'' +
                ", dateCreated=" + dateCreated +
                ", category=" + category +
                '}';
    }
}

