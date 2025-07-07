import { useEffect, useState } from "react";

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("productos");
    if (data) {
      setProductos(JSON.parse(data));
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Productos disponibles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((p) => (
          <ProductCard key={p.id} producto={p} />
        ))}
      </div>
    </div>
  );
}

export default Productos;
