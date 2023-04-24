package com.gajae.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gajae.demo.logic.PaymentLogic;
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@Log4j2( topic = "payment" )
@RequestMapping( "/payment/*" )
@RestController
public class PaymentController {
    
    @Autowired
    private PaymentLogic paymentLogic;
    
    @GetMapping( "paymentInformation" )
    public String paymentInformation( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        List<Map<String, Object>> paymentInfoList = paymentLogic.paymentInformation( map );
        
        Gson   gson = new Gson();
        String temp = gson.toJson( paymentInfoList );
        
        log.info( "temp ={}", temp );
        
        return temp;
    }
    
    @PostMapping( "paymentInsert" )
    public String paymentInsert( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = paymentLogic.paymentInsert( map );
        
        return String.valueOf( result );
    }
    
    @PostMapping( "paymentUpdate" )
    public String paymentUpdate( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = paymentLogic.paymentUpdate( map );
        
        return String.valueOf( result );
    }
}
