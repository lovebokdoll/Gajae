package com.gajae.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gajae.demo.logic.MypageLogic;
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RequestMapping( "/mypage/*" )
@RestController
public class MypageController {
    
    @Autowired
    private MypageLogic mypageLogic;
    
    @GetMapping( "myReservation" )
    public String myReservation( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        List<Map<String, Object>> myResJoinList = mypageLogic.myReservation( map );
        
        Gson   gson = new Gson();
        String temp = gson.toJson( myResJoinList );
        
        log.info( "temp ={}", temp );
        
        return temp;
    }
    
    @GetMapping( "myResDelete" )
    public String myResDelete( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = mypageLogic.myResDelete( map );
        
        return String.valueOf( result );
        
    }
}
