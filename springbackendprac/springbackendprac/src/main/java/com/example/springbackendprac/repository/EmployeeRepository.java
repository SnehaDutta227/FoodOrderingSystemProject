package com.example.springbackendprac.repository;

import org.springframework.stereotype.Repository;
import com.example.springbackendprac.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface EmployeeRepository extends JpaRepository <Employee,Integer > {

}

