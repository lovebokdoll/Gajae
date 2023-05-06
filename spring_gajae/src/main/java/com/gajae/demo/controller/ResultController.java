package com.gajae.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gajae.demo.logic.ResultLogic;
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping( "/search/*" )
public class ResultController {
    
    @Autowired
    private ResultLogic searchLogic;
    
    @PostMapping( "list" )
    public String searchlist( @RequestBody Map<String, Object> pMap ) {
        String orderBy = ( String ) pMap.remove( "orderBy" );
        
        log.info( "pMap = {}", pMap );
        log.info( "orderby = {}", orderBy );
        
        List<Map<String, Object>> resultList = null;
        
        // 정렬조건이 있다면
        if ( orderBy != null ) {
            
            if ( orderBy.equals( "priceLow" ) ) {
                resultList = searchLogic.priceLow( pMap, orderBy );
            }
            else if ( orderBy.equals( "priceHigh" ) ) {
                resultList = searchLogic.priceHigh( pMap, orderBy );
            }
            else if ( orderBy.equals( "reviewwHigh" ) ) {
                resultList = searchLogic.reviewwHigh( pMap, orderBy );
            }
        }
        
        // 정렬조건이 없다면
        if ( resultList == null ) {
            resultList = searchLogic.searchlist( pMap );
        }
        
        Gson   gson   = new Gson();
        String result = gson.toJson( resultList );
        return result;
    }
    
    // 위도, 경도 가져오기
    @GetMapping( "markList" )
    public List<Map<String, Object>> markList() {
        log.info( "propertyList 호출 " );
        List<Map<String, Object>> mList = null;
        mList = searchLogic.markList();
        log.info( mList );
        return mList;
    }
}
