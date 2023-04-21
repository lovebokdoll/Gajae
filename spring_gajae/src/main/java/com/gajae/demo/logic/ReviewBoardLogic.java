package com.gajae.demo.logic;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.ReviewBoardDAO;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class ReviewBoardLogic {
	
	@Autowired
	private ReviewBoardDAO reviewBoardDao;
	
	@Autowired
	private CalculateReviewAverage calculateReviewAverage;
	
	public int reviewInsert(Map<String, Object> pMap) {
		log.info("reviewboardInsert");
	    log.info(pMap);
	    float reviewAverage = calculateReviewAverage.calculateReviewAverage(pMap);
	    pMap.put("REVIEW_AVERAGE", reviewAverage);
		int result = reviewBoardDao.reviewInsert(pMap);
	    return result;
	}
			
	public int reviewUpdate(Map<String, Object> pMap) {
		int result = reviewBoardDao.reviewUpdate(pMap);
		return result;
	}
	
	public List<Map<String, Object>> myReviewList(Map<String, Object> pMap) {
		log.info("myReviewList호출 성공");
		List<Map<String, Object>> rList = null;
		rList = reviewBoardDao.myReviewList(pMap);		
	    return rList;
	}

	public List<Map<String, Object>> propertyList(int P_ID) {
		log.info("propertyList호출 성공");
		List<Map<String, Object>> pList = null;
		pList = reviewBoardDao.propertyList(P_ID);
		return pList;
	}

	public List<Map<String, Object>> myReviewDetail(Map<String, Object> pMap) {
		log.info("myReviewList호출 성공");
		List<Map<String, Object>> rList = null;
		rList = reviewBoardDao.myReviewDetail(pMap);
		return rList;
	}
	
	public int reviewDelete(Map<String, Object> pMap) {
		int result = reviewBoardDao.reviewDelete(pMap);
		return 0;
	}
	
	

}