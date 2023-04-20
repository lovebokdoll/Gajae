package com.gajae.demo.service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class NaverEmailService {
    
    private final JavaMailSender mailSender;
    
    public NaverEmailService( JavaMailSender mailSender ) {
        this.mailSender = mailSender;
    }
    
    public String generateVerificationCode() {
        int     length     = 6;
        boolean useLetters = true;
        boolean useNumbers = false;
        return RandomStringUtils.random( length, useLetters, useNumbers );
    }
    
    public String sendVerificationCode( String recipientEmail ) throws MessagingException {
        String            code          = generateVerificationCode();
        MimeMessage       mimeMessage   = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper( mimeMessage, true, "UTF-8" );
        messageHelper.setFrom( "loveseesee@naver.com" );
        messageHelper.setTo( recipientEmail );
        messageHelper.setSubject( "네이버 이메일 인증 코드" );
        messageHelper.setText( "인증 코드: " + code, true );
        mailSender.send( mimeMessage );
        return code;
    }
    
}
