package com.gajae.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gajae.demo.dto.P_RoomTypeDTO;
import com.gajae.demo.dto.PropertyDTO;
import com.gajae.demo.logic.HotelReservLogic;
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/hotel/*")
@Log4j2
public class HotelReservController {

	@Autowired
	private HotelReservLogic hotelReservLogic;

	@GetMapping("hotelList")
	public String hotelList(@RequestParam Map<String, Object> pMap) {
		log.info("pMap = {}", pMap);

		List<PropertyDTO> hotelList = hotelReservLogic.hotelList(pMap);

		Gson g = new Gson();
		String temp = g.toJson(hotelList);

		return temp;
	}

	@GetMapping("roomtypeList")
	public String roomtypeList(@RequestParam Map<String, Object> pMap) {

		log.info("pMap={}", pMap);

		List<P_RoomTypeDTO> roomtypeList = hotelReservLogic.roomtypeList(pMap);

		Gson g = new Gson();
		String temp = g.toJson(roomtypeList);

		return temp;
	}

}
