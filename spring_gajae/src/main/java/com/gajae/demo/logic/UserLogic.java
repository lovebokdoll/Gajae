package com.gajae.demo.logic;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.UserDAO;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class UserLogic {
    
    @Autowired
    private UserDAO userDAO;
    
    public int userSignup( Map<String, Object> map ) {
        
        int result = userDAO.userSignup( map );
        
        return result;
    }
    
    public List<Map<String, Object>> userSignIn( Map<String, Object> map ) {
        
        List<Map<String, Object>> userList = userDAO.userSignIn( map );
        
        return userList;
    }
    
    public List<Map<String, Object>> getUser( Map<String, Object> map ) {
        
        List<Map<String, Object>> userList = userDAO.getUser( map );
        
        return userList;
    }
    
    public List<Map<String, Object>> userUpdate( Map<String, Object> map ) {
        
        int result = userDAO.userUpdate( map );
        
        // Map<String, Object> tempMap = new HashMap<>();
        // tempMap.put( "USER_ID", map.get( "USER_ID" ) );
        
        List<Map<String, Object>> userList = userDAO.afterUpdate( map );
        log.info( "userList = {}", userList );
        
        return userList;
    }
    
    public List<Map<String, Object>> idCheck( Map<String, Object> map ) {
        
        List<Map<String, Object>> userList = userDAO.idCheck( map );
        
        return userList;
    }
    
    public List<Map<String, Object>> nicknameCheck( Map<String, Object> map ) {
        
        List<Map<String, Object>> userList = userDAO.nicknameCheck( map );
        
        return userList;
    }
    
    public List<Map<String, Object>> findUserID( Map<String, Object> map ) {
        
        List<Map<String, Object>> userList = userDAO.findUserID( map );
        
        return userList;
    }
    
    public List<Map<String, Object>> findUserPW( Map<String, Object> map ) {
        List<Map<String, Object>> userList = userDAO.findUserPW( map );
        
        return userList;
    }
    
    public int deactivate( Map<String, Object> map ) {
        int result = userDAO.deactivate( map );
        return result;
    }
    
    public int activate( Map<String, Object> map ) {
        int result = userDAO.activate( map );
        return result;
    }

	public int profileupload(Map<String, Object> map) {
		int result = userDAO.profileupload( map );
        return result;
	}
    
    public List<Map<String, Object>> pwCheck( Map<String, Object> map ) {
        List<Map<String, Object>> userList = userDAO.pwCheck( map );
        
        return userList;
    }
    
}
