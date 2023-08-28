//Vamos agregar unas imagenes, mostrando lo que hace la Dra con sus terapias y cursos de coaching, a su vez vamos agregar un modo oscuro a la pagina, por si la gente ve dicha pagina de noche//

// Seleccionamos el elemento con el id "switch" y lo almacenamos en la variable switchButton.
const switchButton = document.getElementById("switch");

// LLamamos al botón de eventos para que cuando se hace clic en el botón, se ejecutará la función que está entre las llaves {}.
switchButton.addEventListener("click", () => {
    // Aca estamos cambiando una clase en el elemento del cuerpo del documento (osea la página).
    // La clase "modo-oscuro" controla los estilos en el modo oscuro.
    // Si la clase está presente, la elimina; si no está presente, la agrega.
    document.body.classList.toggle("modo-oscuro");

    // También estamos cambiando una clase en el propio botón. La clase "active" controla la apariencia del botón en el modo oscuro.
    // Si la clase está presente, la elimina; si no está presente, la agrega.
    switchButton.classList.toggle("active");
});

/*Vamos hacer que los diplomas de la DRA se puedan ver, para eso utilizamos estos comandos de js*/

// Este código controla la visualización de la imagen cuando se hace clic en la pequeña imagen de los diplomas. Capturamos el elemento con el id "expImgBox" y lo guardamos en la variable expImgBox.
const expImgBox = document.getElementById("expImgBox"),

// Creamos el elemento con el id "expImg" y lo guardamos en la variable expImg.
expImg = document.getElementById("expImg");

// Esta función se ejecuta cuando se hace clic en la imagen pequeña de los diplomas. Recibe la referencia de la imagen como parámetro.
function openexpImg(reference){
    // Tenemos que cambiar  el estilo de display del elemento expImgBox a "flex" para que se pueda ver la imagen expandida.
    expImgBox.style.display = "flex"

    // Cambiamos el atributo src del elemento expImg para mostrar la imagen que corresponde a la referencia recibida.
    expImg.src = reference
}

// Esta función se ejecuta cuando se desea cerrar la imagen expandida.
function closeImg(){
    // Cambiamos el estilo de display del elemento expImgBox a "none" para ocultar la imagen expandida.
    expImgBox.style.display = "none"
}