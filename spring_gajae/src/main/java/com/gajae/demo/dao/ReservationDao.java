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
        
        List<Map<String, Object>> resInfoList = sqlSessionTemplate.selectList( "reservation.resInformation", map );
        
        log.info( "resInfoList = {}", resInfoList );
        
        return resInfoList;
    }
    
    public long resInsert( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.insert( "reservation.resInsert", map );
        
        log.info( "result = {}", result );
        
        long r_number = 0;
        
        if ( result == 1 ) {// insert가 되면
            
            if ( map.get( "r_number" ) != null ) {
                log.info( "r_number ={}", map.get( "r_number" ) );
                r_number = Long.parseLong( map.get( "r_number" ).toString() );
                log.info( "r_number ={}", r_number );
            }
        }
        
        log.info( "result = {}", result );
        log.info( "useGeneratedKeys 프로퍼티 속성값 = {}", r_number );
        return r_number;
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
    
    public List<Map<String, Object>> resNotification( Map<String, Object> map ) {
        
        List<Map<String, Object>> notificationList = sqlSessionTemplate.selectList( "reservation.resNotification", map );
        
        log.info( "notificationList = {}", notificationList );
        
        return notificationList;
    }
}
