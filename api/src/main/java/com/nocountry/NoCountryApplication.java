package com.nocountry;


import com.nocountry.models.Rol;
import com.nocountry.models.Usuario;
import com.nocountry.models.UsuarioRol;
import com.nocountry.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashSet;
import java.util.Set;


@SpringBootApplication
public class NoCountryApplication implements CommandLineRunner {

	@Autowired
	private UsuarioService usuarioService;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(NoCountryApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		/*	Usuario usuario = new Usuario();
			usuario.setNombre("Alex");
			usuario.setApellido("Soto");
			usuario.setUsername("alex@gmail.com");
			usuario.setPassword(bCryptPasswordEncoder.encode("1234"));
			usuario.setEmail("alex@gmail.com");
			usuario.setTelefono("988212020");
			//usuario.setPerfil("foto.png");
			Rol rol = new Rol();
			rol.setRolId(1L);
			rol.setRolNombre("ADMIN");
			Set<UsuarioRol> usuariosRoles = new HashSet<>();
			UsuarioRol usuarioRol = new UsuarioRol();
			usuarioRol.setRol(rol);
			usuarioRol.setUsuario(usuario);
			usuariosRoles.add(usuarioRol);
			Usuario usuarioGuardado = usuarioService.saveUsuario(usuario, usuariosRoles);
			System.out.println(usuarioGuardado.getUsername());

	}*/

	}
}