package com.dh.clinica.service;

import com.dh.clinica.dao.IDao;
import com.dh.clinica.model.Odontologo;

import java.util.List;
import java.util.Optional;

public class OdontologoService {

    private IDao<Odontologo> odontologoIDao;

    public OdontologoService(IDao<Odontologo> odontologoIDao) {
        this.odontologoIDao = odontologoIDao;
    }

    public Odontologo registrarOdontologo(Odontologo odontologo) {
        return odontologoIDao.guardar(odontologo);
    }

    public Optional<Odontologo> buscarPorId(Integer id) {
        return odontologoIDao.buscar(id);
    }

    public void eliminarPorId(Integer id) {
        odontologoIDao.eliminar(id);
    }

    public List<Odontologo> buscarTodos() {
        return odontologoIDao.buscarTodos();
    }

    public Odontologo actualizar(Odontologo odontologo) {
        return odontologoIDao.actualizar(odontologo);
    }


}
