package com.nocountry.controllers;


import com.nocountry.models.Medico;
import com.nocountry.models.Usuario;
import com.nocountry.services.MedicoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

//Controller que posee los end point relacionados a los medicos
@RestController
@RequestMapping("/medicos/")
@CrossOrigin("*")
public class MedicoController {

    private  final MedicoService service;

    public MedicoController(MedicoService service) {
        this.service = service;
    }

    //End point para obtener todos los medicos GET: "/medicos/"
    @GetMapping
    public List<Medico> getAll(){
        return service.getAllMedicos();
    }

    //End point para actualizar  medico PUT: "/medicos/"
    @PutMapping
    public ResponseEntity<Medico> update (@RequestBody Medico medico ){
        return service.updateMedico(medico);
    }

    //End point para guardar medico POST: "/medicos/"
    @PostMapping
    public Medico guardar(@RequestBody Medico medico) throws Exception {
        return service.saveMedico(medico);
    }

    //End point para obtener todos los medicos por apellido GET: "/medicos/apellido/Garcia"
    @GetMapping("apellido/{apellido}")
    public Medico obtenerMedicoApellido(@PathVariable("apellido")String apellido){
        return service.getMedicoApellido(apellido);
    }

    //End point para obtener todos los medicos por especialidad GET: "/medicos/apellido/Pediatra"
    @GetMapping("especialidad/{especialidad}")
    public Medico obtenerMedicoEsp(@PathVariable("especialidad")String especialidad){
        return service.getMedicoEsp(especialidad);
    }

    //End point para eliminar medico por id DELETE: "/medicos/1"
    @DeleteMapping("{medicoId}")
    public void eliminar(@PathVariable("medicoId") Long medicoId){
        service.deleteMedico(medicoId);
    }

    //End point para obtener medico por id GET: "/medicos/1"
    @GetMapping("{id}")
    public Optional<Medico> buscarById(@PathVariable Long id) throws EntityNotFoundException {
        return service.searchById(id);
    }


}
