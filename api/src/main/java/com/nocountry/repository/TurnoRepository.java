package com.nocountry.repository;

import com.nocountry.models.Turno;
import com.nocountry.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;

public interface TurnoRepository extends JpaRepository<Turno,Long> {


        Turno findByFecha(Date turno);
}
