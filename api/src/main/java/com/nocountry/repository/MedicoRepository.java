package com.nocountry.repository;

import com.nocountry.models.Medico;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicoRepository extends JpaRepository<Medico,Long> {

    public Medico findByApellido(String apellido);

    public Medico findByEspecialidad(String especialidad);

    public  Medico findByNombreAndApellido (String nombre,String apellido);
}
