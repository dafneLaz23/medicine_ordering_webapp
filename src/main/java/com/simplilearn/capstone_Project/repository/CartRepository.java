package com.simplilearn.capstone_Project.repository;

import com.simplilearn.capstone_Project.models.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Integer> {
    List<Cart> findByUserId(int userId);
    
    void deleteByUserId(int userId);

    Optional<Cart> findByUserIdAndMedicineId(int userId, int medicineId);
    
    boolean existsByUserId(int userId);
    
}
