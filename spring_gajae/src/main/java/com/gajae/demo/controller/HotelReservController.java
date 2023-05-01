package com.gajae.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gajae.demo.dto.HotelDTO;
import com.gajae.demo.logic.HotelReservLogic;
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/hotel/*")
@Log4j2
public class HotelReservController {

	@Autowired
	private HotelReservLogic hotelReservLogic;

	@GetMapping("hotelDetail")
	public String hotelDetail(@RequestParam Map<String, Object> pMap) {

		log.info("pMap={}", pMap);

		List<HotelDTO> hotelDetail = hotelReservLogic.hotelDetail(pMap);

		Gson g = new Gson();
		String temp = g.toJson(hotelDetail);

		return temp;
	}

	@PostMapping("checkVacancy")
	public String checkVacancy(@RequestBody Map<String, Object> pMap) {

		log.info("pMap={}", pMap);

		List<String> checkVacancy = hotelReservLogic.checkVacancy(pMap);

		Gson g = new Gson();
		String temp = g.toJson(checkVacancy);

		return temp;
	}
}
