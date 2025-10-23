package com.simplilearn.capstone_Project.controller;

import com.simplilearn.capstone_Project.models.Cart;
import com.simplilearn.capstone_Project.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:4200")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/{userId}")
    public List<Cart> getUserCart(@PathVariable int userId) {
        return cartService.getUserCart(userId);
    }

    @PostMapping("/add")
    public Cart addToCart(@RequestBody Cart cart) {
        return cartService.addToCart(cart);
    }

    @DeleteMapping("/clear/{userId}")
    public void clearCart(@PathVariable int userId) {
        cartService.clearCart(userId);
    }
}
