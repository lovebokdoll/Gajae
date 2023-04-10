package com.gajae.demo.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class WishListDTO {
    
    private String USER_ID;
    private int    P_ID;
    private String P_ADDRESS;
    private String P_STAR;
    private double REVIEW_AVERAGE;
}
