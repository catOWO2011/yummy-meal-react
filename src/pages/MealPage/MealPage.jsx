import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import MealTable from "../../components/MealTable/MealTable";
import PaginationWrapper from "../../components/PaginationWrapper/PaginationWrapper";
import { MealTitle, MealTitleContainer } from "./MealPage.styles";

export default function MealPage() {
  const { meals } = useLoaderData();
  const [startPage, setStartPage] = useState(1);

  const onChangePage = (page) => {
    setStartPage(page);
  };

  return (
    <>
      <MealTitleContainer>
        <MealTitle>Meals</MealTitle>
      </MealTitleContainer>
      {meals.length !== 0 && (
        <MealTable
          panelMeals={meals.filter(
            (value, index) =>
              index + 1 >= (startPage - 1) * 10 + 1 &&
              index + 1 <= startPage * 10
          )}
        />
      )}
      <PaginationWrapper
        defaultCurrent={1}
        total={meals.length}
        onChange={onChangePage}
      />
    </>
  );
}
