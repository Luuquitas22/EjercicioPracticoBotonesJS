window.onload = inicio;
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const especializado = document.getElementById("Especializado");


function inicio(){
    boton1.addEventListener("click", () => {
       especializado.innerHTML = "Hola Mundo";
    })
    boton2.addEventListener("click", () => {
        especializado.innerHTML = "<img src='/Logo NPM.png' >";
    })
    boton3.addEventListener("click", () => {
        especializado.innerHTML += "<button>Boton</button>";
    })
    boton4.addEventListener("click", () => {
        especializado.innerHTML = "";
    })
}