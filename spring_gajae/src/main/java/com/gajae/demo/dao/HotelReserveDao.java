package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gajae.demo.dto.HotelDTO;

import lombok.extern.log4j.Log4j2;

@Repository
@Log4j2
public class HotelReserveDao {
    
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;
    
    public List<HotelDTO> hotelDetail( Map<String, Object> pMap ) {
        
        List<HotelDTO> hotelDetailList = sqlSessionTemplate.selectList( "hotel.hotelDetaillist", pMap );
        
        log.info( "hotelDetailList={}", hotelDetailList );
        
        return hotelDetailList;
    }

	public List<String> checkVacancy(Map<String, Object> pMap) {
		
		List<String> checkVacancyList = sqlSessionTemplate.selectList( "hotel.checkVacancy", pMap );
	        
	        log.info( "checkVacancyList={}", checkVacancyList );
		return checkVacancyList;
	}
    
}
