package com.gajae.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gajae.demo.logic.VacancyLogic;
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RequestMapping( "/vacancy/*" )
@RestController
public class VacancyController {
    
    @Autowired
    private VacancyLogic vacancyLogic;
    
    @GetMapping( "getCheckDate" )
    public String getCheckDate( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        List<Map<String, Object>> checkedDateList = vacancyLogic.getCheckedDate( map );
        
        Gson   gson = new Gson();
        String temp = gson.toJson( checkedDateList );
        
        return temp;
    }
    
}
