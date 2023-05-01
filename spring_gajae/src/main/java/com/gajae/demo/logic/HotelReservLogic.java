package com.gajae.demo.logic;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.HotelReserveDao;
import com.gajae.demo.dto.HotelDTO;

@Service
public class HotelReservLogic {
    
    @Autowired
    private HotelReserveDao hotelReserveDao;
    
    public List<HotelDTO> hotelDetail( Map<String, Object> pMap ) {
        
        List<HotelDTO> hotelDetailList = hotelReserveDao.hotelDetail( pMap );
        
        return hotelDetailList;
    }

	public List<String> checkVacancy(Map<String, Object> pMap) {
		
		List<String> checkVacancyList = hotelReserveDao.checkVacancy( pMap );
		
		return checkVacancyList;
	}
    
}