package com.dh.clinica;
import com.dh.clinica.controller.OdontologoController;
import com.dh.clinica.model.entities.Odontologo;
import com.dh.clinica.model.entities.Paciente;
import com.dh.clinica.service.OdontologoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ClinicaApplication {


	@Autowired
	private static OdontologoService odontologoService;

	public static void main(String[] args) {
		SpringApplication.run(ClinicaApplication.class, args);
	}

}
