package com.example.springbackendprac.services;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.springbackendprac.model.Products;

public interface ProductsService {
	List<Products> getAllProducts();

    Products getProductById(Long id);

    void saveProduct(Products products);

    void deleteProduct(Long id);

    String saveImage(MultipartFile image) throws IOException;
}
