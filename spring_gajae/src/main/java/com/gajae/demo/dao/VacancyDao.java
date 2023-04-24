package com.gajae.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository
public class VacancyDao {
    
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;
    
    public List<Map<String, Object>> getCheckedDate( Map<String, Object> map ) {
        
        List<Map<String, Object>> checkedDateList = sqlSessionTemplate.selectList( "vacancy.getCheckedDate", map );
        
        return checkedDateList;
    }
}
