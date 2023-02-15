package com.nocountry.repository;

import com.nocountry.models.Clinica;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClinicaRepository extends JpaRepository<Clinica,Long> {

    public Clinica findByNombre(String nombre);
}
