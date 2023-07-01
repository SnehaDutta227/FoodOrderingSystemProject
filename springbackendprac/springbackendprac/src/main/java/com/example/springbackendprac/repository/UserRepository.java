package com.example.springbackendprac.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springbackendprac.model.LoggedinUser;
@Repository
public interface UserRepository extends JpaRepository<LoggedinUser,Integer> {
	LoggedinUser findByemail(String email);
	

}
