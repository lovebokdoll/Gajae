package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository
public class ResultDao {
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate = null;

	public List<Map<String, Object>> searchlist(Map<String, Object> pMap) {
		log.info("pMap = {}", pMap);

		List<Map<String, Object>> bList = null;
		bList = sqlSessionTemplate.selectList("searchlist", pMap);

		StringTokenizer st = null;
		String p_extras[] = null;
		StringTokenizer star = null;
		String p_stars[] = null;
		int size = 0;
		if (pMap.get("P_EXTRAS") != null) {
			st = new StringTokenizer(pMap.get("P_EXTRAS").toString(), ",");
			size = st.countTokens();// 몇가지가 있는지
			p_extras = new String[size];
		}
		for (int i = 0; i < size; i++) {
			p_extras[i] = st.nextToken();
			pMap.put("P_EXTRAS" + i, p_extras[i]);
		}
		
		if (pMap.get("P_STAR") != null) {
			star = new StringTokenizer(pMap.get("P_STAR").toString(), ",");
			size = star.countTokens();// 몇가지가 있는지
			p_stars = new String[size];
		}
		for (int i = 0; i < size; i++) {
			p_stars[i] = star.nextToken();
			pMap.put("P_STAR" + i, p_stars[i]);
		}

		log.info(pMap);// 파라미터값이 오라클 서버로 넘어가는 값들
		log.info(bList);// 위에서 파라미터로 넘어간 값을 조건검색해서 조회된 결과값

		return bList;
	}

	public List<Map<String, Object>> priceLow(Map<String, Object> pMap, String orderBy) {
		log.info("pMap = {}", pMap);
		log.info("orderby = {}", orderBy);
		List<Map<String, Object>> bList = null;
		bList = sqlSessionTemplate.selectList("priceLow", pMap);
		return bList;
	}

	public List<Map<String, Object>> priceHigh(Map<String, Object> pMap, String orderBy) {
		log.info("pMap = {}", pMap);
		log.info("orderby = {}", orderBy);
		List<Map<String, Object>> bList = null;
		bList = sqlSessionTemplate.selectList("priceHigh", pMap);
		return bList;
	}
}