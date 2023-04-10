package com.gajae.demo.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class P_RoomTypeDTO {
    private int    P_ID;
    private String ROOM_TYPE;
    private String ROOM_PRICE;
    private String ROOM_CAPACITY;
    private String ROOM_OPTION;
}
