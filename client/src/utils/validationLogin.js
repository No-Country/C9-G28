export function validateEmail(input) {
  let errors = {};
  const emailExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (input.hasOwnProperty('email')) {
    if (input.email.length === 0)
      errors.email = 'El campo Email es obligatorio';
    else if (emailExp.test(input.email) === false) {
      errors.email = 'Debe escribir un Email válido';
    }
  }

  return errors;
}

export function validatePassword(input) {
  let errors = {};
  const passwordExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;

  if (input.hasOwnProperty('password')) {
    if (input.password.length === 0)
      errors.password = 'El campo contraseña es obligatorio';
    else if (passwordExp.test(input.password) === false) {
      errors.password =
        'La contraseña debe tener mínimo 8 caracteres, minúsculas, al menos una mayúscula, números, al menos un símbolo ($-@-!-%-*-?-&) y no puede tener espacios en blanco';
    }
  }

  return errors;
}

export function validateResetPassword (input){
  let errors = {};
    
  const passwordExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;

    if (input.hasOwnProperty("password1") || input.hasOwnPropinput("password2")) {
        
        if (input.password1.length === 0) errors.password1 = "El campo contraseña es obligatorio";
        else if (passwordExp.test(input.password1) === false) {
          errors.password1 =
            'La contraseña debe tener mínimo 8 caracteres, minúsculas, al menos una mayúscula, números, al menos un símbolo ($-@-!-%-*-?-&) y no puede tener espacios en blanco';
        }
        
        if (input.password2.length === 0) errors.password2 = "El campo contraseña es obligatorio";
        else if (passwordExp.test(input.password2) === false) {
          errors.password2 =
            'La contraseña debe tener mínimo 8 caracteres, minúsculas, al menos una mayúscula, números, al menos un símbolo ($-@-!-%-*-?-&) y no puede tener espacios en blanco';
        }

        if(input.password1 !== input.password2) errors.password2 = 'Las contraseñas no coinciden'
    }

    

    return errors;
}




export function validateText(input){

  let errors = {};
  const textExpt = /^[A-Z- ]+$/i;
  if(input.hasOwnProperty("nombre")  || input.hasOwnProperty("apellido") || input.hasOwnPropinput("telefono")){
    
    if (input.nombre.length === 0) {errors.nombre = "El campo nombre es obligatorio";}
    else if (textExpt.test(input.nombre) === false) errors.nombre = "El campo nombre debe ser solo de texto y no contener números ni símbolos";
    if (input.apellido.length === 0) errors.apellido = "El campo apellido es obligatorio";
    else if (textExpt.test(input.apellido) === false) errors.apellido = "El campo apellido debe ser ser solo de texto y no contener números ni símbolos";
    if (input.telefono.length === 0) errors.telefono = "El campo telefono es obligatorio";
    
    
    

  }



  return errors;
}