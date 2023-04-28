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
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

@Log4j2( topic = "user" )
@RequestMapping( "/user/*" )
@RestController
public class UserController {
    
    @Autowired
    private UserLogic userLogic;
    
    @PostMapping( "signup" )
    public String userRegister( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = userLogic.userSignup( map );
        
        return String.valueOf( result );
    }
    
    @PostMapping( "signin" )
    public String userSignIn( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        List<Map<String, Object>> userList = userLogic.userSignIn( map );
        String                    temp     = null;
        
        if ( userList != null && userList.size() > 0 ) {
            Gson gson = new Gson();
            temp = gson.toJson( userList );
            log.info( "temp ={}", temp );
        }
        
        return temp;
    }
    
    @GetMapping( "getUser" )
    public String getUser( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        List<Map<String, Object>> userList = userLogic.getUser( map );
        
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
    
    @GetMapping( "idCheck" )
    public int idCheck( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        List<Map<String, Object>> userList = userLogic.idCheck( map );
        
        int result = 0;
        
        if ( userList.size() > 0 ) {
            result = 1;
        }
        
        return result;
    }
    
    @GetMapping( "nicknameCheck" )
    public int nicknameCheck( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        List<Map<String, Object>> userList = userLogic.nicknameCheck( map );
        
        int result = 0;
        
        if ( userList.size() > 0 ) {
            result = 1;
        }
        return result;
    }
    
    @PostMapping( "findUserID" )
    public String findUserID( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        List<Map<String, Object>> userList = userLogic.findUserID( map );
        
        Gson   gson = new Gson();
        String temp = gson.toJson( userList );
        
        log.info( "temp ={}", temp );
        
        return temp;
    }
    
    @PostMapping( "findUserPW" )
    public String findUserPW( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        List<Map<String, Object>> userList = userLogic.findUserPW( map );
        
        Gson   gson = new Gson();
        String temp = gson.toJson( userList );
        
        log.info( "temp ={}", temp );
        
        return temp;
    }
    
    @PostMapping( "deactivate" )
    public int deactivate( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = userLogic.deactivate( map );
        
        return result;
    }
    
    @PostMapping( "activate" )
    public int activate( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = userLogic.activate( map );
        
        return result;
    }
    
    @PostMapping( "profileupload" )
    public String profileupload( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = userLogic.profileupload( map );
        
        return String.valueOf( result );
    }
    
}
