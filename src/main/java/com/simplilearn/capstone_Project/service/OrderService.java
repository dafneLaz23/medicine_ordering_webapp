
package com.simplilearn.capstone_Project.service;

import com.simplilearn.capstone_Project.models.*;
import com.simplilearn.capstone_Project.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private MedicineRepository medicineRepository;
  

    public List<Order> getOrdersByUser(int userId) {
        return orderRepository.findByUserId(userId);
    }


    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order createOrder(OrderRequest request) {
        // Create a new order
        Order order = new Order();
        order.setCustomerName(request.getCustomerName());


        List<OrderItem> orderItems = new ArrayList<>();

        for (OrderItemRequest itemRequest : request.getItems()) {
            Medicine medicine = medicineRepository.findById(itemRequest.getMedicineId())
                    .orElseThrow(() -> new RuntimeException("Medicine not found with ID: " + itemRequest.getMedicineId()));

            OrderItem orderItem = new OrderItem();
            orderItem.setMedicine(medicine);
            orderItem.setQuantity(itemRequest.getQuantity());
            orderItem.setOrder(order);

            orderItems.add(orderItem);
        }

        // Attach items and save everything
        order.setOrderItems(orderItems);
        return orderRepository.save(order);
    }
}

