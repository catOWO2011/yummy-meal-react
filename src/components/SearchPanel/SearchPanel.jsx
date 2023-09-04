import { useState } from "react";
import Filter from "../Filter/Filter";
import MealTable from "../MealTable/MealTable";
import "./SearchPanel.css";

export default function SearchPanel() {
  const [panelMeals, setPanelMeals] = useState([]);

  return (
    <div className="panel-container">
      <Filter setPanelMeals={setPanelMeals} />
      <MealTable panelMeals={panelMeals} />
    </div>
  );
}
