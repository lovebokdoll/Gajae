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

import com.gajae.demo.logic.WishListLogic;
import com.gajae.demo.vo.WishListVO;
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping( "/wishlist/*" )
public class WishListController {
    
    @Autowired
    private WishListLogic wishListLogic;
    
    @GetMapping( "wishlistInformation" )
    public String wishlistInformation( @RequestParam Map<String, Object> map ) {
        
        List<Map<String, Object>> wishlist = wishListLogic.wishlistInformation( map );
        
        Gson   gson = new Gson();
        String temp = gson.toJson( wishlist );
        
        return temp;
    }
    
    @PostMapping( "wishlistInsert" )
    public String wishlistInsert( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = wishListLogic.wishlistInsert( map );
        
        return String.valueOf( result );
    }
    
    @GetMapping( "wishlistDeactivate" )
    public String wishlistDeactivate( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = wishListLogic.wishlistDeactivate( map );
        
        return String.valueOf( result );
    }
    
    @PostMapping( "wishlistUpdate" )
    public String wishlistUpdate( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = wishListLogic.wishlistUpdate( map );
        
        return String.valueOf( result );
    }
}
