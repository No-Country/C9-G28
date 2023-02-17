package com.nocountry.services;

import com.nocountry.models.Clinica;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface ClinicaService {

    public List<Clinica> getAllClinicas();

    public Clinica saveClinica(Clinica clinica) throws Exception;

    public Clinica getNombreClinica(String nombre);

    public ResponseEntity<Clinica> updateClinica (Clinica clinica);

    public Optional<Clinica> buscarClinicaId(Long id);

    public void deleteClinica(Long id);
}
