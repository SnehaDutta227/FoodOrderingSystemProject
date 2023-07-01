package com.example.springbackendprac.services;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.example.springbackendprac.model.AddtoCart;
import com.example.springbackendprac.model.Products;
import com.example.springbackendprac.repository.AddtoCartRepository;

@Service
public class AddtoCartServiceImpl implements AddtoCartService {
	
	
	
	private AddtoCartRepository addtocartrepository;
	@Autowired
	public AddtoCartServiceImpl (AddtoCartRepository addtocartrepository) {
		this.addtocartrepository=addtocartrepository;
	}
	
	@Override
    public void saveProduct(AddtoCart addtocart) {
        addtocartrepository.save(addtocart);
    }
	
	 @Override
	    public List<AddtoCart> getAllProducts() {
	        return addtocartrepository.findAll();
	    }

@Override
public String saveImage(MultipartFile image) throws IOException {
    if (image != null && !image.isEmpty()) {
        String originalFilename = StringUtils.cleanPath(image.getOriginalFilename());
        return originalFilename; // Return the original filename or any other desired identifier to store in the database
    }
    return null;
}



}
