package com.nocountry.servicesImpl;

import com.nocountry.excepciones.RegistroFoundException;
import com.nocountry.models.Medico;
import com.nocountry.models.Turno;
import com.nocountry.models.Usuario;
import com.nocountry.repository.MedicoRepository;
import com.nocountry.services.MedicoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicoServiceImpl implements MedicoService {

    private final MedicoRepository repository;

    public MedicoServiceImpl(MedicoRepository repository) {
        this.repository = repository;
    }

    @Override
    public Medico saveMedico(Medico medico) throws Exception {

        Medico medicLocal= repository.findByNombreAndApellido(medico.getNombre(), medico.getApellido());
        if(medicLocal != null){
            System.out.println("El medico ya existe");
            throw new RegistroFoundException();
        }
        else {

            medicLocal=repository.save(medico);
        }

        return medicLocal;
    }


    @Override
    public void deleteMedico(Long medicoId) {
        repository.deleteById(medicoId);
    }

    @Override
    public List<Medico> getAllMedicos() {
        return repository.findAll();
    }

    @Override
    public Medico getMedicoEsp(String especialidad) {
        return repository.findByEspecialidad(especialidad);
    }

    @Override
    public Medico getMedicoApellido(String apellido) {
        return repository.findByApellido(apellido);
    }

    @Override
    public ResponseEntity<Medico> updateMedico(Medico medico) {
        Medico med = repository.save(medico);
        return new ResponseEntity<Medico>(med, HttpStatus.OK);

    }

    @Override
    public Optional<Medico> searchById(Long id) {
        Optional<Medico> medico = repository.findById(id);
        if (!medico.isPresent()) {
            String mensaje= "El medico cod id= "+ id.toString()+" no existe (searchById)";
            System.out.println(mensaje);
        }
        return medico;
    }
}
