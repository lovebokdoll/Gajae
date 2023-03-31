package com.gajae.demo.logic;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.UserDAO;
import com.gajae.demo.vo.UserVO;

@Service
public class UserLogic {
    
    @Autowired
    private UserDAO userDAO;
    
    public int userRegister( Map<String, Object> map ) {
        
        int result = userDAO.userRegister( map );
        
        return result;
    }
    
    public List<UserVO> getUser( Map<String, Object> map ) {
        
        List<UserVO> userList = userDAO.getUser( map );
        
        return userList;
    }
    
    public int userDeactivate( Map<String, Object> map ) {
        int result = userDAO.userDeactivate( map );
        
        return result;
    }
    
    public int userUpdate( Map<String, Object> map ) {
        // TODO Auto-generated method stub
        return 0;
    }
    
}
