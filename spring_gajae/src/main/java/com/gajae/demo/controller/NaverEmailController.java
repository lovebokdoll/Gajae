package com.gajae.demo.controller;

import javax.mail.MessagingException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gajae.demo.service.NaverEmailService;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping( "/email/*" )
public class NaverEmailController {
    
    private final NaverEmailService naverEmailService;
    
    public NaverEmailController( NaverEmailService naverEmailService ) {
        this.naverEmailService = naverEmailService;
    }
    
    @GetMapping( "/sendVerificationCode" )
    public ResponseEntity<String> sendVerificationCode( @RequestParam String email ) throws MessagingException {
        log.info( "email = {}", email );
        String verificationCode = naverEmailService.sendVerificationCode( email );
        return ResponseEntity.ok().body( verificationCode );
    }
    
    @GetMapping( "/subscribe" )
    public ResponseEntity<String> subscribe( @RequestParam String email ) throws MessagingException {
        log.info( "email = {}", email );
        // 구독 처리 로직
        naverEmailService.sendSubscriptionMessage( email );
        return ResponseEntity.ok().body( "구독이 완료되었습니다." );
    }
}