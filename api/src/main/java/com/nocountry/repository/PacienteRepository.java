package com.nocountry.repository;

import com.nocountry.models.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PacienteRepository extends JpaRepository<Paciente,Long> {

    public Paciente findByApellido(String apellido);
}
