
package com.simplilearn.capstone_Project.service;

import com.simplilearn.capstone_Project.models.*;
import com.simplilearn.capstone_Project.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;


    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private MedicineRepository medicineRepository;

    public Order placeOrder(int userId) {
        // Get all items from the user's cart
        List<Cart> cartItems = cartRepository.findByUserId(userId);
        if (cartItems.isEmpty()) {
            throw new IllegalArgumentException("Your cart is empty.");
        }

        // Create a new Order
        Order order = new Order();
        order.setUserId(userId);
        order.setOrderDate(LocalDateTime.now());
        order.setStatus("PLACED");

        // Convert cart items into order items
        List<OrderItem> orderItems = new ArrayList<>();
        for (Cart cartItem : cartItems) {
            Medicine medicine = medicineRepository.findById(cartItem.getMedicineId())
                    .orElseThrow(() -> new IllegalArgumentException("Medicine not found: " + cartItem.getMedicineId()));

            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(order);
            orderItem.setMedicine(medicine);
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setPrice(medicine.getPrice()); // snapshot of current price

            orderItems.add(orderItem);
        }

        // Link items and save the order
        order.setOrderItems(orderItems);
        Order savedOrder = orderRepository.save(order);

        // Clear user's cart
        cartRepository.deleteByUserId(userId);

        return savedOrder;
    }

    // Optional helper: get all orders by user
    public List<Order> getOrdersByUser(int userId) {
        return orderRepository.findByUserId(userId);
    }

    // Optional helper: get all orders (admin)
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}
