package com.nocountry.services;


import com.nocountry.models.Medico;
import com.nocountry.models.Usuario;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface MedicoService {

    public Medico saveMedico(Medico medico) throws Exception;

   public void deleteMedico(Long medicoId);

    public List<Medico> getAllMedicos();

    public Medico getMedicoEsp(String especialidad);

    public Medico getMedicoApellido(String apellido);

    public ResponseEntity<Medico> updateMedico (Medico medico );

    public Optional<Medico> searchById(Long id);
}
