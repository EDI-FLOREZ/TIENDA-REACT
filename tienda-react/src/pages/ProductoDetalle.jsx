

import { useParams } from "react-router-dom";
import productos from "../data/productos";
import { useCart } from "../context/CartContext";

function ProductoDetalle() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));
  const { agregarAlCarrito } = useCart();

  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-60 object-cover mb-4 rounded"
      />
      <h2 className="text-2xl font-bold">{producto.nombre}</h2>
      <p className="text-gray-700">{producto.descripcion}</p>
      <p className="text-xl font-semibold text-green-600 mt-2">
        ${producto.precio.toLocaleString()}
      </p>
      <button
        onClick={() => agregarAlCarrito(producto)}
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
      >
        Añadir al carrito
      </button>
    </div>
  );
}

export default ProductoDetalle;
