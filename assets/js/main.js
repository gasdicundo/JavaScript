
let carrito = [] ;
let productos =new Array () ;

let gestor ;

const key_carrito = "carrito";

document.addEventListener("DOMContentLoaded",()=>{

    carrito = JSON.parse(localStorage.getItem(key_carrito)) || [] ;

    gestor = new GestionarProductos() ;
    gestor.iniciar();


})



document.querySelector("#buscar").addEventListener("keyup",()=>{


   let q = document.querySelector("#buscar").value ;

   if (q.length >= 2){

    gestor.buscar(q);



   }else{

    gestor.mostrarHeader("Todos los productos en stock");
    gestor.cargarProductos(productos);


   }




})

function mostrarUsuario() {
    
    const iniciarSesionLink = document.getElementById('iniciarSesionLink');

    
    const nombreUsuario = localStorage.getItem('nombreUsuario');

    if (nombreUsuario) {
        iniciarSesionLink.textContent = nombreUsuario;
        iniciarSesionLink.href = "#";
        cerrarSesionButton.style.display = "inline-block";
    } else {
        iniciarSesionLink.textContent = "Iniciar Sesión";
        iniciarSesionLink.href = "./pages/InicioSesion.html";
        cerrarSesionButton.style.display = "none";
    }
}

const cerrarSesionButton = document.getElementById('cerrarSesionButton');


mostrarUsuario();
cerrarSesion();


cerrarSesionButton.addEventListener('click', function() {
   
    localStorage.removeItem('nombreUsuario');
    
    // window.location.replace('/JavaScript/Proyecto2/index.html');
});

/**
 * 
 * @param {*} id
 */

function addCarrito(id){

    const prod = document.querySelector("#row_"+id);

    let titulo = prod.querySelector('h3').textContent;
    let precio = prod.querySelector(".precio").textContent.substring(1,prod.querySelector(".precio").textContent.length);
    let img =  prod.querySelector("img").src;

    let producto = new Producto (id,titulo,precio,img);

    gestor.addCart(producto);

}

/**
 * 
 * @param {*} id
 */
function eliminar(id){
    gestor.eliminarProducto(id);
}

function cerrarSesion(){

const alertCerrarSesion = document.getElementById('cerrarSesionButton');
alertCerrarSesion.addEventListener('click', function() {
    Swal.fire({
        title: 'Sesion cerrada',
        text: 'Tu sesión ha sido cerrada con exito',
        icon: 'success',
        confirmButtonText: 'Continuar'
}).then((result) => {
    if (result.isConfirmed) {
        window.location.replace("../../index.html");
    }
  });
})}