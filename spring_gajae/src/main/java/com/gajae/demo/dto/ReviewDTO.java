package com.gajae.demo.dto;

import lombok.Data;

@Data
public class ReviewDTO {
    
    private Long    REVIEW_NUMBER;
    private Long    P_ID;
    private Long    R_NUMBER;
    private String  USER_NICKNAME;
    private String  REVIEW_TITLE;
    private String  REVIEW_DATE;
    private String  REVIEW_GOOD;
    private String  REVIEW_BAD;
    private String  REVIEW_PHOTO;
    private Integer REVIEW_SERVICE;
    private Integer REVIEW_FACILITY;
    private Integer REVIEW_CLEAN;
    private Integer REVIEW_COST;
    private Integer REVIEW_LOCATION;
}
