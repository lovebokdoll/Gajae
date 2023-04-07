package com.gajae.demo.logic;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.HotelReserveDao;
import com.gajae.demo.dto.P_RoomTypeDTO;
import com.gajae.demo.dto.PropertyDTO;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class HotelReservLogic {
	@Autowired
	private HotelReserveDao hotelReserveDao = null;

	public List<PropertyDTO> hotelList(Map<String, Object> pMap) {
		log.info("hotelList호출");
		List<PropertyDTO> hotelList = hotelReserveDao.hotelList(pMap);
		return hotelList;
	}

	public List<P_RoomTypeDTO> roomtypeList(Map<String, Object> pMap) {
		log.info("roomtypeList호출");
		List<P_RoomTypeDTO> roomtypeList = hotelReserveDao.roomtypeList(pMap);
		return roomtypeList;
	}

}