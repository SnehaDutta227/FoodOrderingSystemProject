package com.example.springbackendprac.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springbackendprac.model.Employee;	
import com.example.springbackendprac.repository.EmployeeRepository;
@Service
public class EmployeeServiceImpl implements EmployeeService{
   
	
	private EmployeeRepository employeeRepository;
	@Autowired	
	public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

	
	@Override
	public Employee saveEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}
}
