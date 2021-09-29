package com.dh.clinica.service;

import com.dh.clinica.model.entities.Domicilio;
import com.dh.clinica.model.entities.Odontologo;
import com.dh.clinica.model.entities.Paciente;
import com.dh.clinica.model.entities.Turno;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
class TurnoServiceTest {

    private static final Logger logger = LogManager.getLogger(PacienteServiceTest.class);

    @Autowired
    private TurnoService turnoService;
    @Autowired
    private OdontologoService odontologoService;
    @Autowired
    private PacienteService pacienteService;


    @Test
    void registrarTurno() {
        Domicilio domicilio1 = new Domicilio("32", "3556", "Necochea", "BsAs");
        Paciente paciente1 = new Paciente("Juan", "Perez", "38874312", new Date(), domicilio1);
        Odontologo odontologo1 = new Odontologo("Jorge", "Smith", 12367884);
        Domicilio domicilio2 = new Domicilio("62", "8656", "Necochea", "BsAs");
        Paciente paciente2 = new Paciente("Pablo", "Gomez", "28874312", new Date(), domicilio2);
        Odontologo odontologo2 = new Odontologo("Juan", "Ramirez", 34897190);

        odontologoService.registrarOdontologo(odontologo1);
        odontologoService.registrarOdontologo(odontologo2);
        pacienteService.guardar(paciente1);
        pacienteService.guardar(paciente2);

        Turno turno1 = turnoService.registrarTurno(new Turno(paciente1, odontologo1, new Date()));
        Turno turno2 = turnoService.registrarTurno(new Turno(paciente2, odontologo1, new Date()));
        Turno turno3 = turnoService.registrarTurno(new Turno(paciente2, odontologo2, new Date()));

        logger.debug("Turno registrado!");
        logger.debug(turno1);
        logger.debug("Turno registrado!");
        logger.debug(turno2);
        logger.debug("Turno registrado!");
        logger.debug(turno3);

        Assert.assertTrue(turno1.getId() != null);
        Assert.assertTrue(turno2.getId() != null);
        Assert.assertTrue(turno3.getId() != null);
    }

    @Test
    void cargarTodosLosTurnos() {
        List<Turno> turnos = turnoService.listar();
        logger.info("Los turnos pendientes son: ");
        for (Turno turno : turnos) {
            logger.info(turno);
        }
        Assert.assertTrue(turnos.size() == 3);
    }

    @Test
    void buscarTurnoPorId() {
        logger.info(turnoService.buscar(1));
        Assert.assertTrue(turnoService.buscar(1).isPresent());
    }

//    @Test
//    void eliminar() {
//    }
//
//    @Test
//    void actualizar() {
//    }
//

}