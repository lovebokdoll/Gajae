package com.gajae.demo.logic;

import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.ReviewBoardDAO;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class ReviewBoardLogic {
	
	@Autowired
	private ReviewBoardDAO reviewBoardDao;
	
	public int reviewboardInsert(Map<String, Object> pMap) {
		log.info("reviewboardInsert");
	    log.info(pMap);
	    String imgUrl = (String) pMap.get("REVIEW_POTO");//REVIEW_PHOTO
	    log.info(imgUrl);
	    if (imgUrl != null) {
	        try {
	            URL url = new URL(imgUrl);	            
	            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
	            connection.setRequestMethod("GET");
	            connection.setConnectTimeout(10000);
	            connection.setReadTimeout(10000);
	            InputStream inputStream = connection.getInputStream();
	            ByteArrayOutputStream baos = new ByteArrayOutputStream();
	            byte[] buffer = new byte[1024];
	            int bytesRead;
	            while ((bytesRead = inputStream.read(buffer)) != -1) {
	                baos.write(buffer, 0, bytesRead);
	            }
	            byte[] imageBytes = baos.toByteArray();
	            pMap.put("REVIEW_POTO", imageBytes);
	            inputStream.close();
	            baos.close();
	            connection.disconnect();
	        } catch (MalformedURLException e) {
	            e.printStackTrace();
	        } catch (IOException e) {
	            e.printStackTrace();
	        }
	    }
	    int result = reviewBoardDao.reviewInsert(pMap);
	    log.info(pMap);
	    return result;
	}
	
		
	public int reviewUpdate(Map<String, Object> pMap) {
		int result = reviewBoardDao.reviewUpdate(pMap);
		return result;
	}
	public static byte[] imageToByteArray(String filePath) throws Exception{
		byte[] returnValue = null;
		ByteArrayOutputStream baos = null;
		FileInputStream fis = null;
		
		try {
			baos = new ByteArrayOutputStream();
			fis = new FileInputStream(filePath);
			
			byte[] buf = new byte[1024];
			int read = 0;
			while((read=fis.read(buf, 0, buf.length)) != -1) {
				baos.write(buf, 0, read);
			}
			returnValue = baos.toByteArray();
		} catch (Exception e) {
			e.printStackTrace();
		}
		finally {
			if(baos != null) {
				if(fis != null) {
					fis.close();
				}
			}
		}
		return returnValue;
	}

}