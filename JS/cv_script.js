//Función que se ejecuta en móviles para convertir el navegador en uno más pequeño

function openNav() {
    document.getElementById("mobile-menu").style.width= "100%";
}
function closeNav() {
    document.getElementById("mobile-menu").style.width= "0%";
}

//Ocultando sección de formulario mediante un validación

const form_sent= document.getElementById("form-sent")
const form_field= document.getElementById("form-field")
const form_tittle= document.getElementById("form-tittle")

function Validacion (){
    let FormValido;

    const nombre= document.getElementById("name").value;
    const email= document.getElementById("email").value;
    const ciudad= document.getElementById("cities").value;
    const motivo= document.getElementById("motive").value;

    if (nombre=='' || email=='' || ciudad=='' || motivo=='') {
        FormValido== false;
        alert("Los campos deben ser llenados")
    }else{
        FormValido== true;
        event.preventDefault();
        form_field.style.display="none";
        form_tittle.style.display="none";
        form_sent.style.display="flex"
    }

    return FormValido;
}
