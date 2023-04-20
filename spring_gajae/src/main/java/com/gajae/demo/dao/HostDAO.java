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
	//숙소 pid 채번하기
	public int getPid() {
		int pid = 0;
		pid = sqlSessionTemplate.selectOne( "host.getPid");
		return pid;
		
	}
//호텔 등록 
//	public int propertyInsert(Map<String, Object> map) {
	public int propertyInsert(List<Map<String, Object>> list) {
		int result =0;//입력이 성공했는지 유무를 담는 변수 선언
		//int p_id=0; // insert시에 시퀀스로 채번된 속성을 담을 변수 선언 - 시퀀스로 채번되는 p_id
		log.info("map = {}", list);
	
		 result = sqlSessionTemplate.update( "host.propertyInsert",list );
		 //result가 1인경우 p_id가 null이 아니면 
		 /*
	        if(result ==1) {
	        	if(map.get("p_id")!=null) {
	        		p_id = Integer.parseInt(map.get("p_id").toString());
	        	}
	        }
	        log.info("result={}",result);
	        log.info( "useGeneratedKeys 프로퍼티 속성값 = {}", p_id );
	      */  
	        //p_id 리턴
		 return result;
	}
	//룸타입 등록 
	public void roomInsert(List<Map<String, Object>> list) {
		log.info("map = {}", list);
		int result = sqlSessionTemplate.insert("host.roomInsert",list);
	}
	

	public int hostfacInsert(Map<String, Object> map) {
		int result =0;
		log.info("map = {}", map);
		 result = sqlSessionTemplate.insert( "host.hostfacInsert",map );
		return result;
	}





	
}
