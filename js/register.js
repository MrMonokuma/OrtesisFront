$("#btnRegistrar").click(function(e){
    e.preventDefault();
    var documento=$("documento").val();
    var nombre=$("#n").val();
    var email=$("#email").val();
    var emailc=$("#emailc").val();
    var password=$("#pass").val();
    var passwordC=$("#passc").val();
    var telefono=$("#telefono").val();
    var direccion=$("#direccion").val();
    var check=$("#check1").prop("checked");
    var sexo=$("#sexo").val();
    var rol="rol";
    if (validarEmail(email)){
        if(email!==emailc){
            alert("Los correos no coinciden");
        }
        else {
            if (password!==passwordC){
                alert("Las contraseñas no coinciden");
            }else{
                if (!check){
                    alert("Debe aceptar las políticas de tratamiento de datos");
                }else{
                    var obj={
                        documento: documento,
                        n: nombre,
                        direccion: direccion,
                        email: email,
                        sexo: sexo,
                        contra: password,
                        rol: rol,
                        telefono: telefono
                    };
                    registrarUsuario(obj);
                }
            }
        } 
    }else{
        alert("Correo en formato incorrecto");
    }
    
});

$("#btnRegistrarAdmin").click(function(e){
    e.preventDefault();
    var documento=$("#id").val();
    var nombre=$("#n").val();
    var email=$("#email").val();
    var emailc=$("#emailc").val();
    var password=$("#pass").val();
    var passwordC=$("#passc").val();
    var telefono=$("#telefono").val();
    var direccion=$("#direccion").val();
    var sexo=$("#sexo").val();
    var permisos=$("#permisos").val();
    var rol="admin";
    if (validarEmail(email)){
        if(email!==emailc){
            alert("Los correos no coinciden");
        }
        else {
            if (password!==passwordC){
                alert("Las contraseñas no coinciden");
            }else{
                if (!check){
                    alert("Debe aceptar las políticas de tratamiento de datos");
                }else{
                    var obj={
                        documento: documento,
                        n: nombre,
                        email: email,
                        contra: password,
                        telefono: telefono,
                        direccion: direccion,
                        sexo: sexo,
                        permisos: permisos,
                        rol: rol
                    };
                    registrarAdmin(obj);
                }
            }
        } 
    }else{
        alert("Correo en formato incorrecto");
    }
    
});