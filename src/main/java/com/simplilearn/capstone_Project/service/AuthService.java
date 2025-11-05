package com.simplilearn.capstone_Project.service;

import com.simplilearn.capstone_Project.models.User;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    // This is a simplified example — you can replace it with database logic
    public User authenticate(String username, String password) {
        // Hardcoded example for testing
        if (username.equals("admin") && password.equals("admin123")) {
            return new User("admin", "ADMIN");
        } else if (username.equals("user") && password.equals("user123")) {
            return new User("user", "USER");
        }
        return null;
    }
    
    
}
