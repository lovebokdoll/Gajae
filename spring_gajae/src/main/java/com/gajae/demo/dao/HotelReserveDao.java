package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gajae.demo.dto.P_RoomTypeDTO;
import com.gajae.demo.dto.PropertyDTO;
import com.gajae.demo.dto.HotelDTO;

import lombok.extern.log4j.Log4j2;

@Repository
@Log4j2
public class HotelReserveDao {
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate = null;



	public List<HotelDTO> hotelDetail(Map<String, Object> pMap) {
		log.info("pMap={}",pMap);
		List<HotelDTO> hotelDetailList = sqlSessionTemplate.selectList("hotel.hotelDetaillist", pMap);
		return hotelDetailList;
	}


}
