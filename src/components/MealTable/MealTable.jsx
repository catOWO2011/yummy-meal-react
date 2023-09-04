import MealPreview from "../MealPreview/MealPreview";
import "./MealTable.scss";

export default function MealTable({ panelMeals }) {
  return (
    <div className="meal-table-container">
      {panelMeals.map(({ idMeal, strMeal, strMealThumb }) => (
        <MealPreview
          key={idMeal}
          id={idMeal}
          name={strMeal}
          imgUrl={strMealThumb}
        />
      ))}
    </div>
  );
}
