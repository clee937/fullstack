package com.example.api.models;

import jakarta.persistence.Entity;

import com.example.api.responses.OptionContract;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "categories")
public class Category implements OptionContract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String categoryInfo;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategoryInfo() {
        return categoryInfo;
    }

    public void setCategoryInfo(String categoryInfo) {
        this.categoryInfo = categoryInfo;
    }

    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", categoryInfo='" + categoryInfo + '\'' +
                '}';
    }
}

