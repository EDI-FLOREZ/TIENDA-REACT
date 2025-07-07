import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import ProductoDetalle from "./pages/ProductoDetalle";
import AdminPanel from "./pages/AdminPanel";








function App() {
  return (
    <Router>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
