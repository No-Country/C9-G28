export function validateEmail(input){

   
  
  let errors = {};
  const emailExp =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (input.hasOwnProperty("email")) {
      if (input.email.length === 0) errors.email = "El campo Email es obligatorio";
      else if (emailExp.test(input.email) === false) {
      errors.email = "Debe escribir un Email válido";
      } 
  }
  

 

  return errors;

}

export function validatePassword(input){

   
  
    let errors = {};
    const passwordExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
    
    if (input.hasOwnProperty("password")) {
        if (input.password.length === 0) errors.password = "El campo contraseña es obligatorio";
        else if (passwordExp.test(input.password) === false) {
            errors.password = "La contraseña debe tener mínimo 8 caracteres, minúsculas, al menos una mayúscula, números, al menos un símbolo ($-@-!-%-*-?-&) y no puede tener espacios en blanco";
        }
        
        
    }
  
   
  
    return errors;
  
  }