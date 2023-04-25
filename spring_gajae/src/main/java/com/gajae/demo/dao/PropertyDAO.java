package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gajae.demo.vo.PropertyVO;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository
public class PropertyDAO {
    
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;
    
    public List<PropertyVO> propertyList( Map<String, Object> map ) {
        
        List<PropertyVO> propertyList = sqlSessionTemplate.selectList( "property.list", map );
        
        log.info( "propertyList = {}", propertyList );
        
        return propertyList;
    }
    
    public int propertyInsert( Map<String, Object> pMap ) {
        
        int result = sqlSessionTemplate.insert( "propertyInsert", pMap );
        
        return result;
    }
    
    public int propertyUpdate( Map<String, Object> pMap ) {
        
        int result = sqlSessionTemplate.update( "propertyUpdate", pMap );
        
        return result;
    }
    
    public int propertyDelete( Map<String, Object> pMap ) {
        
        int result = sqlSessionTemplate.delete( "propertyDelete", pMap );
        
        return result;
    }
    
    public List<Map<String, Object>> propertyForPayment( Map<String, Object> map ) {
        
        List<Map<String, Object>> propertyList = sqlSessionTemplate.selectList( "property.propertyForPayment", map );
        
        log.info( "propertyList = {}", propertyList );
        
        return propertyList;
    }
    
}
