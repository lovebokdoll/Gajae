package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lombok.extern.log4j.Log4j2;

import com.gajae.demo.dto.HostDTO;
import com.gajae.demo.vo.HostVO;
@Log4j2
@Repository
public class HostDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate;
	
	  public int hostSignup( Map<String, Object> map ) {
	        
	        int result = sqlSessionTemplate.insert( "host.signup", map );
	        
	        log.info( "result = {}", result );
	        
	        return result;
	    }

	public List<Map<String,Object>> overlapCheck(Map<String, Object> map) {
		log.info("map = {}", map);
		List<Map<String,Object>> hostList= sqlSessionTemplate.selectList("host.overlapCheck", map );
        log.info( "hostList = {}", hostList );
        return hostList;
	}

	public List<Map<String, Object>> login(Map<String, Object> map) {
		log.info("map = {}", map);
		 List<Map<String,Object>> hostList = sqlSessionTemplate.selectList( "host.login",map );
	        
	        return hostList;
		
	}

	public List<Map<String, Object>> hostInsert(Map<String, Object> map) {
		log.info("map = {}", map);
		 List<Map<String,Object>> hostRegisterList = sqlSessionTemplate.selectList( "host.hostInsert",map );
	        
	        return hostRegisterList;
	}
}
