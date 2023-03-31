package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gajae.demo.vo.UserVO;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository
public class UserDAO {
    
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;
    
    public int userRegister( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.insert( "user.register", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
    public List<UserVO> getUser( Map<String, Object> map ) {
        
        List<UserVO> userList = sqlSessionTemplate.selectList( "user.getUser", map );
        
        log.info( "userList = {}", userList );
        
        return userList;
    }
    
    public int userDeactivate( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.update( "userDeactivate", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
}
