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

import com.gajae.demo.logic.UserLogic;
import com.gajae.demo.vo.UserVO;
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@Log4j2( topic = "user" )
@RequestMapping( "/user/*" )
@RestController
public class UserController {
    
    @Autowired
    private UserLogic userLogic;
    
    @PostMapping( "register" )
    public String userRegister( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = userLogic.userRegister( map );
        
        return String.valueOf( result );
    }
    
    @GetMapping( "getUser" )
    public String getUser( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        List<UserVO> userList = userLogic.getUser( map );
        
        Gson   gson = new Gson();
        String temp = gson.toJson( userList );
        
        log.info( "temp ={}", temp );
        
        return temp;
    }
    
    @PostMapping( "update" )
    public String userUpdate( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = userLogic.userUpdate( map );
        
        return String.valueOf( result );
    }
    
    @GetMapping( "delete" )
    public String userDeactivate( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = userLogic.userDeactivate( map );
        
        return String.valueOf( result );
    }
}
