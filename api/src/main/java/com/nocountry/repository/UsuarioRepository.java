package com.nocountry.repository;


import com.nocountry.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {

        public Usuario findByUsername(String username);

}
