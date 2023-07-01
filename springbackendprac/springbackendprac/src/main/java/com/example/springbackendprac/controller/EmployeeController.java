package com.example.springbackendprac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbackendprac.model.Employee;
import com.example.springbackendprac.repository.*;
import com.example.springbackendprac.services.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/")

public class EmployeeController {
	@Autowired
private EmployeeRepository employeeRepository;

	@GetMapping("/employees")
	public List <Employee> getAllEmployees(){
		return employeeRepository.findAll();
		
		
	}
	private final EmployeeService employeeservice;
	
	public EmployeeController(EmployeeService employeeservice) {
        this.employeeservice = employeeservice;
    }
	
	
	@PostMapping("/add")
	public ResponseEntity<String> addUser(@RequestBody Employee employee) {
		employeeservice.saveEmployee(employee);
		return ResponseEntity.status(HttpStatus.CREATED).body("User added successfully");
	}
	
	
	
	


}
