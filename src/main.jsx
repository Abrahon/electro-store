import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx";
import SidebarProvider from "./context/SidebarProvider.jsx";
import CartProvider from "./context/CartProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
      <CartProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
      </CartProvider>
    </SidebarProvider>
  </React.StrictMode>
);
