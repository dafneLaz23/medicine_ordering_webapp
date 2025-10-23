package com.simplilearn.capstone_Project.service;

import com.simplilearn.capstone_Project.models.OrderItem;
import com.simplilearn.capstone_Project.repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemService {

    @Autowired
    private OrderItemRepository orderItemRepository;

    //Get all items for a specific order
    public List<OrderItem> getItemsByOrderId(int orderId) {
        return orderItemRepository.findByOrderId(orderId);
    }

    //Get all order items (admin use or debugging)
    public List<OrderItem> getAllOrderItems() {
        return orderItemRepository.findAll();
    }

    //Add a single order item manually (if needed)
    public OrderItem addOrderItem(OrderItem orderItem) {
        if (orderItem.getOrder() == null || orderItem.getMedicine() == null) {
            throw new IllegalArgumentException("Order and Medicine must be provided.");
        }
        return orderItemRepository.save(orderItem);
    }

    //Delete an order item
    public void deleteOrderItem(int id) {
        if (!orderItemRepository.existsById(id)) {
            throw new IllegalArgumentException("Order item not found with ID: " + id);
        }
        orderItemRepository.deleteById(id);
    }
}
