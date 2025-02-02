package com.gajae.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@SpringBootApplication
public class SpringGajaeApplication {
    
    public static void main( String[] args ) {
        SpringApplication.run( SpringGajaeApplication.class, args );
    }
    
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings( CorsRegistry registry ) {
                registry.addMapping( "/**" ).allowedOrigins("*")
                .allowedMethods("*")
                .allowedOriginPatterns("*").exposedHeaders("*");//추가한 부분
            }
        };
    }
    // @Bean
    // public CommonsMultipartResolver multipartResolver() {
    // CommonsMultipartResolver resolver = new CommonsMultipartResolver();
    // resolver.setMaxUploadSize(5242880);
    // return resolver;
    // }
    //
}
