import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterOutlet } from "./Router/RouterOutlet";
import { Header } from "./coreComponents/header/Header";
import { Footer } from "./coreComponents/footer/Footer";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
        <RouterOutlet />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);