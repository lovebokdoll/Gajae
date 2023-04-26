package com.gajae.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gajae.demo.logic.QnALogic;
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping( "/qna/*" )
public class QnAController {
	 @Autowired
	    private QnALogic qnaLogic;
	    
	    @PostMapping( "list" )
	     public String qnalist( @RequestParam Map<String, Object> pMap ) {
	    	log.info("pMap = {}", pMap);
	    	List<Map<String, Object>> qList = null;
			qList = qnaLogic.qnalist(pMap);
			Gson g = new Gson();
			String temp = g.toJson(qList);
			return temp;
	    }
	    
	    @PostMapping("qnaInsert")
		public String qnaInsert(@RequestParam Map<String, Object> pMap) { // 리액트에서 body에 {}객체리터럴로

			log.info("qnaInsert === " + pMap);
			if (pMap.get("USER_ID") != null) {
				int USER_ID = Integer.parseInt(pMap.get("USER_ID").toString());
				pMap.put("USER_ID", USER_ID);
			}
			// LogManager로 하면 toString을 하지 않아도 됨
			int result = 0;
			result = qnaLogic.qnaInsert(pMap);
			return String.valueOf(result);
		}
}
