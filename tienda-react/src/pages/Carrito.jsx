

import { useCart } from "../context/CartContext";

function Carrito() {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCart();

  const total = carrito.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {carrito.map((item) => (
              <li key={item.id} className="border p-3 rounded flex justify-between">
                <div>
                  <h3 className="font-bold">{item.nombre}</h3>
                  <p>Cantidad: {item.cantidad}</p>
                  <p>Precio: ${item.precio.toLocaleString()}</p>
                </div>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <p className="text-xl font-bold">Total: ${total.toLocaleString()}</p>
            <button
              className="bg-gray-800 text-white px-4 py-2 mt-2 rounded"
              onClick={vaciarCarrito}
            >
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
