package com.dh.clinica.controller;

import com.dh.clinica.model.entities.Odontologo;
import com.dh.clinica.service.OdontologoService;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/odontologos")
public class OdontologoController {

    private static final Logger logger = LogManager.getLogger(OdontologoController.class);

    @Autowired
    private OdontologoService odontologoService;

    @PostMapping()
    public ResponseEntity<Odontologo> registrarOdontologo(@RequestBody Odontologo odontologo) {
        logger.debug("Registrando odontologo...");
        return ResponseEntity.ok(odontologoService.registrarOdontologo(odontologo));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Odontologo> buscar(@PathVariable Integer id) {
        Odontologo odontologo = odontologoService.buscar(id).orElse(null);
        logger.debug("Buscando odontologo con id: " + id);
        return ResponseEntity.ok(odontologo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Odontologo> actualizar(@PathVariable Integer id, @RequestBody Odontologo odontologoActualizado) {
        ResponseEntity<Odontologo> response = null;
        logger.debug("Actualizando datos de odontologo...");

        Odontologo odontologoViejo = odontologoService.buscar(id).orElse(null);
        logger.debug(odontologoViejo);
        if (odontologoService.buscar(odontologoViejo.getId()).isPresent()) {
            odontologoViejo.setNombre(odontologoActualizado.getNombre());
            odontologoViejo.setApellido(odontologoActualizado.getApellido());
            odontologoViejo.setMatricula(odontologoActualizado.getMatricula());
            response = ResponseEntity.ok(odontologoService.actualizar(odontologoViejo));
            logger.debug("Los datos del odontologo han sido actualizados!");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            logger.error("Hubo un error en la actualizacion del odontologo.");
        }
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) {
        ResponseEntity<String> response = null;
        if (odontologoService.buscar(id).isPresent()) {
            odontologoService.eliminar(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Eliminado");
            logger.debug("Eliminando odontologo con id: " + id);
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            logger.error("No fue posible eliminar el odontologo con id: " + id);
        }

        return response;
    }
    @GetMapping
    public ResponseEntity<List<Odontologo>> buscarTodos(){
        logger.debug("Buscando todos los odontologos...");
        return ResponseEntity.ok(odontologoService.buscarTodos());
    }

}
