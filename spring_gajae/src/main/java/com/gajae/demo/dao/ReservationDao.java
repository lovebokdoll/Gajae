package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository
public class ReservationDao {
    
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;
    
    public List<Map<String, Object>> resInformation( Map<String, Object> map ) {
        
        List<Map<String, Object>> paymentInfoList = sqlSessionTemplate.selectList( "reservation.resInformation", map );
        
        log.info( "paymentInfoList = {}", paymentInfoList );
        
        return paymentInfoList;
    }
    
    public int resInsert( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.insert( "reservation.resInsert", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
    public int resUpdate( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.update( "reservation.resUpdate", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
    public int vacancyUpdate( Map<String, Object> map ) {
        
        
        int result = sqlSessionTemplate.update( "vacancy.vacancyUpdate", map );
        
        return result;
    }
    
}
