package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository
public class ReviewBoardDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate;

	public int reviewInsert(Map<String, Object> pMap) {
		log.info(pMap);
		int result = sqlSessionTemplate.update("review.reviewInsert", pMap);
		return result;		
	}
	
	public int reviewUpdate(Map<String, Object> pMap) {
		log.info("ReviewBoardDAO reviewUpdate 호출", pMap);
		int result = sqlSessionTemplate.update("review.reviewUpdate", pMap);
		return result;		
	}

	public List<Map<String, Object>> reviewList(Map<String, Object> pMap) {
		log.info("reviewDetail 호출");
		List<Map<String, Object>> qList = null;
		qList = sqlSessionTemplate.selectList("review.reviewList", pMap);
		return qList;
	}

	public int reviewDelete(Map<String, Object> pMap) {
		log.info("reviewDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.delete("reviewDelete", pMap);
		return result;
	}
}
