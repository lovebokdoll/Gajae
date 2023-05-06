package com.gajae.demo.logic;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
    
    /*
     * public List<Map<String, Object>> userSignIn( Map<String, Object> map ) {
     * 
     * List<Map<String, Object>> userList = userDAO.userSignIn( map );
     * 
     * return userList;
     * }
     */
    
    
      public List<Map<String, Object>> userSignIn( Map<String, Object> map ) {
      String userId = ( String ) map.get( "user_id" );
      String password = ( String ) map.get( "user_pw" );
      
      // 입력한 비밀번호를 암호화
      BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
      String encryptedPassword = encoder.encode( password );
      
      log.info( "encryptedPassword ={}", encryptedPassword );
      // 데이터베이스에서 해당 아이디에 대한 정보 가져오기
      Map<String, Object> user = userDAO.getUserById( userId );
      log.info( "userId ={}", userId );
      log.info( "user = {}", user );
      
      if ( user == null ) {
      return null; // 해당 아이디가 없는 경우
      }
      
      // 데이터베이스에서 가져온 암호화된 비밀번호와 비교
      String dbEncryptedPassword = ( String ) user.get( "USER_PW" );
      boolean passwordMatch = encoder.matches( password, dbEncryptedPassword );
      
      if ( !passwordMatch ) {
      return null; // 비밀번호가 일치하지 않는 경우
      }
      
      // 로그인 성공한 경우 해당 유저 정보 반환
      List<Map<String, Object>> userList = new ArrayList<>();
      userList.add( user );
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
    
    public int profileupload( Map<String, Object> map ) {
        int result = userDAO.profileupload( map );
        return result;
    }
    
    public List<Map<String, Object>> pwCheck( Map<String, Object> map ) {
        List<Map<String, Object>> userList = userDAO.pwCheck( map );
        
        return userList;
    }
    
}
