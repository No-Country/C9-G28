package com.nocountry.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="usuarios")
public class Usuario implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Debes especificar el username")
    @Email(message = "Debes especificar correctamente el email")
    @NotBlank(message = "Este campo no puede estar vacio")
    private String username;

    @NotNull(message = "Debes especificar el password")
    @NotBlank(message = "Este campo no puede estar vacio")
    private String password;

    @NotNull(message = "Debes especificar el nombre")
    @NotBlank(message = "Este campo no puede estar vacio")
    private String nombre;

    @NotNull(message = "Debes especificar el apellido")
    @NotBlank(message = "Este campo no puede estar vacio")
    private String apellido;

    @NotNull(message = "Debes especificar el telefono")
    @NotBlank(message = "Este campo no puede estar vacio")
    private String telefono;

    private boolean activo=true;
    @NotNull(message = "Debes especificar el email")
    @Email(message = "Debes especificar correctamente el email")
    @NotBlank(message = "Este campo no puede estar vacio")
    private String email;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "usuario")
    @JsonIgnore
    private Set<UsuarioRol> usuarioRols=new HashSet<>();

    //nueva relacion usuario turnos
    @JsonIgnore
    @OneToMany(mappedBy = "usuario",fetch = FetchType.LAZY, orphanRemoval = true, cascade = {CascadeType.REMOVE, CascadeType.MERGE})
    private Set<Turno> turnos=new HashSet<>();


    @Override
    public String toString() {
        return "Registro exitoso: " +'.'+ '\n' +
                "NOMBRE: " + nombre +'.'+ '\n' +
                "MAIL: " + email +'.'+ '\n' +
                "Ante cualquier consulta puedes escribir a este correo."
                ;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Set<Authority> autoridades = new HashSet<>();
        this.usuarioRols.forEach(usuarioRol -> {
            autoridades.add(new Authority(usuarioRol.getRol().getRolNombre()));
        });
        return autoridades;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
