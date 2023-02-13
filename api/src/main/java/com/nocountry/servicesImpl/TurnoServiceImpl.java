package com.nocountry.servicesImpl;

import com.nocountry.models.Turno;
import com.nocountry.repository.TurnoRepository;
import com.nocountry.services.TurnoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TurnoServiceImpl implements TurnoService {

    private  final TurnoRepository repository;

    public TurnoServiceImpl(TurnoRepository repository) {
        this.repository = repository;
    }

    @Override
    public Turno saveTurno(Turno turno) {
        return repository.save(turno);
    }

    @Override
    public void deleteTurno(Long turnoId) {
    repository.deleteById(turnoId);
    }

    @Override
    public List<Turno> getAllTurnos() {
        return repository.findAll();
    }

    @Override
    public ResponseEntity<Turno> updateTurno(Turno turno) {
        Turno turn= repository.save(turno);
        return new ResponseEntity<Turno>(turn, HttpStatus.OK);
    }

    @Override
    public Optional<Turno> searchById(Long id) {
        Optional<Turno> turno = repository.findById(id);
        if (!turno.isPresent()) {
            String mensaje= "El turno cod id= "+ id.toString()+" no existe (searchById)";
            System.out.println(mensaje);
        }
        return turno;
    }
}
//primero debo crear paciente - medico - turno