package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository
public class ReviewBoardDAO {
    
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;
    
    public int reviewInsert( Map<String, Object> pMap ) {
        
        log.info( "pMap = {}", pMap );
        
        int result = sqlSessionTemplate.update( "review.reviewInsert", pMap );
        
        return result;
    }
    
    public int reviewUpdate( Map<String, Object> pMap ) {
        
        log.info( "pMap = {}", pMap );
        
        int result = sqlSessionTemplate.update( "review.reviewUpdate", pMap );
        
        return result;
    }
    
    // 특정 숙소 리뷰리스트
    public List<Map<String, Object>> propertyList( int P_ID ) {
        log.info( "P_ID = {}", P_ID );
        
        List<Map<String, Object>> pList = sqlSessionTemplate.selectList( "review.propertyList", P_ID );
        
        log.info( pList );
        
        return pList;
    }
    
    // 나의 리뷰리스트
    public List<Map<String, Object>> myReviewList( Map<String, Object> pMap ) {
        log.info( "pMap = {}", pMap );
        
        List<Map<String, Object>> rList = sqlSessionTemplate.selectList( "review.myReviewList", pMap );
        
        log.info( rList );
        
        return rList;
    }
    
    public int reviewDelete( Map<String, Object> pMap ) {
        log.info( "pMap = {}", pMap );
        int result = sqlSessionTemplate.delete( "reviewDelete", pMap );
        
        return result;
    }
    
    // 나의 리뷰 상세
    public List<Map<String, Object>> myReviewDetail( Map<String, Object> pMap ) {
        log.info( "pMap = {}", pMap );
        
        List<Map<String, Object>> rList = sqlSessionTemplate.selectList( "review.myReviewDetail", pMap );
        
        log.info( rList );
        return rList;
    }
    // 호스트 호텔의 리뷰리스트
	public List<Map<String, Object>> hostReviewList(Map<String, Object> pMap) {
		 log.info( "pMap = {}", pMap );	        
	     List<Map<String, Object>> hrList = sqlSessionTemplate.selectList( "review.hostReviewList", pMap );	        
	     log.info( hrList );	        
	     return hrList;
	    }

	public int replyInsert(Map<String, Object> pMap) {
	     log.info( "pMap = {}", pMap );   
	     int result = sqlSessionTemplate.update( "review.replyInsert", pMap );   
	     return result;
	    }

	public List<Map<String, Object>> hostreplyList(Map<String, Object> pMap) {
		  log.info( "pMap = {}", pMap );
	        
	      List<Map<String, Object>> rList = sqlSessionTemplate.selectList( "review.hostreplyList", pMap );
	        
	     log.info( rList );
	     return rList;
	}
}
