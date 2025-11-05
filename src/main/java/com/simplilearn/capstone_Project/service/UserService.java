package com.simplilearn.capstone_Project.service;

import com.simplilearn.capstone_Project.models.User;
import com.simplilearn.capstone_Project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    private Map<String, User> users = new HashMap<>();
    
    
    public UserService() {
        // Simulated users
    	User adminUser = new User();
    		 adminUser.setEmail("admin@gmail.com");
    		 adminUser.setUsername("admin123");
    		 adminUser.setPassword("ADMIN");
    		 adminUser.setRole("admin");
    	
	    User customer = new User();
	         customer.setEmail("john123@gmail.com");
	         customer.setUsername("john123");
	         customer.setPassword("CUSTOMER");
	         customer.setRole("customer");
    		 
        users.put("admin", adminUser);
        users.put("john", customer);
    }
    
    public User authenticate(String username, String password) {
        User user = users.get(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
    
    public User registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already registered!");
        }
        return userRepository.save(user);
    }
/**
    public User loginUser(String email, String password) {
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isPresent() && userOpt.get().getPassword().equals(password)) {
            return userOpt.get();
        } else {
            throw new RuntimeException("Invalid email or password!");
        }
    }
**/
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
