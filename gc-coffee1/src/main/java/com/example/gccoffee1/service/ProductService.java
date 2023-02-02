package com.example.gccoffee1.service;

import com.example.gccoffee1.model.Category;
import com.example.gccoffee1.model.Product;

import java.util.List;

public interface ProductService {

    List<Product> getProductsByCategory(Category category);

    List<Product> getAllProducts();

    Product createProduct(String productName, Category category, long price);

    Product createProduct(String productName, Category category, long price, String description);


}
