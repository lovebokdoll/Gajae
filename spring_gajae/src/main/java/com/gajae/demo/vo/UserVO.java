package com.gajae.demo.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import oracle.sql.DATE;

@Getter
@Setter
@ToString
public class UserVO {
    
    private int    USER_NUMBER;
    private String USER_ID;
    private String USER_PW;
    private String USER_NAME;
    private String USER_NICKNAME;
    private String USER_EMAIL;
    private String USER_MOBILE;
    private String USER_BIRTH;
    private String USER_ADDRESS;
    private String USER_GENDER;
    private String USER_STATUS;
    private String USER_AUTH;
    private DATE   USER_HIREDATE;
    
}
