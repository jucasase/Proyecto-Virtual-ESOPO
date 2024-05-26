function ver_password() {
    var input_form = document.formulario_login.input_pass;
 
    if (document.formulario_login.input_ver.checked) {
        input_form.setAttribute("type", "text");
    }else {
        input_form.setAttribute("type", "password");
    }
}
