package com.dh.clinica.service;

import com.dh.clinica.model.entities.Paciente;
import com.dh.clinica.model.impl.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PacienteService {

    @Autowired
    PacienteRepository repository;

    public String save(Paciente paciente){
        if(repository.save(paciente) != null){
            return "OK";
        }else{
            return null;
        }
    }

    public List<Paciente> obtenerTodos(){
        return repository.findAll();
    }


}
