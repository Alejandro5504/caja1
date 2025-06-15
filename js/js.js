 const ANCHO = document.getElementById("ancho");
 const LARGO = document.getElementById("largo");
 const ALTO = document.getElementById("alto");

 function almacenar() {

     const caja = {

         ancho: parseFloat(ANCHO.value),
         largo: parseFloat(LARGO.value),
         alto: parseFloat(ALTO.value),

     
        }
     
        let volumenCalculado = obtenerVolumen(caja);

        document.getElementById('resultado').innerHTML =  volumenCalculado.toFixed(2);

 } 

 function obtenerVolumen(medidas) {

let volumen = medidas.ancho * medidas.largo * medidas.alto;
return volumen;

 }