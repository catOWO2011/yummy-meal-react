import { useState } from "react";
import Filter from "../Filter/Filter";
import MealTable from "../MealTable/MealTable";
import "./SearchPanel.css";

export default function SearchPanel() {
  const [panelMeals, setPanelMeals] = useState([]);

  console.log(panelMeals, `panelMeals`);

  return (
    // https://www.themealdb.com/api/json/v1/1/filter.php?i=
    <div className="panel-container">
      <Filter setPanelMeals={setPanelMeals} />
      <MealTable panelMeals={panelMeals} />
    </div>
  );
}
