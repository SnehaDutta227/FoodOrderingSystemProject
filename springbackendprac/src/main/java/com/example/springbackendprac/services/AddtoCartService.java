package com.example.springbackendprac.services;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.springbackendprac.model.AddtoCart;


public interface AddtoCartService {
	public void saveProduct(AddtoCart addtocart);
	 public List<AddtoCart> getAllProducts();
	
	public String saveImage(MultipartFile image) throws IOException ;
}
