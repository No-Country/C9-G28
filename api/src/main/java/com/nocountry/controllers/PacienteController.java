package com.nocountry.controllers;


import com.nocountry.models.Paciente;
import com.nocountry.models.Rol;
import com.nocountry.models.Usuario;
import com.nocountry.models.UsuarioRol;
import com.nocountry.services.PacienteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(value="/pacientes/")
@CrossOrigin("*")
public class PacienteController {

    private  final PacienteService pacienteService;

    public PacienteController(PacienteService pacienteService) {
        this.pacienteService = pacienteService;
    }

    @GetMapping
    public List<Paciente> getAll(){

        return pacienteService.getAllPacientes();
    }

    @PutMapping
    public ResponseEntity<Paciente> update (@RequestBody Paciente paciente ){
        return pacienteService.update(paciente);
    }


    @PostMapping
    public Paciente guardar(@RequestBody Paciente paciente){
        return pacienteService.savePaciene(paciente);
    }

    @GetMapping("{apellido}")
    public Paciente obtenerPaciente(@PathVariable("apellido")String apellido){
        return pacienteService.getPaciene(apellido);
    }

    @DeleteMapping("{pacienteId}")
    public void eliminar(@PathVariable("pacienteId") Long pacienteId){
        pacienteService.deletePaciene(pacienteId);
    }



}
