package com.gajae.demo.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ReplyDTO {
	private int REPLY_NUMBER;
	 private int REVIEW_NUMBER;
	 private String HOST_ID;
	 private String REPLY_CONTENT;
	 private String REPLY_DATE;
	
	 public ReplyDTO(int REPLY_NUMBER, int REVIEW_NUMBER, String HOST_ID, String REPLY_CONTENT, String REPLY_DATE) {
		 this.REPLY_NUMBER = REPLY_NUMBER;
		 this.REVIEW_NUMBER = REVIEW_NUMBER;
		 this.HOST_ID = HOST_ID;
		 this.REPLY_CONTENT = REPLY_CONTENT;
		 this.REPLY_DATE = REPLY_DATE;
	 }
}
