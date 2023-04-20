package com.gajae.demo.logic;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.HostDAO;

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

	public List<Map<String, Object>> overlapCheck(Map<String, Object> map) {
		log.info("map = {}", map);
		List<Map<String, Object>> hostList = hostDAO.overlapCheck(map);
		return hostList;

	}

	public List<Map<String, Object>> login(Map<String, Object> map) {
		log.info("map = {}", map);
		List<Map<String, Object>> hostList = hostDAO.login(map);

		return hostList;
	}

//호텔등록 로직
	public int propertyInsert(Map<String, Object> map) {
		log.info("map={}",map);
		log.info(map.get("room_id"));
		// result는 성공유무를 나타내는 숫자가 아니라 호텔등록시에 채번된 시퀀스를 돌려받는 값이여야 한다.
		int result = 0;
		result = hostDAO.propertyInsert(map);
		// 위에서 돌려받은 시퀀스를 pmap에 담아줌
		map.put("p_id", result);
		// 입력된 값이 있니
		return result;
	}
	//룸타입 등록 로직
	public List<Map<String, Object>> roomtype(Map<String, Object> map) {
		log.info("map={}",map);
		log.info(map.get("room_id"));
		  List<Map<String, Object>> rList = new ArrayList<>();
		   HashMap<String, Object> rMap      = null;
		   int [] roomtype = (int[]) map.get("room_id");
		   for(int i=0; i<roomtype.length;i++) {
			   rMap = new HashMap<String,Object>();
			   rMap.put("room_id",roomtype[i]);
			   rList.add(rMap);
		   }
		   return rList;
	}

	
	

	public int hostfacInsert(Map<String, Object> map) {
		int result = 0;
		result = hostDAO.hostfacInsert(map);
		return result;
	}

}
