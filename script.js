let usuario= document.getElementById("usuario");
let password=document.getElementById("password");
let error=document.getElementById("error");
error.style.color ="red";

function enviarFormulario() {
 console.log("Enviando formulario");
 
  let mensajesError= [];
  if (usuario.value === null || usuario.value === ''){
    mensajesError.push('Ingresa tu nombre');
  }
  if (password.value === null || password.value=== ''){
    mensajesError.push('Ingresa tu password ');
  }
  error.innerHTML= mensajesError.join(',');

  return false; }
  