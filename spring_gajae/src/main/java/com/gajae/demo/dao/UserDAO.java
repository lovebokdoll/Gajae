package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gajae.demo.dto.UsersDTO;

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
    
    public List<UsersDTO> userSignIn( Map<String, Object> map ) {
        
        List<UsersDTO> userList = sqlSessionTemplate.selectList( "user.signIn", map );
        
        log.info( "userList = {}", userList );
        
        return userList;
    }
    
    public List<UsersDTO> getUser( Map<String, Object> map ) {
        
        List<UsersDTO> userList = sqlSessionTemplate.selectList( "user.getUser", map );
        
        log.info( "userList = {}", userList );
        
        return userList;
    }
    
    public int userDeactivate( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.update( "userDeactivate", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
    public List<UsersDTO> idCheck( Map<String, Object> map ) {
        
        List<UsersDTO> userList = sqlSessionTemplate.selectList( "user.idCheck", map );
        
        log.info( "userList = {}", userList );
        
        return userList;
    }
    
    public List<UsersDTO> nicknameCheck( Map<String, Object> map ) {
        
        List<UsersDTO> userList = sqlSessionTemplate.selectList( "user.nicknameCheck", map );
        
        log.info( "userList = {}", userList );
        
        return userList;
    }
    
    /**
     * 계정 관리 페이지에서 한 번 에 한 개의 column만 업데이트 가능하다.
     * (쿼리문 결함으로 한 번에 한 개 column만 업데이트 가능)
     * 
     * @param 사용자로 부터 입력받은 데이터
     * @return update 성공 1, 실패 0
     */
    
    public int userUpdate( Map<String, Object> map ) {
        
        int result = sqlSessionTemplate.update( "user.userUpdate", map );
        
        log.info( "result = {}", result );
        
        return result;
    }
    
}
