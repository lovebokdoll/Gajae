package com.gajae.demo.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import oracle.sql.DATE;

@Getter
@Setter
@ToString
public class PropertyVO {
    
    private int    P_ID;
    private String P_TITLE;
    private String P_PHOTO;
    private String P_STAR;
    private String P_POSTAL;
    private String P_TEL;
    private String P_ADDRESS;
    private String P_OVERVIEW;
    private String P_SCALE;
    private String P_CHECKIN;
    private String P_CHECKOUT;
    private String P_GUIDE;
    private String P_REFUND;
    private String P_STATUS;
    private String P_MAPY;
    private String P_MAPX;
    private DATE   P_HIDERDATE;
    private DATE   P_CHANGE_DATE;
}
