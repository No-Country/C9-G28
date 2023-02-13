package com.nocountry.controllers;


import com.nocountry.models.Medico;
import com.nocountry.models.Usuario;
import com.nocountry.services.MedicoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/medicos/")
@CrossOrigin("*")
public class MedicoController {

    private  final MedicoService service;

    public MedicoController(MedicoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Medico> getAll(){
        return service.getAllMedicos();
    }

    @PutMapping
    public ResponseEntity<Medico> update (@RequestBody Medico medico ){
        return service.updateMedico(medico);
    }


    @PostMapping
    public Medico guardar(@RequestBody Medico medico){
        return service.saveMedico(medico);
    }

    @GetMapping("apellido/{apellido}")
    public Medico obtenerMedicoApellido(@PathVariable("apellido")String apellido){
        return service.getMedicoApellido(apellido);
    }

    @GetMapping("especialidad/{especialidad}")
    public Medico obtenerMedicoEsp(@PathVariable("especialidad")String especialidad){
        return service.getMedicoEsp(especialidad);
    }

    @DeleteMapping("{medicoId}")
    public void eliminar(@PathVariable("medicoId") Long medicoId){
        service.deleteMedico(medicoId);
    }

    @GetMapping("{id}")
    public Optional<Medico> buscarById(@PathVariable Long id) throws EntityNotFoundException {
        return service.searchById(id);
    }


}
