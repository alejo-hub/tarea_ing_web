function Validar(){
    var formulario = document.form;
    var mensaje = document.getElementById("mensaje");
    var message = "";
    if(formulario.nombre.value == ""){
        message+="Nombre no Valido <br>"
    }
    if(formulario.apellido.value == ""){
        message+="Apellido no Valido <br>";
    }
    if(formulario.direccion.value == ""){
        message+="Direccion no Valido <br>";
    }
    if(formulario.telefono.value == ""){
        message+="Telefono no Valido <br>";
    }
    if(formulario.email.value == ""){
        message+="Email no Valido <br>";
    }
    
    mensaje.innerHTML = message;
}

function Respuesta(){
    var formulario = document.form;
    var num = 0;
    if(formulario.a1.checked){
        num++;
    }
    if(formulario.a2.checked){
        num++;
    }
    if(formulario.c3.checked){
        num++;
    }
    if(formulario.b4.checked){
        num++;
    }
    alert("Respuestas correctas: " + num)
}

function verificarNumero(){
    var numero = document.getElementById("numero");
    if(numero.value == ""){
        alert("Escribe un número");
    }
    else{
        if(!isNaN(numero.value)){ 
            alert(numero.value.length);
        }else{
            alert("Ups esto No es un numero");
        } 
    }
}

function redireccionar(){
    var formulario = document.form;
    var url;

    
    if(formulario.yahoo.checked){
        url = "http://www.yahoo.com";
    }
    if(formulario.soundcloud.checked){
        url = "https://soundcloud.com/discover";
    }
    if(formulario.google.checked){
        url = "http://www.google.com";
    }
    if(formulario.facebook.checked){
        url = "https://www.facebook.com/";
    }
    
    
    window.location.href = url;
}