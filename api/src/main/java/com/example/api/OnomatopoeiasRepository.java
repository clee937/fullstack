
package com.example.api;

import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import java.util.List;

//@Table(name = "Onomatopoeias")
@Repository
public interface OnomatopoeiasRepository extends JpaRepository<Onomatopoeia, Long> {

    @Query(value="SELECT * FROM onomatopoeias", nativeQuery = true)
    List<Onomatopoeia> getAllOnomatopoeias();

}
