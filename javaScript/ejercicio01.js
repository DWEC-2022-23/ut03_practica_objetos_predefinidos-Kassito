numeroDiv = document.getElementById("numero");

numeroDiv.ondblclick = function (){
    numeroDiv.innerHTML *= 3;
}

numeroDiv.onmouseover = function() {
    numeroDiv.style.color = "red";
};
numeroDiv.onmouseout = function() {
    numeroDiv.style.color = "black";
};
