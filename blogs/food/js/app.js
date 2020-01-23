var buscar = document.getElementsByClassName('tituloarticulo');
var fecha = document.getElementsByClassName('fecha');
console.log('buscar1: ',buscar.length,'  fecha1: ', fecha.length) 
var i;
for (i = 0; i < buscar.length; i++) { 
  console.log('buscar2: ',buscar[i].innerHTML,'  fecha2: ', fecha[i].innerHTML)  
  var list = "lista"+i
  var fech = "fecha"+i  
  document.getElementById(list).innerHTML = buscar[i].innerHTML
  document.getElementById(fech).innerHTML = fecha[i].innerHTML
}
