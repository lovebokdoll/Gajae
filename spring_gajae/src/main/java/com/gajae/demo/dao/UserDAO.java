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
    
    public int userSignup( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.insert( "user.signup", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
    public List<UserVO> userSignIn( Map<String, Object> map ) {
        
        List<UserVO> userList = sqlSessionTemplate.selectList( "user.signIn", map );
        
        log.info( "userList = {}", userList );
        
        return userList;
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
    
    public List<UserVO> idCheck( Map<String, Object> map ) {
        
        List<UserVO> userList = sqlSessionTemplate.selectList( "user.idCheck", map );
        
        log.info( "userList = {}", userList );
        
        return userList;
    }
    
    public List<UserVO> nicknameCheck( Map<String, Object> map ) {
        
        List<UserVO> userList = sqlSessionTemplate.selectList( "user.nicknameCheck", map );
        
        log.info( "userList = {}", userList );
        
        return userList;
    }
    
    public int userUpdate( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.update( "user.userUpdate", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
    public int nameUpdate( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.update( "user.nameUpdate", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
    public int nicknameUpdate( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.update( "user.nicknameUpdate", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
    public int emailUpdate( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.update( "user.emailUpdate", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
    public int mobileUpdate( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.update( "user.mobileUpdate", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
    public int genderUpdate( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.update( "user.genderUpdate", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
    public int addressUpdate( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.update( "user.addressUpdate", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
}
