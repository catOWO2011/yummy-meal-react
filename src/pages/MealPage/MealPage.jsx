import { useLoaderData, useParams } from "react-router-dom";
import MealTable from "../../components/MealTable/MealTable";
import { MealTitle, MealTitleContainer } from "./MealPage.styles";

export default function MealPage() {
  const { meals } = useLoaderData();

  console.log(useParams());

  return (
    <div>
      <MealTitleContainer>
        <MealTitle>Meals</MealTitle>
      </MealTitleContainer>
      <MealTable panelMeals={meals} />
    </div>
  );
}
