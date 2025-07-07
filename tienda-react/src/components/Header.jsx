import { useAuth } from "../context/AuthContext";

function Header() {
  const { usuario, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Mini Tienda</h1>
      <nav className="space-x-4">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/carrito">Carrito</Link>
        {usuario?.rol === "admin" && <Link to="/admin">Admin</Link>}
        {usuario ? (
          <>
            <span>{usuario.nombre}</span>
            <button onClick={logout} className="ml-2 underline">
              Cerrar sesión
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}
