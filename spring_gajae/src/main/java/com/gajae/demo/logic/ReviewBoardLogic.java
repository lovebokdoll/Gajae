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
	
	public int reviewInsert(Map<String, Object> pMap) {
		log.info("pMap = {}", pMap);
		int result = reviewBoardDao.reviewInsert(pMap);
		return result;
	}

	public List<Map<String, Object>> reviewBoardList(Map<String, Object> pMap) {
		// TODO Auto-generated method stub
		return null;
	}

}
