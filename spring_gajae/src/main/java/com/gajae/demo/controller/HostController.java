package com.gajae.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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
	//로그인 
	    @PostMapping( "login" )
	    public String login( @RequestBody Map<String, Object> map ) {
	        
	        log.info( "map = {}", map );
	        
	        List<Map<String,Object>> hostList = hostLogic.login( map );
	        String         temp     = null;
	        
	        if ( hostList != null && hostList.size() > 0 ) {
	            Gson gson = new Gson();
	            temp = gson.toJson( hostList );
	            log.info( "temp ={}", temp );
	        }
	        
	        return temp;
	        }
	    //숙소등록 
	    @PostMapping( "hostInsert" )
	    public int hostInsert( @RequestBody Map<String, Object> pMap ) {
	    	
	    	log.info( "map = {}", pMap );
	    	
	    	int result = hostLogic.hostInsert( pMap );

	        return  result ;
	    }
	    
	  


	// 아이디 중복체크
	
		@GetMapping("overlapCheck")
		public int idCheck(@RequestParam Map<String, Object> map) {
				log.info("map = {}", map);
				List<Map<String,Object>> hostList = hostLogic.overlapCheck(map);
				log.info("hostList = {}", hostList);
				int result = 0;
				if (hostList.size() > 0) {
						result = 1;
						}
					return result;
			
		}
	}