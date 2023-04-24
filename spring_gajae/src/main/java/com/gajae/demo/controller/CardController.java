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

import com.gajae.demo.logic.CardLogic;
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RequestMapping( "/card/*" )
@RestController
public class CardController {
    
    @Autowired
    private CardLogic cardLogic;
    
    @GetMapping( "cardInformation" )
    public String cardInformation( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        List<Map<String, Object>> cardInfoList = cardLogic.cardInformation( map );
        
        Gson   gson = new Gson();
        String temp = gson.toJson( cardInfoList );
        
        return temp;
    }
    
    @PostMapping( "cardInsert" )
    public String cardInsert( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = cardLogic.cardInsert( map );
        
        return String.valueOf( result );
    }
    
    @PostMapping( "cardUpdate" )
    public String cardUpdate( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = cardLogic.cardUpdate( map );
        
        return String.valueOf( result );
    }
    
    @GetMapping( "cardDelete" )
    public String cardDelete( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = cardLogic.cardDelete( map );
        
        return String.valueOf( result );
    }
}
