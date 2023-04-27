package com.gajae.demo.logic;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.QnaDao;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class QnALogic {
	 @Autowired
	    private QnaDao qnaDao;

	    public List<Map<String, Object>> qnalist(Map<String, Object> pMap) {
	    	List<Map<String, Object>> qList = null;
			qList = qnaDao.qnalist(pMap);
			return qList;	
	    }

		public int qnaInsert(Map<String, Object> pMap) {
			int result = 0;
			result = qnaDao.qnaInsert(pMap);
			pMap.put("QNA_NO", result);
			return result;
		}

		public List<Map<String, Object>> qnaDetail(Map<String, Object> pMap) {
			List<Map<String, Object>> rList = null;
			rList = qnaDao.qnaDetail(pMap);
			return rList;
		}
		public int qnaDelete(Map<String, Object> pMap) {
			int result = 0;
			result = qnaDao.qnaDelete(pMap);
			return result;
		}

		public int qnaUpdate(Map<String, Object> pMap) {
			int result = qnaDao.qnaUpdate(pMap);
			return result;
		}
}
