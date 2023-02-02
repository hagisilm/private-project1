package com.example.gccoffee1.service;

import com.example.gccoffee1.model.Email;
import com.example.gccoffee1.model.Order;
import com.example.gccoffee1.model.OrderItem;

import java.util.List;

public interface OrderService {

    Order createOrder(Email email, String address, String postcode, List<OrderItem> orderItems);
}
