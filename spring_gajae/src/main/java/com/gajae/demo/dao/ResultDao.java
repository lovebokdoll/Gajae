package com.gajae.demo.dao;


import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gajae.demo.logic.ResultLogic;

import lombok.extern.log4j.Log4j2;
@Log4j2
@Repository
public class ResultDao {
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate = null;

    public List<Map<String, Object>> searchlist(Map<String, Object> pMap) {
    	log.info( "pMap = {}", pMap );
    	
    	List<Map<String, Object>> bList = null;
		bList = sqlSessionTemplate.selectList("searchlist", pMap);
		return bList;
    }

	public List<Map<String, Object>> priceLow(Map<String, Object> pMap,String orderBy) {
		log.info( "pMap = {}", pMap );
		log.info( "orderby = {}", orderBy );
		List<Map<String, Object>> bList = null;
		bList = sqlSessionTemplate.selectList("priceLow", pMap);
		return bList;
	}

	public List<Map<String, Object>> priceHigh(Map<String, Object> pMap,String orderBy) {
		log.info( "pMap = {}", pMap );
		log.info( "orderby = {}", orderBy );
		List<Map<String, Object>> bList = null;
		bList = sqlSessionTemplate.selectList("priceHigh", pMap);
		return bList;
	}
}