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
    
    @GetMapping( "getWishlist" )
    public String getWishlist( @RequestParam Map<String, Object> map ) {
        
        List<WishListVO> wishlist = wishListLogic.getWishlist( map );
        
        Gson   gson = new Gson();
        String temp = gson.toJson( wishlist );
        
        return temp;
    }
    
    @PostMapping( "wishInsert" )
    public String wishInsert( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = wishListLogic.wishInsert( map );
        
        return String.valueOf( result );
    }
    
    @PostMapping( "wishUpdate" )
    public String wishUpdate( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = wishListLogic.wishUpdate( map );
        
        return String.valueOf( result );
    }
    
    @GetMapping( "wishDelete" )
    public String wishDelete( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = wishListLogic.wishDelete( map );
        
        return String.valueOf( result );
    }
}
