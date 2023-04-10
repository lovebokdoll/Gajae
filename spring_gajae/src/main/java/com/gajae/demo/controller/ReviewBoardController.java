package com.gajae.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gajae.demo.dto.ReviewDTO;
import com.gajae.demo.logic.ReviewBoardLogic;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping("review/*")
public class ReviewBoardController {
	
	@Autowired
	private ReviewBoardLogic reviewBoardLoigic;
	
	@PostMapping("write")
	public String reviewboardInsert(@RequestBody ReviewDTO reviewDTO) {
		log.info("reviewDTO={}", reviewDTO);
		int result = reviewBoardLoigic.reviewboardInsert(reviewDTO);
		if(result == 1) {
			return "Reviewinsert suceessfully!";
		} else {
			return "Failed to insert review";
		}
	}
	@PostMapping("imageInsert")
	public String imageInsert(@RequestBody ReviewDTO reviewDTO) {
		log.info("reviewDTO={}", reviewDTO);
		int result = reviewBoardLoigic.imageInsert(reviewDTO);	    
		return String.valueOf(result);
	}
	
}
