
let carrito = [] ;
let productos =new Array () ;

let gestor ;


document.addEventListener("DOMContentLoaded",()=>{


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


// Esta función verifica si el usuario ha iniciado sesión y actualiza la etiqueta "Iniciar Sesión" en consecuencia.
function mostrarUsuario() {
    // Obtener el elemento de "Iniciar Sesión" por su id.
    const iniciarSesionLink = document.getElementById('iniciarSesionLink');

    // Verificar si el usuario ha iniciado sesión (por ejemplo, si el nombre de usuario está en el almacenamiento local).
    const nombreUsuario = localStorage.getItem('nombreUsuario');

    if (nombreUsuario) {
        // Si el nombre de usuario está presente, actualizar la etiqueta con el nombre de usuario y cambiar el enlace a "#" (o a donde quieras redirigir al hacer clic en el nombre).
        iniciarSesionLink.textContent = nombreUsuario;
        iniciarSesionLink.href = "#";
        cerrarSesionButton.style.display = "inline-block";
    } else {
        // Si no hay nombre de usuario, dejar el texto "Iniciar Sesión", enlazar a la página de inicio de sesión y ocultar el botón "Cerrar Sesión".
        iniciarSesionLink.textContent = "Iniciar Sesión";
        iniciarSesionLink.href = "./pages/InicioSesion.html";
        cerrarSesionButton.style.display = "none";
    }
}

const cerrarSesionButton = document.getElementById('cerrarSesionButton');


// Llama a la función para que se ejecute al cargar la página.
mostrarUsuario();


cerrarSesionButton.addEventListener('click', function() {
    // Eliminar el nombre de usuario del almacenamiento local
    localStorage.removeItem('nombreUsuario');
    // Redirigir a la página de inicio de sesión u otra página de tu elección
    window.location.replace('/JavaScript/Proyecto2/index.html');
});



