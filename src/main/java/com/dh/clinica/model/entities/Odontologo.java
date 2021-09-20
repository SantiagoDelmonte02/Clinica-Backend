package com.dh.clinica.model.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
public class Odontologo {

    @Id
    @SequenceGenerator(name = "odontologo_sequence", sequenceName = "odontologo_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "odontologo_sequence")
    @Getter
    private Integer id;
    @Getter @Setter
    private String nombre;
    @Getter @Setter
    private String apellido;
    @Getter @Setter
    private Integer matricula;

    public Odontologo() {
    }

    public Odontologo(String nombre, String apellido, Integer matricula) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
    }

    @Override
    public String toString() {
        return "Odontologo: Id: "+ id + " matricula = " + matricula + ", nombre = " + nombre  + ", apellido = " + apellido;
    }

}
