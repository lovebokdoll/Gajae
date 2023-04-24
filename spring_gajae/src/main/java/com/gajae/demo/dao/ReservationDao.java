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
        
        int result   = sqlSessionTemplate.insert( "reservation.resInsert", map );
        int r_number = 0;
        
        // INSERT 성공 시 시퀀스로 생성된 번호 가져오기
        if ( result == 1 ) {
            
            if ( map.get( "r_number" ) != null ) {
                r_number = Integer.parseInt( map.get( "r_number" ).toString() );
            }
        }
        
        log.info( "result = {}", result );
        log.info( "r_number = {}", r_number );
        
        return r_number;
    }
    
    public int resUpdate( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.update( "reservation.resUpdate", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
}
