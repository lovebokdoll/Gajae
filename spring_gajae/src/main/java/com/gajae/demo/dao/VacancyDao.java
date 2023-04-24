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
    
    // public String getResNumber
    
    public List<Map<String, Object>> startEndDate( Map<String, Object> map ) {
        
        List<Map<String, Object>> resDateList = sqlSessionTemplate.selectList( "vacancy.startEndDate", map );
        
        return resDateList;
    }
    
    public int vacancyUpdate( Map<String, Object> map ) {
        
        log.info( "map = {}", map );
        
        int result = sqlSessionTemplate.update( "vacancy.vacancyUpdate", map );
        
        return result;
    }
}
