package com.gajae.demo.logic;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.WishListDAO;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class WishListLogic {
    
    @Autowired
    private WishListDAO wishListDAO;
    
    public int wishlistInsert( Map<String, Object> map ) {
        
        int count  = checkWishlist( map );
        int result = 0;
        
        log.info( "count = {}", count );
        
        if ( count == 0 ) {
            result = wishListDAO.wishlistInsert( map );
        }
        else if ( count == 1 ) {
            List<Map<String, Object>> activate = checkActivate( map );
            
            wishlistActivate( map, activate );
        }
        return result;
    }
    
    private int checkWishlist( Map<String, Object> map ) {
        
        int count = wishListDAO.checkWishlist( map );
        
        return count;
    }
    
    private List<Map<String, Object>> checkActivate( Map<String, Object> map ) {
        
        List<Map<String, Object>> activate = wishListDAO.checkActivate( map );
        
        return activate;
    }
    
    public List<Map<String, Object>> wishlistInformation( Map<String, Object> map ) {
        
        List<Map<String, Object>> wishlist = wishListDAO.wishlistInformation( map );
        
        return wishlist;
    }
    
    private int wishlistActivate( Map<String, Object> map, List<Map<String, Object>> activate ) {
        log.info( "map = {}", map );
        log.info( "activate = {}", activate );
        int result = 0;
        
        if ( !activate.isEmpty() ) {
            String wlActivate = ( String ) activate.get( 0 ).get( "WL_ACTIVATE" );
            
            if ( wlActivate.equals( "N" ) ) {
                result = wishListDAO.wishlistActivate( map );
            }
        }
        log.info( "result = {}", result );
        
        return result;
    }
    
    public int wishlistDeactivate( Map<String, Object> map ) {
        
        int result = wishListDAO.wishlistDeactivate( map );
        
        return result;
    }
    
    public int wishlistUpdate( Map<String, Object> map ) {
        
        int result = wishListDAO.wishlistUpdate( map );
        
        return result;
    }
    
}
