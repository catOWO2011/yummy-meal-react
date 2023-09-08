import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import Navigation from "./pages/Navigation/Navigation";
import Home from "./pages/Home/Home";
import CatetoryPage from "./pages/CategoryPage/CategoryPage";
import IngredientPage from "./pages/IngredientPage/IngredientPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <CatetoryPage />,
      },
      {
        path: "ingredients",
        element: <IngredientPage />,
      },
    ],
  },
]);

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
      {/* <CategoryBoard beefImage={beefImage} /> */}
      <SearchPanel />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
