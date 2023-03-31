package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gajae.demo.vo.WishListVO;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository
public class WishListDAO {
    
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;
    
    public int wishRegister( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.insert( "wishRegister", map );
        
        return result;
    }
    
    public List<WishListVO> getWishlist( Map<String, Object> map ) {
        
        List<WishListVO> wishlist = sqlSessionTemplate.selectList( "wishlist.getWistlist", map );
        
        log.info( "wishlist = {}", wishlist );
        
        return wishlist;
    }
    
}
