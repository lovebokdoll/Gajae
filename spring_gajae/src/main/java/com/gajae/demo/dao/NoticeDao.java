package com.gajae.demo.dao;
import java.util.List;
import java.util.Map;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
@Repository
public class NoticeDao {
	 @Autowired
	    private SqlSessionTemplate sqlSessionTemplate;
	   
	    public List<Map<String, Object>> noticeList(Map<String, Object> pMap) {
	        
	         List<Map<String, Object>> bList = null;
	         bList = sqlSessionTemplate.selectList( "noticeList", pMap );
	         return bList;
	    }
}