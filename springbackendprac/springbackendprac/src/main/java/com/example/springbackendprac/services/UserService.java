package com.example.springbackendprac.services;

import org.springframework.beans.factory.annotation.Autowired;


import com.example.springbackendprac.model.LoggedinUser;
import com.example.springbackendprac.repository.UserRepository;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service

public class UserService {
    private final UserRepository userRepository;
   
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    
    public LoggedinUser findByemail(String email) {
        return userRepository.findByemail(email);
    }

    public boolean isValidUser(String email, String password) {
        LoggedinUser user = userRepository.findByemail(email);
        if (user != null) {
            return passwordEncoder.matches(password, user.getPassword());
        }
        return false;
    }
}
