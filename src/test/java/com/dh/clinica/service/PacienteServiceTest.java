package com.dh.clinica.service;

import com.dh.clinica.model.entities.Domicilio;
import com.dh.clinica.model.entities.Odontologo;
import com.dh.clinica.model.entities.Paciente;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.hibernate.Session;
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

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
class PacienteServiceTest {

    private static final Logger logger = LogManager.getLogger(PacienteServiceTest.class);

    @Autowired
    private PacienteService pacienteService;

    @Test
    void registrarPaciente() {
        Domicilio domicilio1 = new Domicilio("32", "3556", "Necochea", "BsAs");
        Paciente paciente1 = pacienteService.guardar(new Paciente("Juan", "Perez", "38874312", new Date(), domicilio1));
        Domicilio domicilio2 = new Domicilio("62", "8656", "Necochea", "BsAs");
        Paciente paciente2 = pacienteService.guardar(new Paciente("Pablo", "Gomez", "28874312", new Date(), domicilio2));
        logger.info(paciente1);
        logger.info(paciente2);
        Assert.assertTrue(paciente1.getId() != null);
        Assert.assertTrue(paciente2.getId() != null);
    }

    @Test
    void buscarPacientePorId() {
        Domicilio domicilio = new Domicilio("2", "1556", "Necochea", "BsAs");
        Paciente paciente = pacienteService.guardar(new Paciente("Jorge", "Perez", "38874312", new Date(), domicilio));
        logger.info(paciente);
        Assert.assertTrue(pacienteService.buscar(paciente.getId()).isPresent());
    }

    @Test
    void buscarTodosLosPacientes() {
        List<Paciente> pacientes = pacienteService.buscarTodos();
        logger.info(pacientes);
        Assert.assertFalse(pacientes.isEmpty());
        Assert.assertTrue(pacientes.size() == 3);

    }

    @Test
    void eliminarPacientePorId() {
        Domicilio domicilio = new Domicilio("8", "246", "Pinamar", "BsAs");
        Paciente paciente = pacienteService.guardar(new Paciente("Marta", "Smith", "48874312", new Date(), domicilio));
        logger.info("Creando paciente: " + paciente);
        if (pacienteService.buscar(paciente.getId()).isPresent()) {
            pacienteService.eliminar(paciente.getId());
            logger.info("Eliminando paciente con id: " + paciente.getId());
        } else {
            logger.error("No se encuentra paciente con el id indicado");
        }
        Assert.assertFalse(pacienteService.buscar(paciente.getId()).isPresent());
    }

    @Test
    void actualizarPaciente() {
    }
}