package com.gajae.demo.dao;

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
}
