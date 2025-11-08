package com.simplilearn.capstone_Project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.simplilearn.capstone_Project.models.Medicine;

public interface MedicineRepository extends JpaRepository<Medicine, Integer> {
}

