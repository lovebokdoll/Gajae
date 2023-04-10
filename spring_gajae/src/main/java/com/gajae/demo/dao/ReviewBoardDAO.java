package com.gajae.demo.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.gajae.demo.dto.ReviewDTO;
import lombok.extern.log4j.Log4j2;


@Log4j2
@Repository
public class ReviewBoardDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate;

	public int reviewInsert(ReviewDTO reviewDTO) {
		log.info("reviewDTO = {}", reviewDTO);
		int result = sqlSessionTemplate.update("review.reviewInsert", reviewDTO);
		return result;		
	}

	public int imageInsert(ReviewDTO reviewDTO) {
		int result = 0;
		try {
			result = sqlSessionTemplate.update("review.reviewInsert", reviewDTO);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
}
