package com.nocountry.servicesImpl;

import com.nocountry.models.Paciente;
import com.nocountry.repository.PacienteRepository;
import com.nocountry.services.PacienteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PacienteServiceImpl implements PacienteService {

    private final PacienteRepository pacienteRepository;

    public PacienteServiceImpl(PacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    @Override
    public Paciente savePaciene(Paciente paciente) {
        return pacienteRepository.save(paciente);
    }

    @Override
    public Paciente getPaciene(String apellido) {
        return pacienteRepository.findByApellido(apellido);
    }

    @Override
    public void deletePaciene(Long pacienteId) {
        pacienteRepository.deleteById(pacienteId);
    }

    @Override
    public List<Paciente> getAllPacientes() {
        return pacienteRepository.findAll();
    }

    @Override
    public ResponseEntity<Paciente> update(Paciente paciente) {
        Paciente obj = pacienteRepository.save(paciente);
        return new ResponseEntity<Paciente>(obj, HttpStatus.OK);
    }
}
