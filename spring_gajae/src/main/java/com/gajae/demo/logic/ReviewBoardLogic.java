package com.gajae.demo.logic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

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
	@Transactional
	public int imageInsert(ReviewDTO reviewDTO) {
		int result = 0;
        try {
            result = reviewBoardDao.imageInsert(reviewDTO);
        } catch (Exception e) {
            // 트랜잭션 롤백
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
        }
        return result;
    }

}
