package com.example.springbackendprac.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.example.springbackendprac.model.*;

import com.example.springbackendprac.services.ProductsService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/products/")

public class ProductsContoller {
	@Autowired
    private ProductsService productsService;

   @GetMapping("/get")
   public ResponseEntity<List<Products>> getAllProducts() {
       List<Products> products = productsService.getAllProducts();
       return ResponseEntity.ok(products);
   }
   @GetMapping("/{id}")
   public ResponseEntity<Products> getProductById(@PathVariable("id") String id) {
	   
       Long productId = Long.parseLong(id);
       Products product = productsService.getProductById(productId);
       
       return new ResponseEntity<>(product, HttpStatus.OK);
   }
	
	@PostMapping("/add")
    
    public ResponseEntity<String> createProduct(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("category") String category,
            @RequestParam("price") String price,
            @RequestParam("image") MultipartFile image) {

        try {
            String imagePath = productsService.saveImage(image);
            Products products = new Products(name, description, category, price, imagePath);
            productsService.saveProduct(products);
            return ResponseEntity.status(HttpStatus.CREATED).body("Product added successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
