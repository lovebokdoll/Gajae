package com.gajae.demo.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository
public class HostDAO {

	@Autowired
	private SqlSessionTemplate sqlSessionTemplate;

	public int hostSignup(Map<String, Object> map) {

		int result = sqlSessionTemplate.insert("host.signup", map);

		log.info("result = {}", result);

		return result;
	}

	public List<Map<String, Object>> overlapCheck(Map<String, Object> map) {
		log.info("map = {}", map);
		List<Map<String, Object>> hostList = sqlSessionTemplate.selectList("host.overlapCheck", map);
		log.info("hostList = {}", hostList);
		return hostList;
	}

	public List<Map<String, Object>> login(Map<String, Object> map) {
		log.info("map = {}", map);
		List<Map<String, Object>> hostList = sqlSessionTemplate.selectList("host.login", map);

		return hostList;

	}

	// 숙소 pid 채번하기
	public int getPid() {
		int pid = 0;
		pid = sqlSessionTemplate.selectOne("host.getPid");
		return pid;

	}

	public int propertyInsert(List<Map<String, Object>> list) {
		log.info("list = {}", list);

		int result = sqlSessionTemplate.update("host.propertyInsert", list);

		log.info("result = {}", result);
		return result;
	}

	// 룸타입 등록
	public int roomInsert(List<Map<String, Object>> list) {
		log.info("map = {}", list);

		int result = sqlSessionTemplate.insert("host.roomInsert", list);

		log.info("result = {}", result);
		return result;
	}

	public int hostfacInsert(Map<String, Object> map) {

		int result = sqlSessionTemplate.insert("host.hostfacInsert", map);

		log.info("result = {}", result);
		return result;
	}

	public int hostextraInsert(List<Map<String, Object>> list) {

		int result = sqlSessionTemplate.update("host.hostextraInsert", list);

		log.info("result = {}", result);
		return result;
	}

	public List<Map<String, Object>> hotelList(Map<String, Object> map) {

		List<Map<String, Object>> result = sqlSessionTemplate.selectList("host.hotelList", map);

		log.info("result = {}", result);

		return result;
	}

	public List<Map<String, Object>> hotelDetail(Map<String, Object> map) {

		List<Map<String, Object>> result = sqlSessionTemplate.selectList("host.hotelDetail", map);

		log.info("result = {}", result);

		return result;
	}

	public int hotelUpdate(Map<String, Object> map) {

		int result = sqlSessionTemplate.update("host.hotelUpdate", map);

		log.info("result = {}", result);

		return result;
	}

	public Map<String, Object> facPidExist(Map<String, Object> map) {
		log.info("map = {}", map);

		Map<String, Object> result = sqlSessionTemplate.selectOne("host.facPidExist", map);

		return result;
	}

	// p_id에 해당하는 room_id가져오기
	public List<Map<String, Object>> getRoomIds(Map<String, Object> map) {
		log.info("map = {}", map);

		List<Map<String, Object>> roomIds = sqlSessionTemplate.selectList("host.getRoomIds", map.get("P_ID"));

		log.info("roomIds = {}", roomIds);
		return roomIds;
	}

	public int hotelDelete(Map<String, Object> map) {

		int result = sqlSessionTemplate.delete("host.hotelDelete", map);

		log.info("result = {}", result);

		return result;
	}

	public int vacancyCreate(int p_id) {

		int result = sqlSessionTemplate.insert("vacancy.vacancyCreate", p_id);

		log.info("result = {}", result);
		return result;
	}

	public int vacancyInsert(List<Map<String, Object>> vacancyList) {

		log.info("vacancyList = {}", vacancyList);
		int result = sqlSessionTemplate.insert("vacancy.vacancyInsert", vacancyList);

		log.info("result = {}", result);

		return result;
	}

}
