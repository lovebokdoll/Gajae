package com.gajae.demo.logic;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.PropertyDAO;
import com.gajae.demo.vo.PropertyVO;

@Service
public class PropertyLogic {

	@Autowired
	private PropertyDAO propertyDAO;

	public List<PropertyVO> propertyList(Map<String, Object> pMap) {

		List<PropertyVO> propertyList = propertyDAO.propertyList(pMap);

		return propertyList;
	}

	public int propertyInsert(Map<String, Object> pMap) {

		int result = propertyDAO.propertyInsert(pMap);

		return result;
	}

	public int propertyUpdate(Map<String, Object> pMap) {

		int result = propertyDAO.propertyUpdate(pMap);

		return result;
	}

	public int propertyDelete(Map<String, Object> pMap) {

		int result = propertyDAO.propertyDelete(pMap);

		return result;
	}
}
