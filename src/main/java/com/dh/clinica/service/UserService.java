package com.dh.clinica.service;


import com.dh.clinica.model.Rol;
import com.dh.clinica.model.entities.User;
import com.dh.clinica.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.getUserByName(username);

        Set<GrantedAuthority> autorizaciones = new HashSet<>();
        for(Rol rol: user.get().getRoles())
        {
            GrantedAuthority autorizacion = new SimpleGrantedAuthority(rol.getName());
            autorizaciones.add(autorizacion);

        }

        org.springframework.security.core.userdetails.User userDetail = new org.springframework.security.core.userdetails.User(user.get().getName(),"{noop}" + user.get()       .getPassword(),true, true, true,true,autorizaciones);
        return userDetail;
    }
}
