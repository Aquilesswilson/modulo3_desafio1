const precio = 20000000

function obtenerCantidadActual() {
    var cantidad = document.querySelector(".cantidad");
    var valorCantidad = cantidad.textContent;
    // console.log(cantidad);
    return parseInt(valorCantidad,10);

}

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;


const btnmas = document.querySelector('#mas')
const btnmenos = document.querySelector('#menos')

function agregarCantidad() {
    //Traer cantidad actual
    cantidadActual = obtenerCantidadActual();
    // console.log('Cantidad previo a suma: '+cantidadActual);
    cantidadActual++;
    // console.log('Cantidad sumada: '+cantidadActual);

    //Cambiar valor de span class = cantidad
    cantidadSpan = document.querySelector(".cantidad");
    cantidadSpan.innerHTML = cantidadActual;   
    
    var totalPagar = calcularPrecio(cantidadActual, precio);
    valorTotalSpan = document.querySelector(".valor-total");
    valorTotalSpan.innerHTML = totalPagar;


}
function disminuirCantidad() {
    //Traer cantidad actual
    cantidadActual = obtenerCantidadActual();
    // console.log('Cantidad previo a suma: '+cantidadActual);


    if(cantidadActual>0){
        cantidadActual--;
    }else{
        alert('Cantidad no puede ser menor a 0');
    }

    // console.log('Cantidad sumada: '+cantidadActual);

    //Cambiar valor de span class = cantidad
    cantidadSpan = document.querySelector(".cantidad");
    cantidadSpan.innerHTML = cantidadActual;   

    var totalPagar = calcularPrecio(cantidadActual, precio);
    valorTotalSpan = document.querySelector(".valor-total");
    valorTotalSpan.innerHTML = totalPagar;

}


function calcularPrecio(cantidad, precioBase){
    return cantidad * precioBase;
}

// btnmas.addEventListener('click', agregarCantidad() {
// CTRL + K + C = Comando para comentar
// }
// )

// btnmenos.addEventListener('click', disminuirCantidad() {
// }
// )