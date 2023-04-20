package com.gajae.demo.logic;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.WishListDAO;
import com.gajae.demo.vo.WishListVO;

@Service
public class WishListLogic {
    
    @Autowired
    private WishListDAO wishListDAO;
    
    public int wishRegister( Map<String, Object> map ) {
        int result = wishListDAO.wishRegister( map );
        
        return result;
    }
    
    public List<WishListVO> getWishlist( Map<String, Object> map ) {
        
        List<WishListVO> wishlist = wishListDAO.getWishlist( map );
        
        return wishlist;
    }
    
}
