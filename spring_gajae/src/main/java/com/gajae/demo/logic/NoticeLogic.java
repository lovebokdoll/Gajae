package com.gajae.demo.logic;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gajae.demo.dao.NoticeDao;
@Service
public class NoticeLogic {
	
	@Autowired
	NoticeDao noticeDao;
	 public List<Map<String, Object>> noticeList (Map<String, Object> pMap) {
		
	List<Map<String, Object>> noticeList = null;
	noticeList = noticeDao.noticeList(pMap);
	return noticeList;
}
}