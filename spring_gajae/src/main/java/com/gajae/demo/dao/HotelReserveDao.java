package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gajae.demo.dto.P_RoomTypeDTO;
import com.gajae.demo.dto.PropertyDTO;

import lombok.extern.log4j.Log4j2;

@Repository
@Log4j2
public class HotelReserveDao {
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate = null;

	public List<PropertyDTO> hotelList(Map<String, Object> pMap) {
		log.info("hotelList호출");
		List<PropertyDTO> hotelList = sqlSessionTemplate.selectList("hotel.hotellist", pMap);
		return hotelList;
	}

	public List<P_RoomTypeDTO> roomtypeList(Map<String, Object> pMap) {
		log.info("roomtypeList호출");
		List<P_RoomTypeDTO> roomtypeList = sqlSessionTemplate.selectList("hotel.roomtypelist", pMap);
		return roomtypeList;
	}


}
