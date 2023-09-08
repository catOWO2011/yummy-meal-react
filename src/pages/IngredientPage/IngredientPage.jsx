import { Pagination } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import IngredientCard from "../../components/IngredientCard/IngredientCard";
import { IngredientDescription } from "../../components/IngredientCard/IngredientCard.styles";
import { IngredientPageContainer } from "./IngredientPage.styles";

export default function IngredientPage() {
  const [ingredients, setIngredients] = useState([]);
  const [startPage, setStartPage] = useState(1);

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const {
          data: { meals },
        } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
        );

        setIngredients(
          meals.map(
            ({
              idIngredient: id,
              strIngredient: ingredientName,
              strDescription: description,
            }) => ({
              id,
              ingredientName,
              description,
              imgUrl: `https://www.themealdb.com/images/ingredients/${ingredientName}.png`,
            })
          )
        );
      } catch (error) {
        console.error(error);
      }
    };

    getIngredients();
    console.log("...");
  }, []);

  // console.log(ingredients);

  const onChangePage = (page) => {
    setStartPage(page);
  };

  return (
    <>
      <IngredientPageContainer>
        {ingredients
          .filter(
            (value, index) =>
              index + 1 >= (startPage - 1) * 10 + 1 &&
              index + 1 <= startPage * 10
          )
          .map(({ id, ingredientName, description, imgUrl }) => (
            <>
              <IngredientCard
                id={id}
                key={id}
                ingredientName={ingredientName}
                imgUrl={imgUrl}
              />
              {/* <IngredientDescription>{description}</IngredientDescription> */}
            </>
          ))}
      </IngredientPageContainer>
      <Pagination defaultCurrent={1} total={574} onChange={onChangePage} />
    </>
  );
}
