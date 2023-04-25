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

import com.gajae.demo.logic.PropertyLogic;
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping( "/property/*" )
public class PropertyController {
    
    @Autowired
    private PropertyLogic propertyLogic;
    
    @GetMapping( "list" )
    public String propertyList( @RequestParam Map<String, Object> pMap ) {
        
        log.info( "pMap = {}", pMap );
        List<Map<String, Object>> propertyList = propertyLogic.propertyList( pMap );
        
        Gson   gson = new Gson();
        String json;
        
        if ( propertyList != null ) {
            json = gson.toJson( propertyList );
        }
        else {
            json = "[]"; // 빈 배열 반환
        }
        return json;
    }
    
    @PostMapping( "insert" )
    public String propertyInsert( @RequestBody Map<String, Object> pMap ) {
        log.info( "pMap = {}", pMap );
        
        int result = propertyLogic.propertyInsert( pMap );
        
        return String.valueOf( result );
    }
    
    @PostMapping( "update" )
    public String propertyUpdate( @RequestBody Map<String, Object> pMap ) {
        log.info( "pMap = {}", pMap );
        
        int result = propertyLogic.propertyUpdate( pMap );
        
        return String.valueOf( result );
    }
    
    @GetMapping( "delete" )
    public String propertyDelete( @RequestParam Map<String, Object> pMap ) {
        log.info( "pMap = {}", pMap );
        
        int result = propertyLogic.propertyDelete( pMap );
        
        return String.valueOf( result );
    }
    
    @GetMapping( "propertyForPayment" )
    public String propertyForPayment( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        List<Map<String, Object>> propertyList = propertyLogic.propertyForPayment( map );
        
        Gson   gson = new Gson();
        String temp = gson.toJson( propertyList );
        log.info( "temp = {}", temp );
        return temp;
    }
}
