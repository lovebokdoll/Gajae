package com.gajae.demo.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ResultDTO {
    private String P_ADDRESS;
    private int    P_CHECKIN;
    
    public String getP_Address() { return P_ADDRESS; }
    
    public void setP_Address( String p_ADDRESS ) { this.P_ADDRESS = P_ADDRESS; }
}
