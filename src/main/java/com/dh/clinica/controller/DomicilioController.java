package com.dh.clinica.controller;

import com.dh.clinica.model.entities.Domicilio;
import com.dh.clinica.model.entities.Paciente;
import com.dh.clinica.service.DomicilioService;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/domicilios")
public class DomicilioController {

    private static final Logger logger = LogManager.getLogger(DomicilioController.class);

    @Autowired
    private DomicilioService domicilioService;

    @PostMapping()
    public ResponseEntity<Domicilio> registrarDomicilio(@RequestBody Domicilio domicilio) {
        return ResponseEntity.ok(domicilioService.guardar(domicilio));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Domicilio> buscar(@PathVariable Integer id) {
        Domicilio domicilio = domicilioService.buscar(id).orElse(null);

        return ResponseEntity.ok(domicilio);
    }

    @GetMapping()
    public ResponseEntity<List<Domicilio>> buscarTodos() {
        return ResponseEntity.ok(domicilioService.buscarTodos());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Domicilio> actualizar(@PathVariable Integer id, @RequestBody Domicilio domicilio) {
        ResponseEntity<Domicilio> response = null;
        logger.debug("Actualizando datos de domicilio...");
        Domicilio domicilioViejo = domicilioService.buscar(id).orElse(null);
        logger.debug(domicilioViejo);
        if (domicilioService.buscar(domicilio.getId()).isPresent()){
            domicilioViejo.setCalle(domicilio.getCalle());
            domicilioViejo.setNumero(domicilio.getNumero());
            domicilioViejo.setLocalidad(domicilio.getLocalidad());
            domicilioViejo.setProvincia(domicilio.getProvincia());
            response = ResponseEntity.ok(domicilioService.actualizar(domicilioViejo));
            logger.debug("Los datos del domicilio han sido actualizados!");
        }
        else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            logger.error("Hubo un error en la actualizacion del domicilio.");
        }
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) {
        ResponseEntity<String> response = null;

        if (domicilioService.buscar(id).isPresent()) {
            domicilioService.eliminar(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Eliminado");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return response;
    }

}
