package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository
public class MypageDAO {
    
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;
    
    public List<Map<String, Object>> myReservation( Map<String, Object> map ) {
        
        List<Map<String, Object>> myResList = sqlSessionTemplate.selectList( "mypage.myResFirst", map );
        
        log.info( "myResList = {}", myResList );
        
        return myResList;
    }
    
    public List<Map<String, Object>> myReservationJoin( Map<String, Object> tempMap ) {
        
        List<Map<String, Object>> myResJoinList = sqlSessionTemplate.selectList( "mypage.myReservation", tempMap );
        
        log.info( "myResJoinList = {}", myResJoinList );
        
        return myResJoinList;
    }
    
}
