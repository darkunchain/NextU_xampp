$(document).ready(function () {

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "notas.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let info = JSON.parse(this.responseText);

            $('#mostrar').on('click', (event) => {
                event.preventDefault();
                let datos = $("#datos");
                datos.html("");
                console.log('info: ', info)
                info.forEach(dato => {
                    datos.append(`
                <div hidden class="card horizontal" >
                    <div class="card-stacked brown lighten-4">
                        <div class="card-content brown lighten-4">                            
                            <div>
                                <b>Codigo: </b> <span id="cod${dato.id}"> ${dato.codigo}</span>
                                <p></p>
                            </div>
                            <div>
                                <b>Nombre: </b><span id="nom${dato.id}"></span>${dato.nombre}</span>
                                <p></p>
                            </div>
                            <div>
                                <b>Nota: </b><span id="not${dato.id}"></span>${dato.nota}</span>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>    
                    `);
                });
            });

            $('#calcularpromedio').on('click', (event) => {
                event.preventDefault();
                let promedio = $("#promedio");
                promedio.html("");
                var suma = 0
                info.forEach(dato => {
                    suma = Number(dato.nota) + suma;
                });
                var prom = suma / info.length
                console.log(prom)
                promedio.append(`
                    <div hidden class="card horizontal" >
                        <div class="card-stacked light-blue lighten-3">
                            <span><b>  El promedio de las notas es: </b></span>
                            <div class="card-content light-blue lighten-3">                            
                                <div>
                                    Promedio:  <span ><b> ${prom}</b></span>
                                    <p></p>
                                </div>                            
                            </div>
                        </div>
                    </div>`
                );
            })


            $('#mayornota').on('click', (event) => {
                event.preventDefault();
                let mayor = $("#mayor");
                mayor.html("");
                var max = 0
                var res = [{}]
                res.length = 0
                info.forEach(dato => {
                    if(Number(dato.nota) > max){
                        res = [{"codigo" : dato.codigo,
                        "nombre" : dato.nombre,
                        "nota" : dato.nota}]
                        max = Number(dato.nota)
                        console.log('if max')
                    }else if(Number(dato.nota) == max){
                        console.log('res igual', res)
                        res.push({"codigo":dato.codigo, "nombre":dato.nombre, "nota":dato.nota})
                        max = Number(dato.nota)
                        console.log('if max igual')
                    }else{
                        console.log('La nota es menor')
                    }                    
                });
                console.log('res', res,'res.length', res.length)
                res.forEach(dato => {               
                mayor.append(`
                    <div hidden class="card horizontal" >
                        <div class="card-stacked green lighten-2">
                            <span><b>  Estudiante con mayor nota: </b></span>
                            <div class="card-content green lighten-4">                            
                                <div>
                                    <b>Codigo: </b> <span > ${dato.codigo}</span>
                                    <p></p>
                                </div>
                                <div>
                                    <b>Promedio: </b> <span > ${dato.nombre}</span>
                                    <p></p>
                                </div>
                                <div>
                                    <b>Promedio: </b> <span > ${dato.nota}</span>
                                    <p></p>
                                </div>                            
                            </div>
                        </div>
                    </div>`
                );
                })
            })


            $('#menornota').on('click', (event) => {
                event.preventDefault();
                let menor= $("#menor");
                menor.html("");
                var min = 5
                var res = [{}]
                res.length = 0
                info.forEach(dato => {
                    if(Number(dato.nota) < min){
                        res = [{"codigo" : dato.codigo,
                        "nombre" : dato.nombre,
                        "nota" : dato.nota}]
                        min = Number(dato.nota)
                    }else if(Number(dato.nota) == min){
                        res.push({"codigo":dato.codigo, "nombre":dato.nombre, "nota":dato.nota})
                        min = Number(dato.nota)
                    }else{
                        console.log('La nota es mayor')
                    }                    
                });
                res.forEach(dato => {               
                menor.append(`
                    <div hidden class="card horizontal" >
                        <div class="card-stacked red lighten-2">
                            <span><b>  Estudiante con menor nota: </b></span>
                            <div class="card-content red lighten-4">                            
                                <div>
                                    <b>Codigo: </b> <span > ${dato.codigo}</span>
                                    <p></p>
                                </div>
                                <div>
                                    <b>Promedio: </b> <span > ${dato.nombre}</span>
                                    <p></p>
                                </div>
                                <div>
                                    <b>Promedio: </b> <span > ${dato.nota}</span>
                                    <p></p>
                                </div>                            
                            </div>
                        </div>
                    </div>`
                );
                })
            })

 



        }
    }
})