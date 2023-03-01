package com.nocountry.servicesImpl;

import com.nocountry.excepciones.RegistroFoundException;
import com.nocountry.models.Clinica;
import com.nocountry.repository.ClinicaRepository;
import com.nocountry.services.ClinicaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClinicaServiceImpl implements ClinicaService {

    private  final ClinicaRepository repository;

    public ClinicaServiceImpl(ClinicaRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Clinica> getAllClinicas() {
        return repository.findAll();
    }

    @Override
    public Clinica saveClinica(Clinica clinica) throws Exception {

        Clinica clinicLocal= repository.findByNombre(clinica.getNombre());
        if(clinicLocal != null){
            System.out.println("La clinica ya existe");
            throw new RegistroFoundException();
        }
        else {

            clinicLocal=repository.save(clinica);
        }

        return clinicLocal;
    }


    @Override
    public Clinica getNombreClinica(String nombre) {
        return repository.findByNombre(nombre);
    }

    @Override
    public ResponseEntity<Clinica> updateClinica(Clinica clinica) {
        Clinica c = repository.save(clinica);
        return new ResponseEntity<Clinica>(c, HttpStatus.OK);
    }

    @Override
    public Optional<Clinica> buscarClinicaId(Long id) {
        Optional<Clinica> clinica = repository.findById(id);
        if(!clinica.isPresent()){
            String mensaje= "La clinica con id= "+ id.toString()+" no existe (searchById)";
            System.out.println(mensaje);
        }
        return clinica;
    }

    @Override
    public void deleteClinica(Long id) {
    repository.deleteById(id);
    }
}
