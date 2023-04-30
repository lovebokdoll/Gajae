package com.gajae.demo.logic;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.MypageDAO;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class MypageLogic {
    
    @Autowired
    private MypageDAO mypageDAO;
    
    public List<Map<String, Object>> myReservation( Map<String, Object> map ) {
        
        List<Map<String, Object>> myResList = mypageDAO.myReservation( map );
        
        List<Map<String, Object>> myResJoinList = new ArrayList<>();
        
        for ( Map<String, Object> myRes : myResList ) {
            List<Map<String, Object>> myResJoin = myReservationJoin( myRes );
            myResJoinList.addAll( myResJoin );
        }
        
        return myResJoinList;
    }
    
    private List<Map<String, Object>> myReservationJoin( Map<String, Object> myRes ) {
        
        log.info( "myRes = {}", myRes );
        
        Map<String, Object> tempMap = new HashMap<>();
        tempMap.put( "ROOM_ID", myRes.get( "ROOM_ID" ) );
        tempMap.put( "R_NUMBER", myRes.get( "R_NUMBER" ) );
        tempMap.put( "P_ID", myRes.get( "P_ID" ) );
        tempMap.put( "USER_ID", myRes.get( "USER_ID" ) );
        log.info( "tempMap = {}", tempMap );
        
        List<Map<String, Object>> myResJoinList = mypageDAO.myReservationJoin( tempMap );
        
        return myResJoinList;
    }
    
}
