package com.gajae.demo.logic;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.PaymentDao;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class PaymentLogic {
    
    @Autowired
    private PaymentDao paymentDao;
    
    public List<Map<String, Object>> paymentInformation( Map<String, Object> map ) {
        
        List<Map<String, Object>> paymentInfoList = paymentDao.paymentInformation( map );
        
        return paymentInfoList;
    }
    
    public int paymentInsert( Map<String, Object> map ) {
        
        int result = paymentDao.paymentInsert( map );
        
        return result;
    }
    
    public int paymentUpdate( Map<String, Object> map ) {
        
        int result = paymentDao.paymentUpdate( map );
        
        return result;
    }
}
