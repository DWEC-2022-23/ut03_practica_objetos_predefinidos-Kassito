const body = document.getElementsByTagName("body")[0];

body.onmousemove = function (event){
    document.getElementById("accion").classList.remove("teclado", "click");
    document.getElementById("accion").classList.add("mover");
    var clientx = event.clientX;
    var clienty = event.clientY;
    var pagex = event.pageX;
    var pagey = event.pageY;
    var screenx = event.screenX;
    var screeny = event.screenY;
    document.getElementById("titulo").innerHTML = "RATÓN";
    document.getElementById("texto").innerHTML = "Navegador: [" +  clientx + ", " + clienty + "]<br> Página: [" + pagex + ", " + pagey + "]<br> Pantalla: [" + screenx + ", " + screeny + "]";
    document.getElementById("descripcion").innerHTML = "Se mueve el ratón";
}

body.onclick = function (event){
    document.getElementById("accion").classList.remove("teclado", "mover");
    document.getElementById("accion").classList.add("click");
    var clientx = event.clientX;
    var clienty = event.clientY;
    var pagex = event.pageX;
    var pagey = event.pageY;
    var screenx = event.screenX;
    var screeny = event.screenY;
    document.getElementById("titulo").innerHTML = "RATÓN";
    document.getElementById("texto").innerHTML = "Navegador: [" +  clientx + ", " + clienty + "]<br> Página: [" + pagex + ", " + pagey + "]<br> Pantalla: [" + screenx + ", " + screeny + "]";
    document.getElementById("descripcion").innerHTML = "Se hace click con el ratón";
}

body.onkeydown= function(event){
    document.getElementById("accion").classList.remove("mover", "click");
    document.getElementById("accion").classList.add("teclado");
    var x = event.keyCode;
    var y = event.key;
    document.getElementById("titulo").innerHTML = "TECLADO";
    document.getElementById("texto").innerHTML = "Caracter: [" +  y + "]<br> Codigo: [" + x +"]";
    document.getElementById("descripcion").innerHTML = "Se pulsa una tecla";
}
