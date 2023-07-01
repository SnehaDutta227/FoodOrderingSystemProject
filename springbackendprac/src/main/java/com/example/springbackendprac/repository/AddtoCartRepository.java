package com.example.springbackendprac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springbackendprac.model.AddtoCart;

@Repository
public interface AddtoCartRepository extends JpaRepository<AddtoCart,Long>{

}
