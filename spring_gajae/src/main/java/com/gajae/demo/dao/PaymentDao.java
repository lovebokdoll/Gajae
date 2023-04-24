package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lombok.extern.log4j.Log4j2;

@Repository
@Log4j2
public class PaymentDao {
    
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;
    
    public List<Map<String, Object>> paymentInformation( Map<String, Object> map ) {
        
        List<Map<String, Object>> paymentInfoList = sqlSessionTemplate.selectList( "payment.paymentInformation", map );
        
        log.info( "paymentInfoList = {}", paymentInfoList );
        
        return paymentInfoList;
    }
    
    public int paymentInsert( Map<String, Object> map ) {
        int result = sqlSessionTemplate.insert( "payment.paymentInsert", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
    public int paymentUpdate( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.update( "payment.paymentUpdate", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
  
}
