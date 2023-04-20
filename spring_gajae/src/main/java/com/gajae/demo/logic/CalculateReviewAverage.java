package com.gajae.demo.logic;

import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class CalculateReviewAverage {

	public float calculateReviewAverage(Map<String, Object> pMap) {
		  int reviewService = (int) pMap.get("REVIEW_SERVICE");
		  int reviewFacility = (int) pMap.get("REVIEW_FACILITY");
		  int reviewClean = (int) pMap.get("REVIEW_CLEAN");
		  int reviewLocation = (int) pMap.get("REVIEW_LOCATION");
		  int reviewCost = (int) pMap.get("REVIEW_COST");

		  float reviewAverage = (reviewService + reviewFacility + reviewClean + reviewLocation + reviewCost) / 5.0f;
		  return reviewAverage;
	}
}
