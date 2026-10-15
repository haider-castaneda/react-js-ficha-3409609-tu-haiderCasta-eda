// console.log("Java Script esta funcionando")


// Reto 1: funciones, parametros y return
// function cacularTotal(precio, cantidad) {
//     const total = precio * cantidad;
//     return total;
// }
// const resultado = cacularTotal(5000, 3);
// console.log(resultado);

// function sumar(a, b) {
//     const suma = a + b;
//     return suma;
// }
// const resultado = sumar(1243, 343);
// console.log(resultado)

// function restar(a, b) {
//     const resta = a - b;
//     return resta;
// }
// const resultado = restar(35, 5);
// console.log(resultado)

// function multiplicar (a, b) {
//     const multiplicacion = a * b;
//     return multiplicacion
// }
// const resultado = multiplicar(5, 5);
// console.log(resultado)

// function dividir (a, b) {
//     const division = a / b;
//     return division;
// }
// const resultado = dividir(10, 5);
// console.log(resultado)

// function calcularPromedio(nota1, nota2, nota3) {
//     const suma = nota1 + nota2 + nota3;
//     const division = suma / 3;
//     return division
// }
// const resultado = calcularPromedio(34, 41, 39);
// console.log(resultado)

// RESPUESTA A PREGUNTA DE LA GUIA
// RETURN es el que se encarga de devolver datos al usuario por medio de una funcion
// CONSOLE.LOG es el que sen encarga de mostrar los datos o informacion

// Reto 2, funciones flecha

// forma tradicional
// function cuadraro(numero) {
//     return numero ** 2;
// }
// const resultado = cuadraro(2);
// console.log(resultado)

//arrow function
// const cuadrado = (numero) => {
//     return numero ** 2;
// };
// console.log(cuadrado(2))

// forma tradicional
// function mayorEdad(edad) {
//     if (edad => 18) {
//         return "Eres mayor de edad";
//     } else {
//         return "Eres menor de edad";
//     }
// }
// const resultado = mayorEdad(19);
// console.log(resultado);

//arrow function
// const mayorEdad = (año) => {
//     if (edad => 18) {
//         return "Eres mayor de edad";
//     } else {
//         return "Eres menor de edad";
//     }
// };
// console.log(mayorEdad(19))

// forma tradicional
// function nombreCompleto(nombre, apellido) {
//     return nombre + " " + apellido;
// };
// const resultado = nombreCompleto("Haider", "Castañeda");
// console.log(resultado)

//arrow function
// const nombreCompleto = (nombre, apellido) => {
//     return nombre + " " + apellido;
// };
// console.log(nombreCompleto("Haider", "Castañeda"));

// Reto 3, arreglos y objetos

const productos = [
    {id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5},
    {id: 2, nombre: 'Teclado', precio: 80000, categoria: 'Perifericos', stock: 0},
    {id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3},
    {id: 4, nombre: 'Bafles', precio: 320000, categoria: 'Perifericos', stock: 85},
    {id: 5, nombre: 'Audifonos', precio: 34000, categoria: 'Perifericos', stock: 0},
    {id: 6, nombre: 'USB', precio: 14500, categoria: 'Almacenamiento', stock: 87},
    {id: 7, nombre: 'Mesa', precio: 256000, categoria: 'Muebles', stock: 18},
    {id: 8, nombre: 'Disco Duro', precio: 860000, categoria: 'Almacenamiento', stock: 9},
    {id: 9, nombre: 'Portatil', precio: 1250000, categoria: 'Dispositivos', stock: 8},
    {id: 10, nombre: 'Estanteria', precio: 123000, categoria: 'Muebles', stock: 0},
]

// Reto 4, forEach()
// productos.forEach((producto, indice) => {
//     console.log(`${indice + 1}. ${producto.nombre} - ${producto.precio} - ${producto.categoria} - ${producto.stock}`);
// });

// Reto 5, map()
// const nombres = productos.map(producto => productos.nombre);
// console.log(nombres);

// const preciosConIva = productos.map(producto => producto.precio * 1.19);
// console.log(preciosConIva)

// const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
// console.log(nombresMayuscula)

// const resumenProductos = productos.map(producto => producto.nombre + " cuesta " + producto.precio)
// console.log(resumenProductos)

//Reto 6, filter() y find()

// const precioMayor = productos.filter(producto => producto.precio > 100000);
// console.log(precioMayor)

// const precioEntre = productos.filter(producto => producto.precio > 50000 & producto.precio < 200000);
// console.log(precioEntre)

// const categoria = productos.filter(producto => producto.categoria === "Perifericos");
// console.log(categoria)

// const buscarProducto = productos.find(producto => producto.id === 5);
// console.log(buscarProducto)

// function buscarProducto(id) {
//     const producto = productos.find(producto => producto.id === 6);
//     return producto;
// }
// console.log(buscarProducto(6))

// Reto 7, some(), every() y reduce()

// const productosAgotados = productos.some(producto => producto.stock === 0);
// console.log(productosAgotados);

// const precioMayor = productos.some(producto => producto.precio > 1000000);
// console.log(precioMayor)

// const valorMayor0 = productos.every(producto => producto.precio >0);
// console.log(valorMayor0)

// const stockMayor0 = productos.every(producto => producto.stock >=0);
// console.log(stockMayor0)

// const valorInventario = productos.reduce(
//     (total, producto) => total + producto.precio * producto.stock,
//     0
// );
// console.log(valorInventario)

// Reto 8, JavaScript moderno
// 12.1 Template literals
// console.log(
//     `El producto ${productos[0].nombre} cuesta $${productos[0].precio}.`
// );

// 12.2 Desestructuración
// const { nombre, precio, stock } = productos[0];

// console.log(nombre, precio, stock);

// 12.3 Spread
// const productoActualizado = {
//     ...productos[0],
//     precio: 55000,
//     stock: 8
// };

// console.log(productoActualizado);

// 12.4 Operador ternario
// const estado = productoActualizado.stock > 0
//     ? 'Disponible'
//     : 'Agotado';

// console.log(estado);
