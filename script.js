var cantidad = "";
var num = "";
var π = 3.141592653589793;


function mostrar(numero){
    document.getElementById("display").value = cantidad + numero
    cantidad = document.getElementById("display").value


}
function igual(){ 
    document.getElementById("display").value = math.evaluate(cantidad) 
}

function pi(){
    document.getElementById("display").value = math.evaluate(cantidad + π);
}


function borrar(){
    document.getElementById("display").value = (cantidad = num);
}








