package com.simplilearn.capstone_Project.controller;

import com.simplilearn.capstone_Project.models.User;
import com.simplilearn.capstone_Project.service.AuthenticateUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    private AuthenticateUser authService;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginData) {
        String username = loginData.get("username");
        String password = loginData.get("password");

        User user = authService.authenticate(username, password);

        if (user != null) {
            return ResponseEntity.ok(Map.of(
                "message", "Login successful",
                "role", user.getRole()
            ));
        } else {
            return ResponseEntity.status(401).body(Map.of(
                "message", "Invalid credentials"
            ));
        }
    }
}
