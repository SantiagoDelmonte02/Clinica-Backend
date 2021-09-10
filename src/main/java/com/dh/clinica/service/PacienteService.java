package com.dh.clinica.service;

import com.dh.clinica.dao.IDao;
import com.dh.clinica.model.Odontologo;
import com.dh.clinica.model.Paciente;

import java.util.List;
import java.util.Optional;

public class PacienteService {

    private IDao<Paciente> pacienteIDao;

    public PacienteService(IDao<Paciente> pacienteIDao) {
        this.pacienteIDao = pacienteIDao;
    }

    public Paciente registrarPaciente(Paciente paciente) {
        return pacienteIDao.guardar(paciente);
    }

    public Optional<Paciente> buscarPorId(Integer id) {
        return pacienteIDao.buscar(id);
    }

    public void eliminarPorId(Integer id) {
        pacienteIDao.eliminar(id);
    }

    public List<Paciente> buscarTodos() {
        return pacienteIDao.buscarTodos();
    }

    public Paciente actualizar(Paciente paciente) {
        return pacienteIDao.actualizar(paciente);
    }


}
