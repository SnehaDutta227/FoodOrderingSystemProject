package com.example.springbackendprac.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.example.springbackendprac.model.Products;
import com.example.springbackendprac.repository.ProductsRepository;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Service
public class ProductsServiceImpl implements ProductsService {
	private final Path imageUploadPath;

    @Autowired
    private ProductsRepository productsRepository;

    public ProductsServiceImpl() {
        this.imageUploadPath = Path.of("C://Users//KIIT//Downloads/Databaseimages/");
    }

    @Override
    public List<Products> getAllProducts() {
        return productsRepository.findAll();
    }

    @Override
    
    public Products getProductById(Long id) {
        return productsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
    }

    @Override
    public void saveProduct(Products products) {
        productsRepository.save(products);
    }

    @Override
    public void deleteProduct(Long id) {
        productsRepository.deleteById(id);
    }

    @Override
    public String saveImage(MultipartFile image) throws IOException {
        if (image != null && !image.isEmpty()) {
            String originalFilename = StringUtils.cleanPath(image.getOriginalFilename());
            Path imagePath = imageUploadPath.resolve(originalFilename);
            Files.copy(image.getInputStream(), imagePath, StandardCopyOption.REPLACE_EXISTING);
            return imagePath.toString();
        }
        return null;
    }


}
