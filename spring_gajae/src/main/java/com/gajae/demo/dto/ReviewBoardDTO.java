package com.gajae.demo.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ReviewBoardDTO {
    
    private int    REVIEW_NUMBER;
    private int    P_ID;
    private int    R_NUMBER;
    private String USER_NICKNAME;
    private String REVIEW_TITLE;
    private String REVIEW_DATE;
    private String REVIEW_GOOD;
    private String REVIEW_BAD;
    private String REVIEW_PHOTO;
    private int    REVIEW_SERVICE;
    private int    REVIEW_FACILITY;
    private int    REVIEW_CLEAN;
    private int    REVIEW_COST;
    private int    REVIEW_LOCATION;
    
}
