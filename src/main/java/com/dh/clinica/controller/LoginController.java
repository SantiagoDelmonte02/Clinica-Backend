package com.dh.clinica.controller;


import com.dh.clinica.model.entities.AppUser;
import com.dh.clinica.model.entities.Odontologo;
import com.dh.clinica.service.auth.UserService;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/login")
public class LoginController {

    private static final Logger logger = LogManager.getLogger(LoginController.class);

    @Autowired
    UserService userService;

//    @PostMapping
//    public ResponseEntity<AppUser> logear(@RequestBody AppUser appUser) {
//        ResponseEntity<AppUser> response = null;
//        AppUser appUser1 = (AppUser) userService.loadUserByUsername(appUser.getUsername());
//
//        if (appUser1.isEnabled()) {
//            response = ResponseEntity.ok(userService.loadUserByUsername(appUser1.getUsername()));
//        }
//        return response;
//    }



}
