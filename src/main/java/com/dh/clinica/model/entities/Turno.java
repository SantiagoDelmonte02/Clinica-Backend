package com.dh.clinica.model.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
public class Turno {

    @Id
    @SequenceGenerator(name = "turno_sequence", sequenceName = "turno_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "turno_sequence")
    @Getter
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "paciente_id")
    @Getter @Setter
    private Paciente paciente;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "odontologo_id")
    @Getter @Setter
    private Odontologo odontologo;
    @Getter @Setter
    private Date fechaTurno;

    public Turno() {
    }

    public Turno(Paciente paciente, Odontologo odontologo, Date fechaTurno) {
        this.paciente = paciente;
        this.odontologo = odontologo;
        this.fechaTurno = fechaTurno;
    }

    @Override
    public String toString() {
        return "Turno{" +
                "id=" + id +
                ", paciente=" + paciente +
                ", odontologo=" + odontologo +
                ", fecha=" + fechaTurno +
                '}';
    }
}

