package com.nocountry.controllers;

import com.nocountry.models.Clinica;
import com.nocountry.services.ClinicaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/clinica/")
@CrossOrigin("*")
public class ClinicaController {

    private final ClinicaService service;

    public ClinicaController(ClinicaService service) {
        this.service = service;
    }

    //End point para obtener todas las clinicas GET ="/clinica/"
    @GetMapping
    public List<Clinica>getAllClinicas(){
        return service.getAllClinicas();
    }

    //End point para actualizar  las clinicas PUT= "/clinica/"
    @PutMapping
    public ResponseEntity<Clinica> update(@RequestBody Clinica clinica ){
        return service.updateClinica(clinica);
    }

    //End point para crear clinica POST= "/clinica/"
    @PostMapping
    public Clinica guardar(@RequestBody Clinica clinica) throws Exception {
        return service.saveClinica(clinica);
    }

    //End point para actualizar  las clinicas PUT= "/clinica/nombre/Atuel"
    @GetMapping("nombre/{nombre}")
    public Clinica getClinicaNombre(@PathVariable("nombre")String nombre){
        return service.getNombreClinica(nombre);
    }

    // End point para eliminar clinica DELETE="/clinica/1"
    @DeleteMapping("{id}")
    public void eliminar(@PathVariable("id") Long id){
        service.deleteClinica(id);
    }

    @GetMapping("{id}")
    public Optional<Clinica> buscarById(@PathVariable Long id) throws EntityNotFoundException {
        return service.buscarClinicaId(id);
    }
}
