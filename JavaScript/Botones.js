const inReyes = document.getElementById("inReyes");
const botonReyes = document.getElementById("botonReyes");
const outReyes = document.getElementById("outReyes");

botonReyes.onclick = function (){
    let fec = inReyes.value.split("-");

    let fechaDada = new Date();
    fechaDada.setFullYear(fec[0]);
    fechaDada.setMonth(fec[1]-1);
    fechaDada.setDate(fec[2]);

    const fechaReyes = new Date();
 
    if(fec[2] <= 05 && fec[2] >= 01 && fec[1] == 01){
        fechaReyes.setFullYear(fec[0]);

    }else{
        let a = parseInt(fec[0]) + 1
        fechaReyes.setFullYear(a);

    }
    let b = (fechaDada.get)

    fechaReyes.setMonth(0);
    fechaReyes.setDate(7);
    fechaReyes.setHours(0,0,0);

    //Devuelve los milisegundos entre ambas
    tiempoHastaReyes = Math.floor((fechaReyes - fechaDada) / (24*60*60*1000));

    let result;

    if (tiempoHastaReyes == 0 || fec[1] == 1 && fec[2] ==6){
        result = "Today is the day. The Royal Kings are here."
    }else{
        result = "The day is coming, in " + tiempoHastaReyes + " days they will come."
    }

    alert(result);
    outReyes.innerHTML = result;
}


/*************** FECHA CON FORMATO ESTABLECIDO *****************************/
// <!-- Hoy es martes, 22 de septiembre de 2022 y son las 12:34 horas -->
const botonFecha = document.getElementById("botonFecha");
const outFecha = document.getElementById("outFecha");

botonFecha.onclick = function () {
    const fechaHoy = new Date();
    const diasSemana = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    let fechaFormateada = "";
    let hora = (fechaHoy.getHours()<10)? 0+fechaHoy.getHours() : fechaHoy.getHours();
    let minutos = (fechaHoy.getMinutes()<10)? 0+fechaHoy.getMinutes() : fechaHoy.getMinutes();


    fechaFormateada = "Hoy es " + diasSemana[fechaHoy.getDay()] + ", " + fechaHoy.getDate() + " de " + meses[fechaHoy.getMonth()] + " de " + fechaHoy.getFullYear() + " y son las " + hora + ":" + minutos + " horas.";

    alert(fechaFormateada);
    outFecha.innerHTML = fechaFormateada;
}

/*************** AREA Y PERIMETRO DEL CIRCULO *****************************/
const inRadio = document.getElementById("inRadio");
const botonRadio = document.getElementById("botonRadio");
const outRadio = document.getElementById("outRadio");

botonRadio.onclick = function () {
    let result = "";

    result = "Radio: " + inRadio.value + " \n Perimetro: " + perimetroCirculo(inRadio.value) + " \n Area: " + areaCirculo(inRadio.value);

    alert(result);
    outRadio.innerHTML = result;
}

function areaCirculo(radio) {
    return Math.round(Math.PI * radio * radio* 100 + Number.EPSILON) / 100;
};

function perimetroCirculo(radio) {
    return Math.round(Math.PI * 2 * radio* 100 + Number.EPSILON) / 100;
};

/*************** NUMERO ALEATORIO *****************************/
const inMin = document.getElementById("inRandomMin");
const inMax = document.getElementById("inRandomMax");
const botonRandom = document.getElementById("botonRandom");
const outRandom = document.getElementById("outRandom");

botonRandom.onclick = function () {
    let result;
    const min = parseInt(inMin.value);
    const max = parseInt(inMax.value);

    result = calculoRandom(min,max)

    alert(result);
    outRandom.innerHTML = result;
}

function calculoRandom(inMin, inMax) {
    if(inMin === inMax){
        return "Son iguales";
    }else{
        if(inMin < inMax){
            return  "The random number is: "+ Math.floor(Math.random()*(inMax - inMin + 1) + inMin);
        }else{
            return "The random number is: "+ Math.floor(Math.random()*(inMin - inMax + 1) + inMax);
        }
    }
};

/*************** JUGAR CON STRINGS *****************************/
const inStr = document.getElementById("inStr");
const botonStrMiddle = document.getElementById("botonStrMiddle");
const outStrMiddle = document.getElementById("outStrMiddle");
const botonStrLast = document.getElementById("botonStrLast");
const outStrLast = document.getElementById("outStrLast");
const botonStrInverse = document.getElementById("botonStrInverse");
const outStrInverse = document.getElementById("outStrInverse");
const botonStrSeparate = document.getElementById("botonStrSeparate");
const outStrSeparate = document.getElementById("outStrSeparate");
const botonStrVowels = document.getElementById("botonStrVowels");
const outStrVowels = document.getElementById("outStrVowels");

botonStrMiddle.onclick = function (){
    let result;
    const str = inStr.value;

    result = Math.floor(str.length)/2;

    alert (str.substring(0,result));
    outStrMiddle.innerHTML = str.substring(0,result);
}

botonStrLast.onclick = function (){
    const str = inStr.value;

    alert (str[str.length-1]);
    outStrLast.innerHTML = str[str.length-1];
}

botonStrInverse.onclick = function (){
    const str = inStr.value;

    alert (str.split("").reverse().join(""));
    outStrInverse.innerHTML = str.split("").reverse().join("");
}

botonStrSeparate.onclick = function (){
    const str = inStr.value;

    alert (str.split("").join("-"));
    outStrSeparate.innerHTML = str.split("").join("-");
}

botonStrVowels.onclick = function (){
    const str = inStr.value;

    alert (str.match(/[aeiou]/gi).length);
    outStrVowels.innerHTML = str.match(/[aeiou]/gi).length;
}

