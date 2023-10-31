package com.gajae.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gajae.demo.logic.QnALogic;
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping( "/qna/*" )
public class QnAController {
    @Autowired
    private QnALogic qnaLogic;
    
    @PostMapping( "list" )
    public String qnalist( @RequestBody Map<String, Object> pMap ) {
    	 log.info( "message = {}",  "로그 찍힘 ");
        List<Map<String, Object>> qList = null;
        qList = qnaLogic.qnalist( pMap );
        Gson   g    = new Gson();
        String temp = g.toJson( qList );
        return temp;
    }
    
    @PostMapping( "qnaInsert" )
    public String qnaInsert( @RequestBody Map<String, Object> pMap ) {
        log.info( "qnaInsert === " + pMap );
        
        if ( pMap.get( "USER_ID" ) != null ) {
            String userId = ( String ) pMap.get( "USER_ID" );
            pMap.put( "USER_ID", userId );
        }
        int result = qnaLogic.qnaInsert( pMap );
        return String.valueOf( result );
    }
    
    @PostMapping( "qnaDetail" )
    public String qnaDetail( @RequestBody Map<String, Object> pMap ) {
        List<Map<String, Object>> bList = null;
        bList = qnaLogic.qnaDetail( pMap );
        Gson   g    = new Gson();
        String temp = g.toJson( bList );
        return temp;
    }
    
    @PostMapping( "qnaUpdate" )
    private String qnaUpdate( @RequestBody Map<String, Object> pMap ) {
        log.info( "pMap = {}", pMap );
        int result = qnaLogic.qnaUpdate( pMap );
        return String.valueOf( result );
    }
    
    @PostMapping( "qnaDelete" )
    public int qnaDelete( @RequestBody Map<String, Object> pMap ) {
        int result = qnaLogic.qnaDelete( pMap );
        return result;
    }
    
}
