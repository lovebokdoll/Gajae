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
	private ImageHandler imageHandler;
	
	public int reviewboardInsert(Map<String, Object> pMap) {
		log.info("reviewboardInsert");
	    log.info(pMap);
	    String imgUrl = (String) pMap.get("REVIEW_POTO");//REVIEW_PHOTO
	    log.info(imgUrl);
        byte[] imageBytes = imageHandler.imagehandle(imgUrl);
        pMap.put("REVIEW_POTO", imageBytes);
	    int result = reviewBoardDao.reviewInsert(pMap);
	    log.info(pMap);
	    return result;
	}
			
	public int reviewUpdate(Map<String, Object> pMap) {
		int result = reviewBoardDao.reviewUpdate(pMap);
		return result;
	}
	
	public List<Map<String, Object>> reviewList(Map<String, Object> pMap) {
		log.info("reviewDetail호출 성공");
		List<Map<String, Object>> rList = null;
		rList = reviewBoardDao.reviewList(pMap);
		Map<String, Object> review = rList.get(0);
		String imageUrl = (String) review.get("REVIEW_POTO");
        byte[] imageBytes = imageHandler.imagehandle(imageUrl);
        review.put("REVIEW_POTO", imageBytes);
	    return rList;
	}

	public int reviewDelete(Map<String, Object> pMap) {
		int result = reviewBoardDao.reviewDelete(pMap);
		return 0;
	}
	
	

}