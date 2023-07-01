package com.example.springbackendprac.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Product_details")
public class Products {
   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
   private Long id;
   @Column(name="name")
    private String name;
   @Column(name="description")
    private String description;
   @Column(name="category")
    private String category;
   @Column(name="price")
    private String price;
   @Column(name="image")
    private String image;

    public Products() {
    }

    public Products(String name, String description, String category, String price, String image) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.image = image;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getImage() {
		return image;
	}

	public void setImagePath(String image) {
		this.image = image;
	}

   
}
