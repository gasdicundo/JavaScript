let usuario = prompt("Cree un usuario");
let contraseña = prompt("Cree una contraseña");

const user = usuario;
const password = contraseña;

let ingreso_usuario = prompt("Ingrese su usuario creado");
let ingreso_contraseña = prompt("Ingrese su contraseña creada");

if (ingreso_usuario === user && ingreso_contraseña === password) {
  class articulos {
    constructor(id, descripcion, precio, stock) {
      this.id = id;
      this.descripcion = descripcion;
      this.precio = precio;
      this.stock = stock;
    }

    mostrar_descripcion_completa() {
      return (
        "#" +
        this.id +
        " - " +
        this.descripcion +
        " $ " +
        this.precio +
        " STOCK: " +
        this.stock
      );
    }

    getPrecio() {
      return this.precio;
    }

    getId() {
      return this.id;
    }

    setStock(nuevo_stock) {
      this.stock = nuevo_stock;
    }

    tieneStock(stock) {
      return this.stock >= stock;
    }
  }

  let arreglo_articulos = new Array();
  arreglo_articulos.push(new articulos(1, "Cree led", 5400, 0));
  arreglo_articulos.push(new articulos(2, "Led T10", 1499, 0));
  arreglo_articulos.push(new articulos(3, "Microfibra de secado", 950, 12));
  arreglo_articulos.push(new articulos(4, "Stereo Pionner", 6500, 20));

  let respuesta = true;

  while (respuesta != "4" && respuesta) {
    respuesta = mostrarMenu();
  }

  function mostrarMenu() {
    let respuesta = prompt(
      "¿Qué acción desea realizar?\n1) Ver los artículos\n2) Comprar artículos\n3) Actualizar stock\n4) Ver compra"
    );

    if (respuesta == "1") {
      alert("Los artículos son: " + mostrar_stock());
    } else if (respuesta == "2") {
      comprar_articulos();
    } else if (respuesta == "3") {
      actualizar_stock();
    } else if (respuesta == "4") {
      return respuesta;
    } else {
      alert("Opción inválida");
    }

    return respuesta;
  }

  function mostrar_stock() {
    let stock = "";
    for (let i = 0; i < arreglo_articulos.length; i++) {
      stock += "\n" + arreglo_articulos[i].mostrar_descripcion_completa();
    }

    return stock;
  }

  function comprar_articulos() {
    let total_compra = 0;
    let lista_articulos = "";
    let articulo = "";
    do {
      articulo = prompt(
        "¿Qué desea comprar?" +
          mostrar_stock() +
          "\nEscriba 'terminar' para salir"
      );

      switch (articulo) {
        case "1":
          if (arreglo_articulos[0].tieneStock(1)) {
            lista_articulos += " - Cree Led - $5400" + "<br>";
            total_compra += 5400;
            arreglo_articulos[0].setStock(arreglo_articulos[0].stock - 1);
          } else {
            alert("El producto seleccionado no tiene stock");
          }
          break;

        case "2":
          if (arreglo_articulos[1].tieneStock(1)) {
            lista_articulos += " - Led T10 - $1499" + "<br>";
            total_compra += 1499;
            arreglo_articulos[1].setStock(arreglo_articulos[1].stock - 1);
          } else {
            alert("El producto seleccionado no tiene stock");
          }
          break;

        case "3":
          if (arreglo_articulos[2].tieneStock(1)) {
            lista_articulos += " - Microfibra para secar - $950" + "<br>";
            total_compra += 950;
            arreglo_articulos[2].setStock(arreglo_articulos[2].stock - 1);
          } else {
            alert("El producto seleccionado no tiene stock");
          }
          break;

        case "4":
          if (arreglo_articulos[3].tieneStock(1)) {
            lista_articulos += " - Stereo Pionner - $6500" + "<br>";
            total_compra += 6500;
            arreglo_articulos[3].setStock(arreglo_articulos[3].stock - 1);
          } else {
            alert("El producto seleccionado no tiene stock");
          }
          break;

        case "terminar":
          break;

        default:
          alert("Artículo no encontrado");
      }
    } while (articulo != "terminar");
    if (total_compra > 0) {
      document.write(
        "Lista de artículos comprados:<br><br>" + lista_articulos + "<br>"
      );
      document.write("El total de la compra es: $" + total_compra + "<br><br>");
    } else {
      document.write("No añadió productos al carro");
    }
  }

  function actualizar_stock() {
    let password = prompt("Ingrese contraseña de administrador");

    if (password === "1234") {
      let articulo = prompt("Ingrese el artículo a actualizar\n" + mostrar_stock());
      let indice = buscar_articulo(articulo);

      if (indice >= 0) {
        let nuevo_stock = parseInt(prompt("Ingrese un nuevo valor para el stock"));

        arreglo_articulos[indice].setStock(nuevo_stock);

        alert("Ahora la lista es:\n" + mostrar_stock());
      } else {
        alert("No ingresaste un artículo válido");
      }
    } else {
      alert("Usted no tiene acceso a esta función");
    }
  }

  function buscar_articulo(id) {
    let i = 0;
    while (i < arreglo_articulos.length) {
      if (arreglo_articulos[i].getId() == id) {
        return i;
      }

      i++;
    }

    return -1;
  }
}
