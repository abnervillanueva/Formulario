function validar() {
    var result_val_email = validar_email();
    var result_val_clave = validar_claves();
    var result_val_direcc = validar_direcc();
    var result_val_comun = validar_comuna()
    var result_val_postal = validar_postal();
    var result_val_telefono = telefono() 
    var result_val_check = comprobar_Checks();
   
    return (result_val_email && result_val_clave && result_val_direcc && result_val_comun && result_val_postal && result_val_telefono && result_val_check );
}

//-----------------------------------------------------------------------------

function validar_fto_email(email) {
    var idx_arroba = email.indexOf("@");
    if (idx_arroba < 1) {
        return false;
    } else {
        var idx_punto = email.indexOf(".");
        if(idx_punto <= idx_arroba + 2 || idx_punto == email.length - 1) {
            return false;
        }        
        return true;
    }
}

function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("msj-email");
    if (email != "") {
        if (validar_fto_email(email)) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "El formato del email no es valido";
            div.className = "text-danger";
            return false;
        }
    } else {
        div.innerHTML = "El email no puede estar en blanco";
        div.className = "text-danger";
        return false;
    }
}

//-----------------------------------------------------------------------------

function validar_claves() {
    var val_clave1 = document.getElementById("passw").value;
    var val_clave2 = document.getElementById("repassword").value;
    var div1 = document.getElementById("msj-passw");
    var div2 = document.getElementById("msj-repassword")
        if(val_clave1.length > 2 && val_clave1.length < 7){
            if(val_clave2 != ""){
                if(val_clave2.length > 2 && val_clave2.length < 7){
                    if(val_clave1 == val_clave2){
                        div1.innerHTML = "";
                        return true;
                    } else{
                        div1.innerHTML = "Las contraseñas deben ser iguales";
                        div1.className = "text-danger";
                        return false;
                    }
                } else{
                    return false;
                }
            }else{
                div2.innerHTML = "Debe validar su contraseña";
                div2.className = "text-danger"
                return false;
            }
        } else{
            div1.innerHTML = "La contraseña debe ser mínimo 3 y máximo 7 caracteres";
            div1.className = "text-danger";
            return false;
        }  
}

//-----------------------------------------------------------------------------

function validar_fto_postal() {
    var f_postal = document.getElementById("postal").value;
    if (isNaN(f_postal)) {
        return false;
    }else{
        return true;
    }
}

function validar_postal() {
    var postal = document.getElementById("postal").value;
    var div = document.getElementById("msj-postal");
    if (postal != "") {

        if (validar_fto_postal(postal)) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "El formato postal no es valido";
            div.className = "text-danger";
            return false;
        }
    } else {
        div.innerHTML = "No puede quedar en blanco este campo";
        div.className = "text-danger";
        return false;
    }
}

//-----------------------------------------------------------------------------

function validar_direcc() {
    var direcc = document.getElementById("address").value;
    var div = document.getElementById("msj-address");
    if  (direcc.length != "") {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "La dirección no puede quedar en blanco";
        div.className = "text-danger";
        return false;
    }
}

//-----------------------------------------------------------------------------

function validar_comuna() {
    var comuna = document.getElementById("comuna").value;
    var div = document.getElementById("msj-comuna");
    if(comuna == "" || comuna == 0){
        div.innerHTML = "No se ha seleccionado una comuna";
        div.className = "text-danger";
        return true;
    } else {
        div.innerHTML = "";
        return false;
    }
}

//-----------------------------------------------------------------------------

function fto_movil() {
    var f_movil = document.getElementById("phone-cell").value;
    if (isNaN(f_movil)) {
        return false;
    }else{
        return true;
    }
}

function fto_fijo() {
    var f_fijo = document.getElementById("phone-fijo").value;
    if (isNaN(f_fijo)) {
        return false;
    }else{
        return true;
    }
}

function telefono() {
    var movil = document.getElementById("phone-cell").value;
    var fijo = document.getElementById("phone-fijo").value;
    var div = document.getElementById("msj-cell");
    if (movil == "" &&  fijo ==""){
        div.innerHTML = "Debe ingresar ingresar al menos un número de contacto";
        div.className= "text-danger";
        return false;  
    }else{
        if ((fto_movil()) && (fto_fijo())) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "El formato del telefono no es valido";
            div.className = "text-danger";
            return false;
        }
    }
}

//-----------------------------------------------------------------------------
        
function comprobar_Checks() {
    var checkbox = document.getElementsByName("check");
    var div = document.getElementById("msj-check");
    var contador = 0;
    for(var i=1; i< checkbox.length; i++) {
        if(checkbox[i].checked)
            contador++
    }
    if(contador == 0){
        div.innerHTML = "Seleccione al menos 2";
        div.className = "text-danger";
        return false;
    }
}










//+++++++++++++++++
