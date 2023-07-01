package com.example.springbackendprac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springbackendprac.model.Products;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {
}