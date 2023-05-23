let artPend = [];

artPend.push({
    nombre: 'Fungicida',
    descripcion: 'Producto para control de hongos',
    cantidad: 10,
    precio: 100,
    estado: 'Pendiente'
  });
  
artPend.push({
    nombre: 'Insecticida',
    descripcion: 'Producto para control de insectos',
    cantidad: 20,
    precio: 200,
    estado: 'Facturado'
  });

artPend.push({
  nombre: 'Herbicida',
  descripcion: 'Producto para control de hierbas',
  cantidad: 30,
  precio: 300,
  estado: 'Pendiente'
});

// Listar elementos del array

function iterarArray(){
  artPend.forEach(function(articulo) {
      alert(`Nombre: ${articulo.nombre} \n Descripción: ${articulo.descripcion} \n Cantidad: ${articulo.cantidad} \n Precio: ${articulo.precio}`);
  });
}

// Agregar elementos al array

function agregarArticulo() {
  let nombre = prompt("Ingrese el nombre del artículo:");
  let descripcion = prompt("Ingrese una descripción del artículo:");
  let cantidad = parseInt(prompt("Ingrese la cantidad del artículo:"));
  let precio = parseInt(prompt("Ingrese el precio del artículo:"));
  let fechaEntrega = prompt("Ingrese la fecha de entrega: ");
  let cliente = prompt("Ingrese el cliente:");
  let estado = prompt ("Ingrese el estado del artículo: (Pendiente/Facturado)");

  let nuevoArticulo = {
    nombre: nombre,
    descripcion: descripcion,
    cantidad: cantidad,
    precio: precio,
    fechaEntrega: fechaEntrega,
    cliente: cliente,
    estado: estado
  };

  artPend.push(nuevoArticulo);

  alert(`El artículo ${nombre} ha sido agregado con éxito.`);
  console.table(artPend);
  escrbirHtml();
}

// Buscar por nombre de cliente usando filter

function buscarArticulo(){
  let articuloBuscado = prompt('Ingrese el nombre del Articulo');
  let artNombre = artPend.filter(function(articulo) {
    return articulo.nombre === articuloBuscado;
  });

  let mensaje = "";
  for (let i = 0; i < artNombre.length; i++) {
    for (let propiedad in artNombre[i]) {
      mensaje += propiedad + ": " + artNombre[i][propiedad] + "\n";
    }
    mensaje += "\n";
  }
  alert(mensaje);
  escrbirHtml();
}

// Buscar por estado pendiente y sumar usando reduce

function buscarArticuloPendiente(){
  let articulo = artPend.filter(function(articulo) {
    return articulo.estado === 'Pendiente';
  });

  let mensaje = "";
  for (let i = 0; i < articulo.length; i++) {
    for (let propiedad in articulo[i]) {
      mensaje += propiedad + ": " + articulo[i][propiedad] + "\n";
    }
    mensaje += "\n";
  }
  
  let totalPrecio = artPend.reduce(function(acumulador, articulo) {
    return acumulador + (articulo.cantidad * articulo.precio);
  }, 0);
  alert(`${mensaje} \n Total a facturar: $${totalPrecio}`);
  escrbirHtml();
}

// Agregar fecha de entrega, cliente, estado a cada articulo del array

function agregarPropiedades(){
  artPend.forEach(function(articulo, index) {
      //alert(`Nombre: ${articulo.nombre} \n Descripción: ${articulo.descripcion} \n Cantidad: ${articulo.cantidad} \n Precio: ${articulo.precio}`);
      let fechaEntrega = prompt(`Nombre: ${articulo.nombre} \n Descripción: ${articulo.descripcion} \n Cantidad: ${articulo.cantidad} \n Precio: ${articulo.precio} \n Ingrese la fecha de entrega: `);
      let cliente = prompt(`Nombre: ${articulo.nombre} \n Descripción: ${articulo.descripcion} \n Cantidad: ${articulo.cantidad} \n Precio: ${articulo.precio} \n Ingrese el cliente:`);
      let estado = prompt(`Nombre: ${articulo.nombre} \n Descripción: ${articulo.descripcion} \n Cantidad: ${articulo.cantidad} \n Precio: ${articulo.precio} \n Ingrese el estado del artículo: (Pendiente/Facturado)`);
      let actualizarArticulo = {
        nombre: articulo.nombre,
        descripcion: articulo.descripcion,
        cantidad: articulo.cantidad,
        precio: articulo.precio,
        fechaEntrega: fechaEntrega,
        cliente: cliente,
        estado: estado
      };
      artPend.splice(index,1,actualizarArticulo);
  });
  escrbirHtml();
  console.table(artPend);
}

function limpiarTabla(){
  let tabla = document.getElementById("tablaArticulos");
  tabla.innerHTML = `<table id="tablaArticulos">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Descripción</th>
      <th>Cantidad</th>
      <th>Precio</th>
      <th>Estado</th>
    </tr>
  </thead>
  <tbody></tbody>
</table> `;
}

function escrbirHtml() {
  limpiarTabla();
  // Obtener una referencia a la tabla
  let tabla = document.getElementById("tablaArticulos");

  // Crear las filas y celdas de la tabla y agregar los datos de artPend
  for (let i = 0; i < artPend.length; i++) {
    // Crear una nueva fila en la tabla
    let fila = tabla.insertRow();

    // Agregar las celdas con los datos del artículo
    let nombre = fila.insertCell();
    let descripcion = fila.insertCell();
    let cantidad = fila.insertCell();
    let precio = fila.insertCell();
    let estado = fila.insertCell();

    // Asignar los valores a las celdas
    nombre.innerHTML = artPend[i].nombre;
    descripcion.innerHTML = artPend[i].descripcion;
    cantidad.innerHTML = artPend[i].cantidad;
    precio.innerHTML = artPend[i].precio;
    estado.innerHTML = artPend[i].estado;
  }
};

//iterarArray()
//agregarArticulo()
//agregarPropiedades() 
//buscarArticulo()
//buscarArticuloPendiente()


window.onload = escrbirHtml();
