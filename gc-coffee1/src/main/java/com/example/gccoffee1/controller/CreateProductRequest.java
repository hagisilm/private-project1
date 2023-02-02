package com.example.gccoffee1.controller;

import com.example.gccoffee1.model.Category;

public record CreateProductRequest(String productName, Category category,long price, String description) {
}
