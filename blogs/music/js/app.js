

var buscar = document.getElementsByClassName('tituloarticulo');
var fecha = document.getElementsByClassName('fecha');
var i;
for (i = 0; i < buscar.length; i++) { 
  var list = "lista"+i
  var fech = "fecha"+i  
  document.getElementById(list).innerHTML = buscar[i].innerHTML
  document.getElementById(fech).innerHTML = fecha[i].innerHTML 
}
