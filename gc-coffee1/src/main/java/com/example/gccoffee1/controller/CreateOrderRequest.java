package com.example.gccoffee1.controller;

import com.example.gccoffee1.model.OrderItem;

import java.util.List;

public record CreateOrderRequest(
        String email, String address, String postcode, List<OrderItem> orderItems
) {
}
