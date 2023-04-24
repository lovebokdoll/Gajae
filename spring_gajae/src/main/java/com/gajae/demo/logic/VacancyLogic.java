package com.gajae.demo.logic;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.VacancyDao;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class VacancyLogic {
    
    @Autowired
    private VacancyDao vacancyDao;
    
    private List<Map<String, Object>> startEndDate( Map<String, Object> map ) {
        
        List<Map<String, Object>> resDateList = vacancyDao.startEndDate( map );
        
        log.info( "resDateList = {}", resDateList );
        
        return resDateList;
    }
    
    public int vacancyUpdate( Map<String, Object> map ) {
        
        List<Map<String, Object>> resDateList = startEndDate( map );
        
        Map<String, Object> dateMap = new HashMap<String, Object>();
        
        if ( !resDateList.isEmpty() ) {
            dateMap.put( "START_DATE", resDateList.get( 0 ).get( "START_DATE" ) );
            dateMap.put( "END_DATE", resDateList.get( 0 ).get( "END_DATE" ) );
            dateMap.put( "P_ID", Integer.parseInt( ( String ) map.get( "P_ID" ) ) );
            dateMap.put( "ROOM_ID", Integer.parseInt( ( String ) map.get( "ROOM_ID" ) ) );
        }
        log.info( "dateMap = {}", dateMap );
        
        int result = vacancyDao.vacancyUpdate( dateMap );
        
        return result;
    }
    
}
