package com.dh.clinica.service;

import com.dh.clinica.model.entities.Odontologo;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
class OdontologoServiceTest {

    @Autowired
    private OdontologoService odontologoService;

    @Test
    void cargarOdontologo() {
        Odontologo odontologo1 = odontologoService.registrarOdontologo(new Odontologo("Jorge", "Smith", 12367884));
        Odontologo odontologo2 = odontologoService.registrarOdontologo(new Odontologo("Juan", "Ramirez", 348971960));
        System.out.println(odontologo1);
        System.out.println(odontologo2);
        Assert.assertTrue(odontologo1.getId() != null);
        Assert.assertTrue(odontologo2.getId() != null);
    }

    @Test
    void buscarOdontologoPorId() {
        Odontologo odontologo = odontologoService.registrarOdontologo(new Odontologo("Tony", "Stark", 5542342));
        System.out.println(odontologo);
        Assert.assertTrue(odontologoService.buscar(odontologo.getId()).isPresent());
    }

    @Test
    void buscarTodosLosOdontologos() {
        List<Odontologo> odontologos = odontologoService.buscarTodos();
        System.out.println(odontologos);
        Assert.assertFalse(odontologos.isEmpty());
        Assert.assertTrue(odontologos.size() == 4);
    }

    @Test
    void eliminarOdontologoPorId() {
        Odontologo odontologo = odontologoService.registrarOdontologo(new Odontologo("Clint", "Barton", 5542342));
        if (odontologoService.buscar(odontologo.getId()).isPresent()) {
            odontologoService.eliminar(odontologo.getId());
            System.out.println("Odontologo eliminado correctamente. Con id: " + odontologo.getId());
        } else {
            System.out.println("No hay odontologo con ese id");
        }
        Assert.assertFalse(odontologoService.buscar(odontologo.getId()).isPresent());
    }

    @Test
    void actualizarOdontologo() {
        Odontologo odontologo = odontologoService.registrarOdontologo(new Odontologo("Steve", "Rogers", 3434343));
        System.out.println(odontologo);
        odontologo.setNombre("Captain");
        odontologo.setApellido("America");
        odontologoService.actualizar(odontologo);
        System.out.println(odontologo);
        Assert.assertTrue(odontologo.getNombre().equals("Captain"));
        Assert.assertTrue(odontologo.getApellido().equals("America"));
    }


}