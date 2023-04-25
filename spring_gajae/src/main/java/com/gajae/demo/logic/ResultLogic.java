package com.gajae.demo.logic;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.ResultDao;

import lombok.extern.log4j.Log4j2;
@Log4j2
@Service
public class ResultLogic {
    @Autowired
    private ResultDao searchDao;

    public List<Map<String, Object>> searchlist(Map<String, Object> pMap) {
    	
    	log.info( "pMap = {}", pMap );
		List<Map<String, Object>> resultList = null;
		
		
		resultList = searchDao.searchlist(pMap);
		return resultList;
    }

	public List<Map<String, Object>> priceLow(Map<String, Object> pMap, String orderBy) {
		log.info( "pMap = {}", pMap );
		log.info( "orderby = {}", orderBy );
		List<Map<String, Object>> resultList = null;
		resultList = searchDao.priceLow(pMap, orderBy);
		return resultList;
	}

	public List<Map<String, Object>> priceHigh(Map<String, Object> pMap, String orderBy) {
		log.info( "pMap = {}", pMap );
		log.info( "orderby = {}", orderBy );
		List<Map<String, Object>> resultList = null;
		resultList = searchDao.priceHigh(pMap, orderBy);
		return resultList;
	}
	//지도 
	public List<Map<String, Object>> markList() {
		List<Map<String, Object>> mList = null;
		mList = searchDao.markList();
		return mList;
	}
}