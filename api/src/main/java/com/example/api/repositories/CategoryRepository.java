package com.example.api.repositories;

import com.example.api.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import jakarta.persistence.Table;

@Table(name = "categories")
@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
