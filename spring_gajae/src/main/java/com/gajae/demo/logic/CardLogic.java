package com.gajae.demo.logic;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.CardDao;

@Service
public class CardLogic {
    
    @Autowired
    private CardDao cardDao;
    
    public List<Map<String, Object>> cardInformation( Map<String, Object> map ) {
        
        List<Map<String, Object>> cardInfoList = cardDao.cardInformation( map );
        
        return cardInfoList;
    }
    
    public int cardInsert( Map<String, Object> map ) {
        
        int result = cardDao.cardInsert( map );
        
        return result;
    }
    
    public int cardUpdate( Map<String, Object> map ) {
        
        int result = cardDao.cardUpdate( map );
        
        return result;
    }
    
    public int cardDelete( Map<String, Object> map ) {
        
        int result = cardDao.cardDelete( map );
        
        return result;
    }
    
}
