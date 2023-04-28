package com.gajae.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gajae.demo.logic.ReservationLogic;
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@Log4j2( topic = "reservation" )
@RequestMapping( "/reservation/*" )
@RestController
public class ReservationController {
    
    @Autowired
    private ReservationLogic reservationLogic;
    
    @GetMapping( "resInformation" )
    public String resInformation( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        List<Map<String, Object>> resInfoList = reservationLogic.resInformation( map );
        
        Gson   gson = new Gson();
        String temp = gson.toJson( resInfoList );
        
        log.info( "temp ={}", temp );
        
        return temp;
    }
    
    @PostMapping( "resInsert" )
    public String resInsert( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = reservationLogic.resInsert( map );
        
        return String.valueOf( result );
    }
    
    @PostMapping( "resUpdate" )
    public String resUpdate( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = reservationLogic.resUpdate( map );
        
        return String.valueOf( result );
    }
    
    @GetMapping( "resNotification" )
    public String resNotification( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        List<Map<String, Object>> notificationList = reservationLogic.resNotification( map );
        
        Gson   gson = new Gson();
        String temp = gson.toJson( notificationList );
        
        log.info( "temp ={}", temp );
        
        return temp;
    }
}
