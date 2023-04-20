package com.gajae.demo.logic;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.UserDAO;
import com.gajae.demo.dto.UsersDTO;

@Service
public class UserLogic {
    
    @Autowired
    private UserDAO userDAO;
    
    public int userSignup( Map<String, Object> map ) {
        
        int result = userDAO.userSignup( map );
        
        return result;
    }
    
    public List<UsersDTO> userSignIn( Map<String, Object> map ) {
        
        List<UsersDTO> userList = userDAO.userSignIn( map );
        
        return userList;
    }
    
    public List<UsersDTO> getUser( Map<String, Object> map ) {
        
        List<UsersDTO> userList = userDAO.getUser( map );
        
        return userList;
    }
    
    public int userUpdate( Map<String, Object> map ) {
        
        int result = userDAO.userUpdate( map );
        
        return result;
    }
    
    public List<UsersDTO> idCheck( Map<String, Object> map ) {
        
        List<UsersDTO> userList = userDAO.idCheck( map );
        
        return userList;
    }
    
    public List<UsersDTO> nicknameCheck( Map<String, Object> map ) {
        
        List<UsersDTO> userList = userDAO.nicknameCheck( map );
        
        return userList;
    }
    
    public int userDeactivate( Map<String, Object> map ) {
        
        int result = userDAO.userDeactivate( map );
        
        return result;
    }
    
}
