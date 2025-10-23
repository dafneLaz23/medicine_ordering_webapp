package com.simplilearn.capstone_Project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.simplilearn.capstone_Project.models.Order;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findByUserId(int userId);
}