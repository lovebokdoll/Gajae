package com.gajae.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gajae.demo.dto.HostDTO;
import com.gajae.demo.logic.HostLogic;
import com.gajae.demo.vo.HostVO;
import com.google.gson.Gson;
import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping("/host/*")
public class HostController {
	@Autowired
	private HostLogic hostLogic;

	// 호스트회원등록
	@PostMapping("signup")
	public String hostRegister(@RequestBody Map<String, Object> map) {

		log.info("map = {}", map);

		int result = hostLogic.hostSignup(map);

		return String.valueOf(result);
	}

	// 로그인
	@PostMapping("login")
	public String login(@RequestBody Map<String, Object> map) {

		log.info("map = {}", map);

		List<Map<String, Object>> hostList = hostLogic.login(map);
		String temp = null;

		if (hostList != null && hostList.size() > 0) {
			Gson gson = new Gson();
			temp = gson.toJson(hostList);
			log.info("temp ={}", temp);
		}

		return temp;
	}

	
	// 숙소정보등록
	@PostMapping("propertyInsert")
	public String propertyInsert(@RequestBody Map<String, Object> map) {

		log.info("map = {}", map);
		// 유효성검사
		for (String key : map.keySet()) {
			Object value = map.get(key);
			if (value == null || value.toString().trim().isEmpty()) {
				return String.valueOf(-10);
			}
		}

		int result = hostLogic.propertyInsert(map);
		log.info("result = {}", result);
		return String.valueOf(result);
	}
	@PostMapping("propertyInsert2")
	public String propertyInsert2(@RequestBody Map<String, Object> map) {
		
		log.info("map = {}", map);
		// 유효성검사
		for (String key : map.keySet()) {
			Object value = map.get(key);
			if (value == null || value.toString().trim().isEmpty()) {
				return String.valueOf(-10);
			}
		}
		
		int result = hostLogic.propertyInsert(map);
		log.info("result = {}", result);
		return String.valueOf(result);
	}

//	    @PostMapping( "hostpropertyInsert" )
//	    public ResponseEntity<String> hostpropertyInsert( @RequestBody Map<String, Object> map ) {
//	    	
//	    	log.info( "map = {}", map );
//	    	//유효성검사
//	    	for(String key :map.keySet()) {
//	    		Object value =map.get(key);
//	    		if (value==null||value.toString().trim().isEmpty()) {
//	    			return  ResponseEntity.badRequest().body(key +"is null or empty ");
//	    		}
//	    	}
//	    	
//	    	int result = hostLogic.hostpropertyInsert( map );
//	    	log.info( "result = {}", result );
//	    	return ResponseEntity.ok( String.valueOf( result ));
//	    }
//	    

	// 시설정보등록
	@PostMapping("hostfacInsert")
	public String hostfacInsert(@RequestBody Map<String, Object> map) {

		log.info("map = {}", map);
		// 유효성검사
		for (String key : map.keySet()) {
			Object value = map.get(key);
			if (value == null || value.toString().trim().isEmpty()) {
			}
		}
		int result = hostLogic.hostfacInsert(map);
		log.info("result = {}", result);
		return String.valueOf(result);
	}

	// 아이디 중복체크

	@GetMapping("overlapCheck")
	public int idCheck(@RequestParam Map<String, Object> map) {
		log.info("map = {}", map);
		List<Map<String, Object>> hostList = hostLogic.overlapCheck(map);
		log.info("hostList = {}", hostList);
		int result = 0;
		if (hostList.size() > 0) {
			result = 1;
		}
		return result;

	}
}