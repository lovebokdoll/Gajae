package com.gajae.demo.controller;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.gajae.demo.logic.NoticeLogic;
import com.google.gson.Gson;
@RestController
@RequestMapping( "/notice/*" )
public class NoticecController {
    @Autowired
    private NoticeLogic noticeLogic;
    @PostMapping( "list" )
    @GetMapping( "noticelist" )
    public String noticeList( @RequestParam Map<String, Object> pMap ) {
    	List<Map<String, Object>> bList = null;
    	bList = noticeLogic.noticeList(pMap);
    	Gson g = new Gson();
    	String temp = g.toJson(bList);
    	return temp;
    }
}