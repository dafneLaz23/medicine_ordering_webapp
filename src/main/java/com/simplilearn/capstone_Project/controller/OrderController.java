package com.simplilearn.capstone_Project.controller;

import com.simplilearn.capstone_Project.models.Order;
import com.simplilearn.capstone_Project.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/place/{userId}")
    public Order placeOrder(@PathVariable int userId) {
        return orderService.placeOrder(userId);
    }


    @GetMapping("/user/{userId}")
    public List<Order> getUserOrders(@PathVariable int userId) {
        return orderService.getOrdersByUser(userId);
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }
}
