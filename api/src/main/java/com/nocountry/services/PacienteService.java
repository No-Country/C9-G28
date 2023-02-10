package com.nocountry.services;

import com.nocountry.models.Paciente;
import com.nocountry.models.Usuario;
import com.nocountry.models.UsuarioRol;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Set;

public interface PacienteService {

    public Paciente savePaciene(Paciente paciente);

    public Paciente getPaciene(String apellido);

    public void deletePaciene(Long pacienteId);

    public List<Paciente> getAllPacientes();

    public ResponseEntity<Paciente> update (Paciente paciente );
}
