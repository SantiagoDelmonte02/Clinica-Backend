package com.dh.clinica;


import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/")
//                .antMatchers("/turnos").hasRole("USER")
//                .antMatchers("/administracion").hasRole("ADMIN")
//                .antMatchers("/consultas").hasRole("ADMIN")
//                .anyRequest()
                .permitAll()
                .and()
                .formLogin()
                .and()
                .logout();
    }
}
