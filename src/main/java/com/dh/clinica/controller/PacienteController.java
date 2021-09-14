package com.dh.clinica.controller;

import com.dh.clinica.model.entities.Paciente;
import com.dh.clinica.service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pacientes")
public class PacienteController {

    @Autowired
    PacienteService pacienteService;

    @PostMapping("/registrar")
    public ResponseEntity<String> crear(@RequestBody Paciente paciente){
        ResponseEntity<String> respuesta = null;
        if(pacienteService.save(paciente) != null){
            respuesta = ResponseEntity.ok("El paciente fue registrado con éxito");
        }else{
            respuesta = ResponseEntity.internalServerError().body("Ooops! Hubo un error en el registro");
        }
        return respuesta;
    }

    @GetMapping("/todos")
    public ResponseEntity<List<Paciente>> consultarTodos(){
        return ResponseEntity.ok(pacienteService.obtenerTodos());
    }

}
