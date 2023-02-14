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
//Controller con los end point para pacientes
@RestController
@RequestMapping(value="/pacientes/")
@CrossOrigin("*")
public class PacienteController {

    private  final PacienteService pacienteService;

    public PacienteController(PacienteService pacienteService) {
        this.pacienteService = pacienteService;
    }

    //End point para obtener todos los pacientes GET= "/pacientes/"
    @GetMapping
    public List<Paciente> getAll(){
        return pacienteService.getAllPacientes();
    }


    //End point para actualizar  paciente PUT= "/pacientes/"
    @PutMapping
    public ResponseEntity<Paciente> update (@RequestBody Paciente paciente ){
        return pacienteService.update(paciente);
    }

    //End point para guardar pacientes POST= "/pacientes/"
    @PostMapping
    public Paciente guardar(@RequestBody Paciente paciente){
        return pacienteService.savePaciene(paciente);
    }

    //End point para obtener todos los paciente por apellido GET= "/pacientes/Lobos"
    @GetMapping("{apellido}")
    public Paciente obtenerPaciente(@PathVariable("apellido")String apellido){
        return pacienteService.getPaciene(apellido);
    }

    //End point para eliminar por id  los pacientes DELETE= "/pacientes/2"
    @DeleteMapping("{pacienteId}")
    public void eliminar(@PathVariable("pacienteId") Long pacienteId){
        pacienteService.deletePaciene(pacienteId);
    }



}
