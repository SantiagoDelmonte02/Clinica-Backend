package com.dh.clinica.service.auth;

import com.dh.clinica.model.Roles;
import com.dh.clinica.model.entities.AppUser;
import com.dh.clinica.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    private UserRepository userRepository;

    @Autowired
    public DataLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void run(ApplicationArguments args) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode("admin");
        BCryptPasswordEncoder passwordEncoder2 = new BCryptPasswordEncoder();
        String hashedPassword2 = passwordEncoder2.encode("password");
        userRepository.save(new AppUser("Administrador", "admin", hashedPassword, Roles.ADMIN));
        userRepository.save(new AppUser("Usuario", "user", hashedPassword2, Roles.USER));

    }

}
