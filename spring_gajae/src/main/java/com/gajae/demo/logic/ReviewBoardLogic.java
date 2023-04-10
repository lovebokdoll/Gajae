package com.gajae.demo.logic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gajae.demo.dao.ReviewBoardDAO;
import com.gajae.demo.dto.ReviewDTO;


@Service
public class ReviewBoardLogic {
	
	@Autowired
	private ReviewBoardDAO reviewBoardDao;
	
	public int reviewboardInsert(ReviewDTO reviewDTO) {
		int result = reviewBoardDao.reviewInsert(reviewDTO);
        if(result == 1) {
            return 1;
        } else {
            return 0;
        }
	}

}
