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
		log.info("map={}", map);
		log.info(map.get("room_id"));
		// result는 성공유무를 나타내는 숫자가 아니라 호텔등록시에 채번된 시퀀스를 돌려받는 값이여야 한다.
		int result = 0;
		int p_id = 0;
		// result = hostDAO.propertyInsert(map);
		// 위에서 돌려받은 시퀀스를 pmap에 담아줌
		map.put("p_id", result);
		// 입력된 값이 있니
		if (map.get("room_id") != null) {
			// 작성자가 선택하는 룸타입의 갯수가 다르다.
			// 3개인 경우 3개에 대한 insert가 3번 일어나야 한다.
			List<Map<String, Object>> rList = roomList(map);
			log.info("rList={}", rList);
			for (Map<String, Object> room : rList) {
				room.put("p_id", result);
				room.put("p_title", result);
				room.put("p_overview", result);
				room.put("p_tel", result);
				room.put("p_postal", result);
				room.put("p_address", result);
				room.put("p_refund", result);
				room.put("p_scale", result);
				room.put("p_star", result);
				room.put("p_checkin", result);
				room.put("p_checkout", result);
				room.put("host_business_num", result);
				result = hostDAO.propertyInsert(map);
				log.info("result={}", result);
			}

		}
		return result;

	}

	// 룸타입 등록 로직
	private List<Map<String, Object>> roomList(Map<String, Object> map) {
		log.info("room_id = {}", map.get("room_id"));
		List<Map<String, Object>> rList = new ArrayList<>();
		// map.get("room_id")=[1, 2]
		// Object obj = map.get("room_id");
		HashMap<String, Object> rMap = null;
		String[] roomtypes = (String[]) map.get("room_id");
		// if (obj instanceof int[]) {
		// int[] roomtype = (int[]) obj;
		for (int i = 0; i < roomtypes.length; i++) {
			rMap = new HashMap<>();
			rMap.put("room_id", roomtypes);
			rList.add(rMap);
		}
		// }else {
		// log.info("조건문 타지 못했다 ");
		// }
		log.info("rList={}", rList);
		return rList;
	}

	public int hostfacInsert(Map<String, Object> map) {
		int result = 0;
		result = hostDAO.hostfacInsert(map);
		return result;
	}

}
