package com.gajae.demo.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gajae.demo.kakao.KakaoProfile;
import com.gajae.demo.kakao.OAuthToken;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping( "/auth/*" )
public class KakaoController {
    
    @GetMapping( "kakao/callback" )
    public String kakaoCallback( HttpSession session, String code, HttpServletResponse res ) throws IOException {
        
        log.info( "kakao callback" );
        
        /**
         * POST 방식으로 KEY = VALUE DATA를 요청(카카오쪽으로)
         */
        RestTemplate restTemplate = new RestTemplate();
        
        /**
         * HttpHeaders 객체 생성
         */
        HttpHeaders headers = new HttpHeaders();
        headers.add( "Content-type", "application/x-www-form-urlencoded;charset=utf-8" );
        
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add( "grant_type", "authorization_code" );
        params.add( "client_id", "10bc17b138540bf921263110fe1e7167" );
        params.add( "redirect_uri", "http://localhost:9999/auth/kakao/callback" );
        params.add( "code", code );
        
        /**
         * HttpHeader와 HttpBody를 하나의 오브젝트에 담기
         */
        HttpEntity<MultiValueMap<String, String>> tokenRequest = new HttpEntity<>( params, headers );
        
        /**
         * POST 방식으로 Http 요청하기 -> response 변수로 응답 받음
         */
        ResponseEntity<String> response = restTemplate.exchange( "https://kauth.kakao.com/oauth/token", HttpMethod.POST, tokenRequest,
                        String.class );
        
        log.info( "code = {}", code );
        log.info( "response.getBody() = {}", response.getBody() );
        
        ObjectMapper objectMapper = new ObjectMapper();
        OAuthToken   oAuthToken   = null;
        
        try {
            oAuthToken = objectMapper.readValue( response.getBody(), OAuthToken.class );
        }
        catch ( JsonMappingException jme ) {
            jme.printStackTrace();
        }
        catch ( JsonProcessingException je ) {
            je.printStackTrace();
        }
        
        log.info( oAuthToken );
        log.info( "access_token ==> " + oAuthToken.getAccess_token() );
        
        /**
         * 사용자 정보 가져오기
         */
        RestTemplate rtUser = new RestTemplate();
        
        HttpHeaders headers2 = new HttpHeaders();
        headers2.add( "Authorization", "Bearer " + oAuthToken.getAccess_token() );
        headers2.add( "Content-type", "application/x-www-form-urlencoded;charset=utf-8" );
        
        HttpEntity<MultiValueMap<String, String>> profileRequest = new HttpEntity<>( headers2 );
        
        ResponseEntity<String> response2 = rtUser.exchange( "https://kapi.kakao.com/v2/user/me", HttpMethod.POST, profileRequest,
                        String.class );
        log.info( "response2.getBody() = {}", response2.getBody() );
        ObjectMapper objectMapper2 = new ObjectMapper();
        KakaoProfile kakaoProfile  = null;
        
        try {
            kakaoProfile = objectMapper2.readValue( response2.getBody(), KakaoProfile.class );
        }
        catch ( JsonMappingException jme ) {
            jme.printStackTrace();
        }
        catch ( JsonProcessingException je ) {
            je.printStackTrace();
        }
        
        log.info( "카카오 아이디(번호) = {} ", kakaoProfile.getId() );
        log.info( "카카오 이메일 = {} ", kakaoProfile.getKakao_account().getEmail() );
        log.info( "카카오 유저네임 = {} ", kakaoProfile.getProperties().nickname );
        Long   kakao_id = kakaoProfile.getId();
        String nickname = kakaoProfile.getProperties().nickname;
        session.setAttribute( "kakao_id", kakao_id );
        session.setAttribute( "kakao_nickname", nickname );
        log.info( session.getAttribute( "kakao_id" ) );
        log.info( session.getAttribute( "kakao_nickname" ) );
        // res.sendRedirect( "http://localhost:3000/login" );
        return nickname;
    }
}
