package com.nocountry.services;


import com.nocountry.models.Turno;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface TurnoService {

    public Turno saveTurno(Turno turno) throws Exception;

    public void deleteTurno(Long turnoId);

    public List<Turno> getAllTurnos();

    public ResponseEntity<Turno> updateTurno (Turno turno );

    public Optional<Turno> searchById(Long id);


}
