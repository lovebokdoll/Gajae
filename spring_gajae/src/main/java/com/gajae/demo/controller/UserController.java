package com.gajae.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
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
    
    @PostMapping( "signup" )
    public String userRegister( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = userLogic.userSignup( map );
        
        return String.valueOf( result );
    }
    
    @PostMapping( "signin" )
    public String userSignIn( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        List<UserVO> userList = userLogic.userSignIn( map );
        
        int result = 0;
        
        if ( userList.size() > 0 ) {
            result = 1;
        }
        
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
    
    @GetMapping( "idCheck" )
    public int idCheck( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        List<UserVO> userList = userLogic.idCheck( map );
        
        int result = 0;
        
        if ( userList.size() > 0 ) {
            result = 1;
        }
        
        return result;
    }
    
    @GetMapping( "nicknameCheck" )
    public int nicknameCheck( @RequestParam Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        List<UserVO> userList = userLogic.nicknameCheck( map );
        
        int result = 0;
        
        if ( userList.size() > 0 ) {
            result = 1;
        }
        return result;
    }
    
    @PutMapping( "nameupdate" )
    public String nameUpdate( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        int result = userLogic.nameUpdate( map );
        
        return String.valueOf( result );
    }
    
    @PutMapping( "nicknameupdate" )
    public String nicknameUpdate( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        int result = userLogic.nicknameUpdate( map );
        
        return String.valueOf( result );
    }
    
    @PutMapping( "emailupdate" )
    public String emailUpdate( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        int result = userLogic.emailUpdate( map );
        
        return String.valueOf( result );
    }
    
    @PutMapping( "mobileupdate" )
    public String mobileUpdate( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        int result = userLogic.mobileUpdate( map );
        
        return String.valueOf( result );
    }
    
    @PutMapping( "genderupdate" )
    public String genderUpdate( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        int result = userLogic.genderUpdate( map );
        
        return String.valueOf( result );
    }
    
    @PutMapping( "addressupdate" )
    public String addressUpdate( @RequestBody Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        int result = userLogic.addressUpdate( map );
        
        return String.valueOf( result );
    }
}
