package com.gajae.demo.logic;

import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
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
		int REVIEW_NUMBER = 0;
		if (pMap.get("REVIEW_NUMBER") != null) {
			REVIEW_NUMBER = Integer.parseInt(pMap.get("REVIEW_NUMBER").toString());
			pMap.put("REVIEW_NUMBER", REVIEW_NUMBER);
		}
		rList = reviewBoardDao.myReviewList(pMap);		
		Map<String, Object> review = rList.get(0);
		String imageUrl = (String) review.get("REVIEW_POTO");
		/* byte[] imageBytes = imageHandler.imagehandle(imageUrl); */
		/* review.put("REVIEW_POTO", imageBytes); */
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