package com.nocountry.servicesImpl;

import com.nocountry.excepciones.RegistroFoundException;
import com.nocountry.models.Usuario;
import com.nocountry.models.UsuarioRol;
import com.nocountry.repository.RolRepository;
import com.nocountry.repository.UsuarioRepository;
import com.nocountry.services.UsuarioService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final RolRepository rolRepository;

    public UsuarioServiceImpl(UsuarioRepository usuarioRepository, RolRepository repository, RolRepository rolRepository) {
        this.usuarioRepository = usuarioRepository;

        this.rolRepository = rolRepository;
    }

    @Override
    public Usuario saveUsuario(Usuario usuario, Set<UsuarioRol> usuarioRols) throws Exception {

        Usuario usuarioLocal= usuarioRepository.findByUsername(usuario.getUsername());
        if(usuarioLocal != null){
            System.out.println("El usuario ya existe");
            throw new RegistroFoundException();
        }
        else {
            for(UsuarioRol usuarioRol : usuarioRols){
                rolRepository.save(usuarioRol.getRol());
            }
            usuario.getUsuarioRols().addAll(usuarioRols);
            usuarioLocal=usuarioRepository.save(usuario);
        }

        return usuarioLocal;
    }

    @Override
    public Usuario getUsuario(String usuario) {
        return usuarioRepository.findByUsername(usuario);
    }

    @Override
    public void deleteUsuario(Long usuarioId) {
        usuarioRepository.deleteById(usuarioId);
    }

    @Override
    public Optional<Usuario> searchById(Long id) {
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        if (!usuario.isPresent()) {
            String mensaje= "El usuario cod id= "+ id.toString()+" no existe (searchById)";
            System.out.println(mensaje);
        }
        return usuario;
    }

    @Override
    public List<Usuario> getAllUsuarios() {
            return usuarioRepository.findAll();
        }
    }

