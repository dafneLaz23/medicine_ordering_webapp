package com.simplilearn.capstone_Project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.simplilearn.capstone_Project.models.User;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
}