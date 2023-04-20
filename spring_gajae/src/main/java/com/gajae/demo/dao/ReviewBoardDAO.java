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
	//특정 숙소 리뷰리스트
	public List<Map<String, Object>> propertyList(int P_ID) {
		log.info("propertyList 호출");
		List<Map<String, Object>> pList = null;
		pList = sqlSessionTemplate.selectList("review.propertyList", P_ID);
		log.info(pList);
		return pList;
	}
	//나의 리뷰리스트
	public List<Map<String, Object>> myReviewList(Map<String, Object> pMap) {
		log.info("reviewList 호출");
		List<Map<String, Object>> rList = null;
		rList = sqlSessionTemplate.selectList("review.myReviewList", pMap);
		log.info(rList);
		return rList;
	}

	public int reviewDelete(Map<String, Object> pMap) {
		log.info("reviewDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.delete("reviewDelete", pMap);
		return result;
	}
	//나의 리뷰 상세
	public List<Map<String, Object>> myReviewDetail(Map<String, Object> pMap) {
		log.info("myReviewDetail 호출");
		List<Map<String, Object>> rList = null;
		rList = sqlSessionTemplate.selectList("review.myReviewDetail", pMap);
		log.info(rList);
		return rList;
	}

}
