boton1 = document.getElementById("enlace_1");
boton2 = document.getElementById("enlace_2");
boton3 = document.getElementById("enlace_3");
conten1 = document.getElementById("contenidos_1");
conten2 = document.getElementById("contenidos_2");
conten3 = document.getElementById("contenidos_3");


boton1.onclick = function (){
    muestraOculta(conten1, boton1);
};
boton2.onclick = function (){
    muestraOculta(conten2, boton2);
};
boton3.onclick = function (){
    muestraOculta(conten3, boton3);
};

function muestraOculta(contenido, boton) {
    if (contenido.style.visibility === "hidden") {
        contenido.style.visibility = "visible";
        boton.innerHTML = "Ocultar contenidos";
    } else {
        contenido.style.visibility = "hidden";
        boton.innerHTML = "Mostrar contenidos";
    }
}
