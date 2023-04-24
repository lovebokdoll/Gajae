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
    
    public List<Map<String, Object>> getCheckedDate( Map<String, Object> map ) {
        
        List<Map<String, Object>> checkedDateList = vacancyDao.getCheckedDate( map );
        
        
        
        return checkedDateList;
    }
    
    public Map<String, Object> convertDate() {
        
        String checkInYear   = "";
        String checkInMonth  = "";
        String checkInDay    = "";
        String checkOutYear  = "";
        String checkOutMonth = "";
        String checkOutDay   = "";
        
        Map<String, Object> dateMap = new HashMap<>();
        
        dateMap.put( "checkInYear", checkInYear );
        dateMap.put( "checkInMonth", checkInMonth );
        dateMap.put( "checkInDay", checkInDay );
        dateMap.put( "checkOutYear", checkOutYear );
        dateMap.put( "checkOutMonth", checkOutMonth );
        dateMap.put( "checkOutDay", checkOutDay );
        
        return dateMap;
    }
}
