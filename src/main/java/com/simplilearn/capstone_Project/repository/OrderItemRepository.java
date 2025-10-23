package com.simplilearn.capstone_Project.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.simplilearn.capstone_Project.models.*;
import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {
	List<OrderItem> findByOrderId(int orderId);
}
