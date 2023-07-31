class GestionarProductos {
  iniciar() {
    productos = [
      {
        "id": 1,
        "nombre": "Cree Led H7",
        "descripcion": "22.000 lumens por lámpara",
        "precio": 5400,
        "stock": 50,
        "img": "CreeLed.jpg",
        "destacado": 25,
        "carrito": "Agregar al carrito",
      },
      {
        "id": 2,
        "nombre": "Led T10",
        "descripcion": "Canbus Plano Sin Polaridad Np",
        "precio": 1499,
        "stock": 10,
        "img": "LedT10.jpg",
        "destacado": 1,
        "carrito": "Agregar al carrito",
      },

      {
        "id": 3,
        "nombre": "Paño de Microfibra",
        "descripcion": "2 En 1 Secado 30x30cm Detail Auto",
        "precio": 1100,
        "stock": 150,
        "img": "Microfibra.jpg",
        "destacado": 0,
        "carrito": "Agregar al carrito",
      },
      {
        "id": 4,
        "nombre": "Stereo Pioneer",
        "descripcion": "MVH S215BT con USB y bluetooth",
        "precio": 32500,
        "stock": 10,
        "img": "StereoPioneer.jpg",
        "destacado": 1,
        "carrito": "Agregar al carrito",
      },
      {
        "id": 5,
        "nombre": "Mini tacho de basura",
        "descripcion": "Oregon Universal Con Tapa P/autos",
        "precio": 1300,
        "stock": 20,
        "img": "minitacho.jpg",
        "destacado": 1,
        "carrito": "Agregar al carrito",
      },
      {
        "id": 6,
        "nombre": "Moldura a Presión",
        "descripcion": "Autos Tuning X4 Mts Fucsia Fluor",
        "precio": 1200,
        "stock": 5,
        "img": "MolduraAPresion.jpg",
        "destacado": 0,
        "carrito": "Agregar al carrito",
      },
      {
        "id": 7,
        "nombre": "Arrancador Auto",
        "descripcion": "T242 Arrancamotor Portatil Vehiculo 20000mah",
        "precio": 79700,
        "stock": 3,
        "img": "ArrancadorDeAuto.jpg",
        "destacado": 1,
        "carrito": "Agregar al carrito",
      },
      {
        "id": 8,
        "nombre": "Aromatizante Route 66",
        "descripcion": "Frutos Rojos - Route 66",
        "precio": 999,
        "stock": 50,
        "img": "Route66.jpg",
        "destacado": 0,
        "carrito": "Agregar al carrito",
      },
    ];
    

    let productosDestacados = productos.filter((prod) => prod.destacado == 1);
   

    this.cargarProductos(productosDestacados);
  }

  cargarProductos(productos) {
    const divProductos = document.querySelector("#productos");
    divProductos.innerHTML = "";

    if (productos.length == 0) {
      this.mostrarHeader("No se han encontrado productos");
      return false;
    } else {
      productos.forEach((producto) => {
        /*let id = producto.id;
        let nombre = producto.nombre;
        let img = producto.img;
        let descripcion = producto.descripcion;
        let precio = producto.precio;
        let carrito = producto.carrito;
        let stock = producto.stock;*/

        const {id,nombre,img,descripcion,precio,carrito,stock} = producto

        let carritoBtnText = stock > 0 ? "Agregar al carrito" : "Sin stock";
        let carritoBtnDisabled = stock === 0 ? "disabled" : "";
        let prod = document.createElement("div");
        prod.classList.add("col-12","h200","border","bg-white","rounded","mt-3","d-flex","align-items-center","p-3","flex-row","producto");
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


        //mapeo el producto con el id pasado por parametro con su cantidad actualizada
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


/**
* Actualiza contado de carrito, muestra el estado correcto del carrito y guarda en local storage
*/
actualizarCarrito(){

    this.actualizarContador();
    this.mostrarCarrito();

    this.guardarCarrito();


}

guardarCarrito(){

    //desarrollar

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



           detalleCarrito.append(row);         

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

            //notidico de la eliminacion
            Toastify({

                text : "Producto eliminado con exito",
                duration: 2000 ,
                gravity: "bottom"

           }).showToast();

        }


    })



}



}