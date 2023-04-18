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

	public int hostpropertyInsert(Map<String, Object> map) {
		//result는 성공유무를 나타내는 숫자가 아니라 호텔등록시에 채번된 시퀀스를 돌려받는 값이여야 한다.
		int result =0;
		result = hostDAO.hostpropertyInsert(map);
		//위에서 돌려받은 시퀀스를  pmap에 담아줌
		map.put("p_id", result);
		
		//입력된 값이 있니
		
		return result;
	}

	public int hostfacInsert(Map<String, Object> map) {
		int result =0;
		result = hostDAO.hostfacInsert(map);
		return result;
	}

}
