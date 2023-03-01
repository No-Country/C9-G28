package com.nocountry.controllers;


import com.nocountry.models.Turno;
import com.nocountry.services.TurnoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

//Controller posee los end point para turnos
@RestController
@RequestMapping("/turnos/")
@CrossOrigin("*")
public class TurnoController {

    private final TurnoService service;

    public TurnoController(TurnoService service) {
        this.service = service;
    }

    ////End point para obtener todos los turnos GET= "/turnos/"
    @GetMapping
    public List<Turno> getAll(){
        return service.getAllTurnos();
    }


    ////End point para actualizar todos los turnos PUT= "/turnos/"
    @PutMapping
    public ResponseEntity<Turno> update (@RequestBody Turno turno ){
        return service.updateTurno(turno);
    }


    ////End point para guardar  turnos POST= "/turnos/"
    @PostMapping
    public Turno guardar(@RequestBody Turno turno) throws Exception {
        return service.saveTurno(turno);
    }


    ////End point para eliminar por id todos los turnos DELETE= "/turnos/3"
    @DeleteMapping("{turnoId}")
    public void eliminar(@PathVariable("turnoId") Long turnoId){
        service.deleteTurno(turnoId);
    }


    ////End point para obtener  POR ID todos los turnos GET= "/turnos/3"
    @GetMapping("{id}")
    public Optional<Turno> turnoById(@PathVariable Long id) throws EntityNotFoundException {
        return service.searchById(id);
    }

}
