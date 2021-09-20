package com.dh.clinica.model.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
public class Paciente {

    @Id
    @SequenceGenerator(name = "paciente_sequence", sequenceName = "paciente_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "paciente_sequence")
    @Getter
    private Integer id;
    @Getter @Setter
    private String nombre;
    @Getter @Setter
    private String apellido;
    @Getter @Setter
    private String dni;
    @Getter @Setter
    private Date fechaIngreso;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "domicilio_id")
    @Getter @Setter
    private Domicilio domicilio;

    public Paciente() {
    }

    public Paciente(String nombre, String apellido, String dni, Date fechaIngreso, Domicilio domicilio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaIngreso = fechaIngreso;
        this.domicilio = domicilio;
    }

    @Override
    public String toString() {
        return "Paciente{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                ", dni='" + dni + '\'' +
                ", fechaIngreso=" + fechaIngreso +
                ", domicilio=" + domicilio +
                '}';
    }

}
