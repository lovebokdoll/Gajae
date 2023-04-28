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
        
        int result = reservationDao.resInsert( map );
        
        if ( result == 1 ) {
            int vacancyResult = vacancyUpdate( map );
            log.info( "vacancyResult = {}", vacancyResult );
        }
        
        return result;
    }
    
    public int resUpdate( Map<String, Object> map ) {
        
        int result = reservationDao.resUpdate( map );
        
        return result;
    }
    
    public int vacancyUpdate( Map<String, Object> map ) {
        
        Map<String, Object> dateMap = new HashMap<String, Object>();
        
        dateMap.put( "START_DATE", map.get( "R_START_DATE" ) );
        dateMap.put( "END_DATE", map.get( "R_END_DATE" ) );
        dateMap.put( "P_ID", map.get( "P_ID" ) );
        dateMap.put( "ROOM_ID", map.get( "ROOM_ID" ) );
        
        log.info( "dateMap = {}", dateMap );
        
        int result = reservationDao.vacancyUpdate( dateMap );
        
        return result;
    }
    
    public List<Map<String, Object>> resNotification( Map<String, Object> map ) {
        
        List<Map<String, Object>> notificationList = reservationDao.resNotification( map );
        
        return notificationList;
    }
    
}
