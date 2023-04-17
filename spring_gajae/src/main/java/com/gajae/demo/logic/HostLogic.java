package com.gajae.demo.logic;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.HostDAO;
import com.gajae.demo.dto.HostDTO;
import com.gajae.demo.dto.UsersDTO;
import com.gajae.demo.vo.HostVO;

import lombok.extern.log4j.Log4j2;
@Log4j2
@Service
public class HostLogic {

	@Autowired
	private HostDAO hostDAO;

	public int hostSignup(Map<String, Object> map) {
		int result = hostDAO.hostSignup(map);

		return result;

	}
 
	public List<Map<String,Object>> overlapCheck(Map<String, Object> map) {
		log.info("map = {}", map);
        List<Map<String,Object>> hostList = hostDAO.overlapCheck( map );
        return hostList;
	
	}

	public List<Map<String, Object>> login(Map<String, Object> map) {
		log.info("map = {}", map);
		 List<Map<String,Object>> hostList = hostDAO.login( map );
		        
		        return hostList;
	}

	public int hostInsert(Map<String, Object> map) {
		log.info("map = {}", map);
		int result = hostDAO.hostInsert(map);
		return result;
	}
	    
//	public int qnaDelete(Map<String, Object> pMap) {
//		int result = repleBoardDao.qnaDelete(pMap);
//		return result;
//	}
//
	
   
	}



