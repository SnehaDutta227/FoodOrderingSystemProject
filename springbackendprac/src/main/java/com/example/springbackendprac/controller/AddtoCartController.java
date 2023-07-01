	package com.example.springbackendprac.controller;
	

	import java.util.List;
	
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.http.HttpStatus;
	import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.GetMapping;
	
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RequestParam;
	import org.springframework.web.bind.annotation.RestController;
	
	
	import com.example.springbackendprac.model.*;
	import com.example.springbackendprac.services.AddtoCartService;
	
	@RestController
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/api/products/")
	public class AddtoCartController {
		
		@Autowired
		private AddtoCartService addtocartservice;
		
		@GetMapping("/addtocart")
		   public ResponseEntity<List<AddtoCart>> getAllProducts() {
		       List<AddtoCart> products = addtocartservice.getAllProducts();
		       return ResponseEntity.ok(products);
		   }
		
		 @PostMapping("/addtocart")
		    public ResponseEntity<String> createProductById(AddtoCart addtocart) {
			 try {
				 
				 
		            addtocartservice.saveProduct(addtocart);
		            return ResponseEntity.status(HttpStatus.CREATED).body("Product added successfully");
		        } catch (Exception e) {
		            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		        }
			 
			 
		 }
		
	
		
	
	}
