import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hi Cat!</h1>
      <Meal />
    </div>
  );
}

function Meal() {
  return (
    <div>
      <img
        src="https://www.themealdb.com/images/media/meals/ytuvwr1503070420.jpg"
        alt="mealImage"
      />
      <h1>Toad In The Hole</h1>
      <p>
        {`Preheat the oven to 200°C/fan180°C/gas 6. fry sausages in a non-stick
        pan until browned.\r\nDrizzle vegetable oil in a 30cm x 25cm x 6cm deep
        roasting tray and heat in the oven for 5 minutes.\r\nPut the plain flour
        in a bowl, crack in the medium free-range eggs, then stir in the grated
        horseradish. Gradually beat in the semi-skimmed milk. Season.\r\nPut the
        sausages into the hot roasting tray and pour over the batter. Top with
        cherry tomatoes on the vine and cook for 30 minutes until puffed and
        golden.`}
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
