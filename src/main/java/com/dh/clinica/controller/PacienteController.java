package com.dh.clinica.controller;

import com.dh.clinica.model.entities.Odontologo;
import com.dh.clinica.model.entities.Paciente;
import com.dh.clinica.service.PacienteService;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pacientes")
public class PacienteController {

    private static final Logger logger = LogManager.getLogger(PacienteController.class);

    @Autowired
    private PacienteService pacienteService;

    @PostMapping()
    public ResponseEntity<Paciente> registrarPaciente(@RequestBody Paciente paciente) {
        logger.debug("Registrando paciente...");
        return ResponseEntity.ok(pacienteService.guardar(paciente));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Paciente> buscar(@PathVariable Integer id) {
        Paciente paciente = pacienteService.buscar(id).orElse(null);
        logger.debug("Buscando paciente con id: " + id);
        return ResponseEntity.ok(paciente);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Paciente> actualizar(@PathVariable Integer id, @RequestBody Paciente paciente) {
        ResponseEntity<Paciente> response = null;
        logger.debug("Actualizando datos de paciente...");
        Paciente pacienteViejo = pacienteService.buscar(id).orElse(null);
        logger.debug(pacienteViejo);
        if (pacienteService.buscar(paciente.getId()).isPresent()) {
            pacienteViejo.setNombre(paciente.getNombre());
            pacienteViejo.setApellido(paciente.getApellido());
            pacienteViejo.setDni(paciente.getDni());
            pacienteViejo.setFechaIngreso(paciente.getFechaIngreso());
            pacienteViejo.setDomicilio(paciente.getDomicilio());
            response = ResponseEntity.ok(pacienteService.actualizar(pacienteViejo));
            logger.debug("Los datos han sido actualizados!");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            logger.error("Hubo un error en la actualizacion del paciente.");
        }
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) {
        ResponseEntity<String> response = null;

        if (pacienteService.buscar(id).isPresent()) {
            pacienteService.eliminar(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Eliminado");
            logger.debug("Eliminando paciente con id: " + id);
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            logger.error("No fue posible eliminar el paciente con id: " + id);
        }

        return response;
    }

    @GetMapping()
    public ResponseEntity<List<Paciente>> buscarTodos() {
        logger.debug("Buscando todos los pacientes...");
        return ResponseEntity.ok(pacienteService.buscarTodos());
    }

}
