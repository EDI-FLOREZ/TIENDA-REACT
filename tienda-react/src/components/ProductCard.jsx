import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ producto }) {
  const { agregarAlCarrito } = useCart();

  return (
    <div className="border p-4 rounded shadow">
      <Link to={`/productos/${producto.id}`}>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-40 object-cover mb-2"
        />
        <h3 className="text-lg font-bold">{producto.nombre}</h3>
      </Link>
      <p>{producto.descripcion}</p>
      <p className="font-semibold text-green-600">
        ${producto.precio.toLocaleString()}
      </p>
      <button
        onClick={() => agregarAlCarrito(producto)}
        className="bg-blue-600 text-white px-3 py-1 mt-2 rounded"
      >
        Añadir al carrito
      </button>
    </div>
  );
}

export default ProductCard;
