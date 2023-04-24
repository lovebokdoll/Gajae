package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository
public class CardDao {
    
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;
    
    public List<Map<String, Object>> cardInformation( Map<String, Object> map ) {
        
        List<Map<String, Object>> cardInfoList = sqlSessionTemplate.selectList( "card.cardInformation", map );
        
        log.info( "cardInfoList = {}", cardInfoList );
        
        return cardInfoList;
    }
    
    public int cardInsert( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.insert( "card.cardInsert", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
    public int cardUpdate( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.update( "card.cardUpdate", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
    public int cardDelete( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.delete( "card.cardDelete", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
}
