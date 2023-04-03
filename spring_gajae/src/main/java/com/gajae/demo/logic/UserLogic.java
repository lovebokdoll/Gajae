package com.gajae.demo.logic;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.UserDAO;
import com.gajae.demo.vo.UserVO;

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
    
    public List<UserVO> userSignIn( Map<String, Object> map ) {
        
        List<UserVO> userList = userDAO.userSignIn( map );
        
        return userList;
    }
    
    public List<UserVO> getUser( Map<String, Object> map ) {
        
        List<UserVO> userList = userDAO.getUser( map );
        
        return userList;
    }
    
    public int userUpdate( Map<String, Object> map ) {
        int result = userDAO.userUpdate( map );
        
        return result;
    }
    
    public List<UserVO> idCheck( Map<String, Object> map ) {
        
        List<UserVO> userList = userDAO.idCheck( map );
        
        return userList;
    }
    
    public List<UserVO> nicknameCheck( Map<String, Object> map ) {
        
        List<UserVO> userList = userDAO.nicknameCheck( map );
        
        return userList;
    }
    
    public int userDeactivate( Map<String, Object> map ) {
        int result = userDAO.userDeactivate( map );
        
        return result;
    }
    
    public int nameUpdate( Map<String, Object> map ) {
        
        int result = userDAO.nameUpdate( map );
        
        return result;
    }
    
    public int nicknameUpdate( Map<String, Object> map ) {
        
        int result = userDAO.nicknameUpdate( map );
        
        return result;
    }
    
    public int emailUpdate( Map<String, Object> map ) {
        
        int result = userDAO.emailUpdate( map );
        
        return result;
    }
    
    public int mobileUpdate( Map<String, Object> map ) {
        
        int result = userDAO.mobileUpdate( map );
        
        return result;
    }
    
    public int genderUpdate( Map<String, Object> map ) {
        
        int result = userDAO.genderUpdate( map );
        
        return result;
    }
    
    public int addressUpdate( Map<String, Object> map ) {
        
        int result = userDAO.addressUpdate( map );
        
        return result;
    }
    
}
