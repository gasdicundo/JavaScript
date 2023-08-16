class GestionarProductos {
  iniciar() {

    fetch(url)

    .then (respuesta => respuesta.json())
    .then (resultado =>{

        productos = resultado.productos;

      let productosDestacados = productos.filter( prod => prod.destacado == 1);
   

    this.cargarProductos(productosDestacados);
  })

    

    this.mostrarCarrito();
        
    this.actualizarContador();
  
}

  cargarProductos(productos) {
    const divProductos = document.querySelector("#productos");
    divProductos.innerHTML = "";

    if (productos.length == 0) {
      this.mostrarHeader("No se han encontrado productos");
      return false;
    } else {

      
      productos.forEach((producto) => {
       

        const {id,nombre,img,descripcion,precio,carrito,stock,categoria} = producto

        let carritoBtnText = stock > 0 ? "Agregar al carrito" : "Sin stock";
        let carritoBtnDisabled = stock === 0 ? "disabled" : "";
        let prod = document.createElement("div");
        prod.classList.add("col-12","h200","border","mt-3","d-flex","align-items-center","p-3","flex-row","producto","cards");
        prod.id = "row_"+id;
        prod.innerHTML = `<div class="w-20">
                                        <img src="./assets/img/${img}" alt="" width="150" height="150" >
                                  </div>

                                  <div class="p-3 d-flex flex-column w-60 h-150">
                                    <h3>${nombre}</h3>            
                                    <p>${descripcion.substring(0,120)}</p>
                                    <p class="precio">$${precio}</p>             
                                    </div>
                                    <div>
                                  
                                   <p class="stock">Stock: ${stock} unidades</p> 
                                   <a href="javascript:addCarrito(${id})" class="button-carrito btn btn-primary d-flex justify-content-center" ${carritoBtnDisabled}>${carritoBtnText}</a>
                                   
                                   </div>
                                `;

        divProductos.appendChild(prod);
      });
    }
  }

  mostrarHeader(msg) {
    const headerProductos = document.querySelector("#headerProductos");
    headerProductos.innerHTML = msg;
  }

  buscar(valor) {
    let resultado = productos.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(valor.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(valor.toLowerCase())
    );
    this.cargarProductos(resultado);
  }

  addCart(item){


    const existe = carrito.some(producto => producto.id === item.id) ;

    if (existe){


        
        const articulo = carrito.map(producto=>{

            if (producto.id === item.id){


                producto.cantidad++;
                return producto;

            }else{

                return producto ;

            }


        })

        Toastify({

            text : "Producto agregado con exito",
            duration: 2000 ,
            gravity: "bottom"

       }).showToast();
       

    }else{


        carrito.push(item);

        Toastify({

            text : "Producto agregado con exito",
            duration: 2000 ,
            gravity: "bottom"

       }).showToast();


    }


    this.actualizarCarrito();





}

actualizarCarrito(){

    this.actualizarContador();
    this.mostrarCarrito();

    this.guardarCarrito();


}

mostrarCarrito(){

    let detalleCarrito = document.querySelector("#idCarrito");
    detalleCarrito.innerHTML = "" ;
    let total = 0 ;

    carrito.forEach ((producto) =>{


        const { id, nombre, precio, img, cantidad  } = producto;

        const row = document.createElement("div");
        row.classList.add("row");
        total += parseInt(precio) * cantidad;

        row.innerHTML= `
                    <div class="col-3 d-flex align-items-center p-2 border-bottom">
                        <img src="${img}" width="80"/>
                    </div>

                    <div class="col-3 d-flex align-items-center p-2 border-bottom">
                        ${nombre}
                    </div>

                    <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                        $ ${precio}
                    </div>  
                    
                    <div class="col-1 d-flex align-items-center justify-content-end p-2 border-bottom">
                        ${cantidad}
                    </div>

                    <div class="col-2 d-flex align-items-center justify-content-center p-2 border-bottom">
                    <a href="javascript:eliminar(${id})">
                        <i class="fa-solid fa-square-minus fa-2x"></i>
                    </a>
                </div>

        
                    `;



           detalleCarrito.appendChild(row);         

    })

    let row =document.createElement ("div");
    row.classList.add("row");

    row.innerHTML = `
                 <div class="col-4 d-flex align-items-center justify-content-start p-2 border-bottom">
                    Total a pagar:
                </div>
                <div class="col-8 d-flex align-items-center justify-content-end p-2 border-bottom">
                    <b> $ ${total}</b>
                </div>
                
                `;      
                    

     detalleCarrito.appendChild(row);               


}



actualizarContador(){

    let totalCarrito = this.contarProductos();

    let countCarrito = document.querySelector("#badgeCarrito");
    countCarrito.innerHTML = totalCarrito;

}

contarProductos(){

    let contarProductos = 0 ;

    carrito.forEach ((producto) =>{

        contarProductos = contarProductos + parseInt(producto.cantidad);

    })


    return contarProductos ;


}


eliminarProducto(id){


    //si confima proceso a eliminar
    Swal.fire({

        title : "¿Desde eliminar este articulo?" ,
        showCancelButton : true ,
        cancelButtonColor : '#d33' ,
        confirmButtonText : "Eliminar",
        cancelButtonText : "Cancelar",

    }).then ((result) =>{


        if (result.isConfirmed){

            carrito=carrito.filter(articulo => articulo.id != id);
            this.actualizarCarrito();

            
            Toastify({

                text : "Producto eliminado con exito",
                duration: 2000 ,
                gravity: "bottom"

           }).showToast();

        }
        


    })
    



}

guardarCarrito() { 
       
  localStorage.setItem(key_carrito, JSON.stringify( carrito ));
  const dt = DateTime.now();
  let date =  dt.toLocaleString();       
  localStorage.setItem(key_actualizacion,date);

}

categoria(categoriaSeleccionada) {

  const productosFiltrados = productos.filter(prod => prod.categoria === categoriaSeleccionada);

  this.cargarProductos(productosFiltrados);
}

gestionarProductos(){

  this.cargarProductos(productos)
}




}

const gestionarProductos = new GestionarProductos();


const accesoriosButton = document.getElementById("accesoriosButton");
accesoriosButton.addEventListener("click", () => {
  const categoriaSeleccionada = "accesorios"; 
  gestionarProductos.categoria(categoriaSeleccionada);
});


const lavadoButton = document.getElementById("lavadoButton");
lavadoButton.addEventListener("click", () => {
  const categoriaSeleccionada = "lavado"; 
  gestionarProductos.categoria(categoriaSeleccionada);
});

const mecanicaButton = document.getElementById("mecanicaButton");
mecanicaButton.addEventListener("click", () => {
  const categoriaSeleccionada = "mecanica"; 
  gestionarProductos.categoria(categoriaSeleccionada);
});

const todosButton = document.getElementById("todosButton");
todosButton.addEventListener("click", () => {
  gestionarProductos.gestionarProductos();
});





