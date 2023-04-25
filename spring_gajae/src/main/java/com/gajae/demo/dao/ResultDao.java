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
	private SqlSessionTemplate sqlSessionTemplate ;
	public List<Map<String, Object>> searchlist(Map<String, Object> pMap) {
	    log.info("pMap = {}", pMap);

	    List<Map<String, Object>> bList = sqlSessionTemplate.selectList("searchlist", pMap);

	    StringTokenizer st = null;
	    String p_extras[] = null;
	    int size = 0;
	    for (int i = 0; i < size; i++) {
	        String value = st.nextToken();
	        String key = "P_EXTRA_" + i;
	        pMap.put(key, value);
	    }

	    StringTokenizer star = null;
	    String p_stars[] = null;
	    size = 0;
	    if (pMap.get("P_STAR") != null) {
	        star = new StringTokenizer(pMap.get("P_STAR").toString(), ",");
	        size = star.countTokens(); // 몇가지가 있는지
	        p_stars = new String[size];
	        for (int i = 0; i < size; i++) {
	            p_stars[i] = star.nextToken();
	            pMap.put("P_STAR_" + i, p_stars[i]);
	        }
	    }

	    log.info("pMap = {}", pMap);
	    log.info("bList = {}", bList);
	    return bList;
	}

	public List<Map<String, Object>> priceLow(Map<String, Object> pMap, String orderBy) {
		log.info("pMap = {}", pMap);
		log.info("orderby = {}", orderBy);
		List<Map<String, Object>> bList = sqlSessionTemplate.selectList("priceLow", pMap);
		
		return bList;
	}

	public List<Map<String, Object>> priceHigh(Map<String, Object> pMap, String orderBy) {
		log.info("pMap = {}", pMap);
		log.info("orderby = {}", orderBy);
		List<Map<String, Object>> bList = sqlSessionTemplate.selectList("priceHigh", pMap);
		
		return bList;
	}
	public List<Map<String, Object>> markList() {
		log.info("markList호출");
		
		List<Map<String, Object>>  mList = sqlSessionTemplate.selectList("markList");
	  
	    return mList;}
}