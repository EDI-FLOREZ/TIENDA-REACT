import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext"; // 👈

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider> {/* 👈 Ahora envuelve la app */}
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
