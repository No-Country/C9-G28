package com.nocountry.services;


import com.nocountry.models.Usuario;
import com.nocountry.models.UsuarioRol;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface UsuarioService {

    public Usuario saveUsuario(Usuario usuario, Set<UsuarioRol>usuarioRols)throws Exception;
    public Usuario getUsuario(String usuario);
    public void deleteUsuario(Long usuarioId);
    public Optional<Usuario> searchById(Long id);

    public List<Usuario> getAllUsuarios();

}
