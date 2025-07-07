import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import productosIniciales from "../data/productos";

function AdminPanel() {
  const { usuario } = useAuth();

  // Evitar acceso si no es admin
  if (!usuario || usuario.rol !== "admin") {
    return <p className="p-4">Acceso denegado: Solo para administradores</p>;
  }

  // Estado de productos con carga desde localStorage
  const [productos, setProductos] = useState(() => {
    const data = localStorage.getItem("productos");
    return data ? JSON.parse(data) : productosIniciales;
  });

  // Guardar productos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  const [modoEdicion, setModoEdicion] = useState(false);
  const [productoActual, setProductoActual] = useState({
    id: null,
    nombre: "",
    descripcion: "",
    precio: "",
    imagen: ""
  });

  // Guardar nuevo o editado
  const handleGuardar = (e) => {
    e.preventDefault();

    if (modoEdicion) {
      setProductos((prev) =>
        prev.map((p) => (p.id === productoActual.id ? productoActual : p))
      );
    } else {
      const nuevo = {
        ...productoActual,
        id: Date.now(),
        precio: parseInt(productoActual.precio)
      };
      setProductos((prev) => [...prev, nuevo]);
    }

    setProductoActual({ id: null, nombre: "", descripcion: "", precio: "", imagen: "" });
    setModoEdicion(false);
  };

  const handleEditar = (producto) => {
    setProductoActual(producto);
    setModoEdicion(true);
  };

  const handleEliminar = (id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Panel de Administración</h2>

      {/* Formulario */}
      <form onSubmit={handleGuardar} className="space-y-2 max-w-md mb-6">
        <input
          type="text"
          placeholder="Nombre"
          value={productoActual.nombre}
          onChange={(e) =>
            setProductoActual({ ...productoActual, nombre: e.target.value })
          }
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="Descripción"
          value={productoActual.descripcion}
          onChange={(e) =>
            setProductoActual({ ...productoActual, descripcion: e.target.value })
          }
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={productoActual.precio}
          onChange={(e) =>
            setProductoActual({ ...productoActual, precio: e.target.value })
          }
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="URL de imagen (/uploads/ejemplo.jpg)"
          value={productoActual.imagen}
          onChange={(e) =>
            setProductoActual({ ...productoActual, imagen: e.target.value })
          }
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          {modoEdicion ? "Actualizar" : "Crear"}
        </button>
      </form>

      {/* Tabla de productos */}
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Nombre</th>
            <th className="border px-2 py-1">Precio</th>
            <th className="border px-2 py-1">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td className="border px-2 py-1">{p.id}</td>
              <td className="border px-2 py-1">{p.nombre}</td>
              <td className="border px-2 py-1">${p.precio.toLocaleString()}</td>
              <td className="border px-2 py-1 space-x-2">
                <button
                  onClick={() => handleEditar(p)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleEliminar(p.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
