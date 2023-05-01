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

import com.gajae.demo.logic.ReviewBoardLogic;
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping( "review/*" )
public class ReviewBoardController {
    
    @Autowired
    private ReviewBoardLogic reviewBoardLoigic;
    
    // 특정 숙소 리뷰 리스트
    @GetMapping( "p_reviewList" )
    public List<Map<String, Object>> propertyList( @RequestParam( "P_ID" ) int P_ID ) {
        log.info( "P_ID = {}", P_ID );
        List<Map<String, Object>> pList = null;
        pList = reviewBoardLoigic.propertyList( P_ID );
        log.info( pList );
        return pList;
    }
    
    // 나의리뷰 디테일
    @GetMapping( "myreviewList" )
    public String myReviewList( @RequestParam Map<String, Object> pMap ) {
        log.info( "pMap = {}", pMap );
        List<Map<String, Object>> bList = reviewBoardLoigic.myReviewList( pMap );
        Gson                      g     = new Gson();
        String                    temp  = g.toJson( bList );
        return temp;
    }
    
    @PostMapping( "reviewInsert" )
    public String reviewInsert( @RequestBody Map<String, Object> pMap ) {
        log.info( "pMap = {}", pMap );
        
        int result = reviewBoardLoigic.reviewInsert( pMap );
        
        return String.valueOf( result );
    }
    
    @PostMapping( "reviewUpdate" )
    public Object reviewUpdate( @RequestBody Map<String, Object> pMap ) {
        
        log.info( "pMap = {}", pMap );
        
        int result = reviewBoardLoigic.reviewUpdate( pMap );
        
        return String.valueOf( result );
    }
    
    @GetMapping( "myReviewDetail" )
    public String myReviewDetail( @RequestParam Map<String, Object> pMap ) {
        
        log.info( "pMap = {}", pMap );
        
        List<Map<String, Object>> rList = reviewBoardLoigic.myReviewDetail( pMap );
        
        Gson   g    = new Gson();
        String temp = g.toJson( rList );
        return temp;
    }
    
    @GetMapping( "reviewDelete" )
    public String reviewDelete( @RequestParam Map<String, Object> pMap ) {
        log.info( "pMap = {}", pMap );
        
        int result = reviewBoardLoigic.reviewDelete( pMap );
        
        return String.valueOf( result );
    }
    
    @GetMapping( "hostReviewList" )
    public String hostReviewList( @RequestParam Map<String, Object> pMap ) {
        log.info( "pMap = {}", pMap );
        List<Map<String, Object>> hrList = reviewBoardLoigic.hostReviewList( pMap );
        Gson                      g     = new Gson();
        String                    temp  = g.toJson( hrList );
        return temp;
    }
    //댓글 등록
    @PostMapping( "replyInsert" )
    public String replyInsert( @RequestBody Map<String, Object> pMap ) {
        log.info( "pMap = {}", pMap );
        
        int result = reviewBoardLoigic.replyInsert( pMap );
        log.info(result);
        return String.valueOf( result );
    }
    
    // host의 댓글 
    @GetMapping( "hostreplyList" )
    public List<Map<String, Object>> hostreplyList( @RequestParam Map<String, Object> pMap ) {
        log.info( "pMap = {}", pMap );
        List<Map<String, Object>> bList = reviewBoardLoigic.hostreplyList( pMap );
        return bList;
    }
    @PostMapping( "hostreplyUpdate" )
    public Object hostreplyUpdate( @RequestBody Map<String, Object> pMap ) {
        
        log.info( "pMap = {}", pMap );
        
        int result = reviewBoardLoigic.hostreplyUpdate( pMap );
        
        return String.valueOf( result );
    }
    
}
