package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository
public class QnaDao {
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate;

	public List<Map<String, Object>> qnalist(Map<String, Object> pMap) {
		List<Map<String, Object>> qList = sqlSessionTemplate.selectList("qnalist", pMap);
		return qList;
	}

	public int qnaInsert(Map<String, Object> pMap) {
		int result = 0; // 입력이 성공했는지 유무를 담는 변수선언
		int QNA_NO = 0; // insert시에 시퀀스로 채번된 속성을 담을 변수 - 여기서는 시퀀스로 채번되는 qna_bno임
		result = sqlSessionTemplate.update("qnaInsert", pMap);
		if (result == 1) { // insert가 되면
			if (pMap.get("QNA_NO") != null) {
				QNA_NO = Integer.parseInt(pMap.get("QNA_NO").toString());
			}
		}
		log.info("result : " + result);
		log.info("useGeneretedKeys 프로퍼티 속성값 : " + QNA_NO);
		return QNA_NO;
	}

	public List<Map<String, Object>> qnaDetail(Map<String, Object> pMap) {
		List<Map<String, Object>> qList = null;
		qList = sqlSessionTemplate.selectList("qnaDetail", pMap);
		return qList;
	} 
	
	public int qnaDelete(Map<String, Object> pMap) {
		int result = 0;
		result = sqlSessionTemplate.delete("qnaDelete", pMap);
		return result;
	}

	public int qnaUpdate(Map<String, Object> pMap) {
		int result = 0;
		result = sqlSessionTemplate.update("qnaUpdate", pMap);
		return result;
	}
}
