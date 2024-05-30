
package com.example.api.repositories;

import com.example.api.models.Onomatopoeia;
import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.List;

@Table(name = "onomatopoeias")
@Repository
public interface OnomatopoeiasRepository extends JpaRepository<Onomatopoeia, Long> {
    List<Onomatopoeia> getAllByOrderByDateCreatedDesc();

    List<Onomatopoeia> getOnomatopoeiasByCategoryNameIgnoreCase(String categoryName);

    @Query(value = "SELECT DISTINCT id FROM onomatopoeias ORDER BY id", nativeQuery = true)
    List<Long> getDistinctIds();

    @Query(value = "SELECT * FROM onomatopoeias WHERE id = :id", nativeQuery = true)
    Onomatopoeia getOnomatopoeiaById(@Param("id") long id);

    @Query(value="SELECT * FROM onomatopoeias", nativeQuery = true)
    List<Onomatopoeia> getAllOnomatopoeias();



}
