import ProductoCard from "./components/ProductoCard";
import { productos as productosIniciales } from "./data/productos";
import "./App.css";
import { useState } from "react";

function App() {
  const [productos, setProductos] = useState(productosIniciales);

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  const guardarProducto = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || precio === "" || stock === "") {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (Number(precio) <= 0 || Number(stock) < 0) {
      alert("Revise precio y stock");
      return;
    }

    if (editandoId === null) {
      const nuevoProducto = {
        id: Date.now(),
        nombre: nombre.trim(),
        precio: Number(precio),
        stock: Number(stock)
      };

      setProductos([...productos, nuevoProducto]);
    } else {
      const actualizados = productos.map((producto) =>
        producto.id === editandoId
          ? {
              ...producto,
              nombre: nombre.trim(),
              precio: Number(precio),
              stock: Number(stock)
            }
          : producto
      );

      setProductos(actualizados);
      setEditandoId(null);
    }

    setNombre("");
    setPrecio("");
    setStock("");
  };

    const editarProducto = (producto) => {
    setEditandoId(producto.id);
    setNombre(producto.nombre);
    setPrecio(producto.precio);
    setStock(producto.stock);
  };

    const eliminarProducto = (id) => {
    const confirmar = window.confirm(
      "¿Seguro que desea eliminar este producto?"
    );

    if (!confirmar) return;

    setProductos(
      productos.filter((producto) => producto.id !== id)
    );
  };

  const disponibles = productos.filter(producto => producto.stock > 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  return (
    <main className="contenedor">
      <h1>Tienda tecnologica</h1>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>Valor del inventario: ${valorInventario}</p>

      {/* PIEZA B */}
      <form onSubmit={guardarProducto}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />

        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        <button type="submit">
          {editandoId === null ? "Agregar" : "Actualizar"}
        </button>
      </form>

            <section className="productos">
        {productos.map(producto => (
          <div key={producto.id}>
            <ProductoCard producto={producto} />

            <button onClick={() => editarProducto(producto)}>
              Editar
            </button>

            <button onClick={() => eliminarProducto(producto.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;