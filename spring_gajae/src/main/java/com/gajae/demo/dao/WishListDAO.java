package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository
public class WishListDAO {
    
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;
    
    public int wishlistInsert( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.insert( "wishlist.wishlistInsert", map );
        
        return result;
    }
    
    public int checkWishlist( Map<String, Object> map ) {
        
        int count = sqlSessionTemplate.selectOne( "wishlist.checkWishlist", map );
        
        return count;
    }
    
    public List<Map<String, Object>> wishlistInformation( Map<String, Object> map ) {
        
        List<Map<String, Object>> wishlist = sqlSessionTemplate.selectList( "wishlist.wishlistInformation", map );
        
        log.info( "wishlist = {}", wishlist );
        
        return wishlist;
    }
    
    public int wishlistActivate( Map<String, Object> map ) {
        int result = sqlSessionTemplate.update( "wishlist.wishlistActivate", map );
        
        return result;
    }
    
    public int wishlistDeactivate( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.update( "wishlist.wishlistDeactivate", map );
        
        return result;
    }
    
    public int wishlistUpdate( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.update( "wishlist.wishlistUpdate", map );
        
        return result;
    }
    
    public List<Map<String, Object>> checkActivate( Map<String, Object> map ) {
        
        List<Map<String, Object>> activate = sqlSessionTemplate.selectList( "wishlist.checkActivate", map );
        
        log.info( "activate = {}", activate );
        
        return activate;
    }
}
