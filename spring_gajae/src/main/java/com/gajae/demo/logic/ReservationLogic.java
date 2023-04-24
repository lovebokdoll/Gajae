package com.gajae.demo.logic;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.ReservationDao;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class ReservationLogic {
    @Autowired
    private ReservationDao reservationDao;
    
    public List<Map<String, Object>> resInformation( Map<String, Object> map ) {
        
        List<Map<String, Object>> resInfoList = reservationDao.resInformation( map );
        
        return resInfoList;
    }
    
    public int resInsert( Map<String, Object> map ) {
        
        String r_number = generateReservationNumber();
        
        map.put( "R_NUMBER", r_number );
        
        log.info( "r_number = {}, map.get(R_NUMBER) ={}", r_number, map.get( "R_NUMBER" ) );
        
        int result = reservationDao.resInsert( map );
        
        return result;
    }
    
    public int resUpdate( Map<String, Object> map ) {
        
        int result = reservationDao.resUpdate( map );
        
        return result;
    }
    
    private String generateReservationNumber() {
        
        StringBuilder stringBuilder = new StringBuilder();
        Random        random        = new Random();
        
        for ( int i = 0; i < 12; i++ ) {
            int digit = random.nextInt( 10 ); // 0~9까지 랜덤한 숫자 선택
            stringBuilder.append( digit );
        }
        return stringBuilder.toString();
    }
   
}
