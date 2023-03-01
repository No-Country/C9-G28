package com.nocountry.models;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="turnos")
public class Turno {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   // @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
   // @JoinColumn(name = "paciente_id", nullable = false)
   // private Paciente paciente;

    //nueva relacion
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    @JoinColumn(name = "usuario_id",nullable = false)
    private Usuario usuario;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    @JoinColumn(name = "medico_id", nullable = false)
    private Medico medico;

    @Column
     @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
   // @JsonFormat(pattern="yyyy-MM-dd")
    private Date fecha;
}