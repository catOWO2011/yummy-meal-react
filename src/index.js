import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import beefImage from "./assets/img/beef.png";
import CategoryBoard from "./components/CategoryBoard/CategoryBoard";

function App() {
  return (
    <div>
      <Header />
      <Meal />
      <Footer />
    </div>
  );
}

function Meal() {
  return (
    <div>
      <CategoryBoard beefImage={beefImage} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
