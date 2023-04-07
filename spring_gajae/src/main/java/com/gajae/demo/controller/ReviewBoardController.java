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

import com.gajae.demo.logic.ReviewBoardLogic;
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping("/review/*")
public class ReviewBoardController {
	
	@Autowired
	private ReviewBoardLogic reviewBoardLoigc;
	
	/**
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("reviewList")
	public String reviewList (@RequestParam Map<String,Object> pMap) {
		log.info("pMap = {}", pMap);
		List<Map<String,Object>> bList = null;
		bList = reviewBoardLoigc.reviewBoardList(pMap);
		Gson g = new Gson();
		String temp = g.toJson(bList);
	    return temp;
	}	
	
	//게시글 등록
	@PostMapping("reviewInsert")
	public String reviewboardInsert(@RequestBody Map<String,Object> pMap) {
		log.info("pMap = {}", pMap);
		int result = reviewBoardLoigc.reviewInsert(pMap);
		return String.valueOf(result);
	}
}