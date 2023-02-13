package com.nocountry.controllers;

import com.nocountry.models.Rol;
import com.nocountry.models.Usuario;
import com.nocountry.models.UsuarioRol;
import com.nocountry.services.UsuarioService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping(value="/usuarios/")
public class UsuarioController {


    private final   UsuarioService usuarioService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UsuarioController(UsuarioService usuarioService, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.usuarioService = usuarioService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }


    @PostMapping
    public Usuario guardarUsuario(@RequestBody Usuario usuario) throws Exception{

        usuario.setPassword(this.bCryptPasswordEncoder.encode(usuario.getPassword()));

        Set<UsuarioRol> usuarioRoles = new HashSet<>();

        Rol rol = new Rol();
        rol.setRolId(2L);
        rol.setRolNombre("NORMAL");

        UsuarioRol usuarioRol = new UsuarioRol();
        usuarioRol.setUsuario(usuario);
        usuarioRol.setRol(rol);

        usuarioRoles.add(usuarioRol);

        return usuarioService.saveUsuario(usuario,usuarioRoles);
    }

    @GetMapping("username/{username}")
    public Usuario obtenerUsuario(@PathVariable("username") String username){
        return usuarioService.getUsuario(username);
    }

    @DeleteMapping("{usuarioId}")
    public void eliminarUsuario(@PathVariable("usuarioId") Long usuarioId){
        usuarioService.deleteUsuario(usuarioId);
    }

    @GetMapping("{id}")
    public Optional<Usuario> buscarById(@PathVariable Long id) throws EntityNotFoundException {
        return usuarioService.searchById(id);
    }

    @GetMapping
    public List<Usuario> getAll(){
        return usuarioService.getAllUsuarios();
    }


}
