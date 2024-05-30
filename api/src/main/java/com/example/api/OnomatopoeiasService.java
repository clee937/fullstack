package com.example.api;

import com.example.api.models.Category;
import com.example.api.models.Onomatopoeia;
import com.example.api.repositories.CategoryRepository;
import com.example.api.repositories.OnomatopoeiasRepository;
import com.example.api.responses.Option;
import com.example.api.responses.OptionContract;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OnomatopoeiasService {
    @Autowired
    OnomatopoeiasRepository onomatopoeiasRepository;
    @Autowired
    CategoryRepository categoryRepository;

    // CREATE

    public Onomatopoeia addOnomatopoeia(Onomatopoeia onomatopoeia) {
        //Validate greeting and check for null values
        //Greeting newGreeting = new Greeting(greeting.getId());

        // Validate a greeting
        Category category = categoryRepository.findById(onomatopoeia.getCategoryId()).orElseThrow(() -> new NotFoundException("Category Not Found"));

        Onomatopoeia newOnomatopoeia = onomatopoeiasRepository.save(onomatopoeia);

        // The data returned has the join

        newOnomatopoeia.setCategory(category);
        System.out.println(newOnomatopoeia);

        return newOnomatopoeia;
    }

    // READ
    public List<Onomatopoeia> getAllOnomatopoeias(int limit) {
        return onomatopoeiasRepository
                .getAllByOrderByDateCreatedDesc()
                .stream()
                .limit(limit)
                .collect(Collectors.toList());
    }

    public List<Onomatopoeia> getOnomatopoeiasByCategoryName(String categoryName, int limit) {

        List<Onomatopoeia> onomatopoeias = onomatopoeiasRepository.getOnomatopoeiasByCategoryNameIgnoreCase(categoryName);

        return onomatopoeias
                .stream()
                .limit(limit)
                .collect(Collectors.toList());
    }

    public List<Option> getCategories() {
        return getFormOptions(categoryRepository.findAll());
    }

    public List<Long> getOnomatopoeiaIds() {
        return onomatopoeiasRepository.getDistinctIds();
    }

    public Onomatopoeia getOnomatopoeiaById(long id) {
        return onomatopoeiasRepository.findById(id).orElseThrow(() -> new NotFoundException("Onomatopoeia Not Found"));
    }

    // HELPER
    private List<Option> getFormOptions(List<? extends OptionContract> options) {
        return options
                .stream()
                .distinct()
                .map(option -> new Option(option.getId(), option.getName()))
                .collect(Collectors.toList());
    }

}
