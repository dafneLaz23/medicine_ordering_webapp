package com.simplilearn.capstone_Project.service;

import com.simplilearn.capstone_Project.models.Cart;
import com.simplilearn.capstone_Project.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public List<Cart> getUserCart(int userId) {
        return cartRepository.findByUserId(userId);
    }

    public Cart addToCart(Cart cart) {
        if (cart.getUserId() == 0 || cart.getMedicineId() == 0) {
            throw new IllegalArgumentException("User ID and Medicine ID are required.");
        }

        // ✅ Check if this product is already in the user's cart
        Optional<Cart> existingCartItem = cartRepository.findByUserIdAndMedicineId(cart.getUserId(), cart.getMedicineId());

        if (existingCartItem.isPresent()) {
            // Product already exists — update quantity
            Cart item = existingCartItem.get();
            item.setQuantity(item.getQuantity() + cart.getQuantity());
            return cartRepository.save(item);
        } else {
            // Product not in cart — add new entry
            return cartRepository.save(cart);
        }
    }

    public void clearCart(int userId) {
        if (!cartRepository.existsByUserId(userId)) {
            throw new IllegalArgumentException("Cart is already empty or user not found.");
        }
        cartRepository.deleteByUserId(userId);
    }
}
