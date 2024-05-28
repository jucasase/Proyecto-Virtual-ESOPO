// Cambiar el icono persona por un icono con la inicial del nombre del registro
document.getElementById('nombre').addEventListener("input", () => {
  var nombre = document.getElementById("nombre").value;
  var primerLetra = nombre.charAt(0).toUpperCase();
  var icono_persona = document.getElementById('icono');
  
  if (nombre.length > 0) {
    icono_persona.className = "bi bi-person-circle text-white";
  } else {
    icono_persona.className = "bi bi-primerLetra text-white";
  }
});
//Por ahora, el codigo anterior no funciona



//Funcion para ver el password en el modal del login
function ver_password() {
  var input_form = document.formulario_login.input_pass;

  if (document.formulario_login.input_ver.checked) {
      input_form.setAttribute("type", "text");
  }else {
      input_form.setAttribute("type", "password");
  }
}
