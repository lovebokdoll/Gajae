package com.gajae.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gajae.demo.dto.ReviewDTO;
import com.gajae.demo.logic.ReviewBoardLogic;

@RestController
@RequestMapping("review/*")
public class ReviewBoardController {
	
	@Autowired
	private ReviewBoardLogic reviewBoardLoigic;
	
	@PostMapping("write")
	public String reviewboardInsert(@RequestBody ReviewDTO reviewDTO) {
		int result = reviewBoardLoigic.reviewboardInsert(reviewDTO);
		if(result == 1) {
			return "Reviewinsert suceessfully!";
		} else {
			return "Failed to insert review";
		}
	}
	
	
}
