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
                "destacado": 0
            },
            {
                "id": 2,
                "nombre": "Led T10",
                "descripcion": "Canbus Plano Sin Polaridad Np",
                "precio": 1499,
                "stock": 50,
                "img": "LedT10.jpg",
                "destacado": 1
            },

            {
                "id": 3,
                "nombre": "Paño de Microfibra",
                "descripcion": "2 En 1 Secado 30x30cm Detail Auto",
                "precio": 1100,
                "stock": 50,
                "img": "Microfibra.jpg",
                "destacado": 0
            },
            {
                "id": 4,
                "nombre": "Stereo Pioneer",
                "descripcion": "MVH S215BT con USB y bluetooth",
                "precio": 32500,
                "stock": 50,
                "img": "StereoPioneer.jpg",
                "destacado": 1
            }

        ]


        let productosDestacados = productos.filter(prod => prod.destacado == 1);

        this.cargarProductos(productosDestacados);
    }



    cargarProductos(productos) {

        //const divProductos = document.getElementById("productos");
        const divProductos = document.querySelector("#productos");
        divProductos.innerHTML = "";

        if (productos.length == 0) {

            this.mostrarHeader("No se han encontrado productos");
            return false;
        } else {

            productos.forEach((producto) => {


                let id = producto.id;
                let nombre = producto.nombre;
                let img = producto.img;
                let descripcion = producto.descripcion;
                let precio = producto.precio;

                let prod = document.createElement("div");
                prod.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row', 'producto');

                prod.innerHTML = `<div class="w-20">
                                        <img src="./assets/img/${img}" alt="" width="150" height="150" >
                                  </div>

                                  <div class="p-3 d-flex flex-column w-60 h-150">
                                    <h3>${nombre}</h3>            
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

        let resultado = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(valor.toLowerCase()) ||
            producto.descripcion.toLowerCase().includes(valor.toLowerCase()));
        this.cargarProductos(resultado);


    }




}