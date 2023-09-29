import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  IngredientCardContainer,
  IngredientImage,
  IngredientModal,
  IngredientNameContainer,
  MealLink,
  ModalIngredientContent,
} from "./IngredientCard.styles";
import lazyBackground from "../../assets/img/lazy-placeholder.png";

const TagList = ({ ingredientName }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMeals = async () => {
      try {
        const {
          data: { meals },
        } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`);
        setMeals(meals);
      } catch (error) {
        console.error(error);
      }
    }

    loadMeals();
  }, []);

  return <>
    {meals.map(({idMeal, strMeal }) => <MealLink key={idMeal}><Link>{strMeal}</Link></MealLink>)}
  </>
};

export default function IngredientCard({
  id,
  ingredientName,
  description,
  imgUrl,
}) {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  }

  return (
    <>
      <IngredientCardContainer onClick={showModal}>
        <IngredientImage $background={imgUrl} />
        <IngredientNameContainer>
          <span>{ingredientName}</span>
        </IngredientNameContainer>
      </IngredientCardContainer>
      <IngredientModal
        open={open}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
          </>
        )}
        width={"80%"}
      >
        <ModalIngredientContent >
          <div className="image-container" style={{
            backgroundImage: `url(${lazyBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center"
          }}>
            <img src={imgUrl} alt={ingredientName} />
          </div>
          <div className="description-content">
            <div>
              {description}
            </div>
            <div class="meal-tag-container">
              <TagList ingredientName={ingredientName} />
            </div>
          </div>
        </ModalIngredientContent>
      </IngredientModal>
    </>
  );
}
