import {
  IngredientCardContainer,
  IngredientImage,
  IngredientNameContainer,
} from "./IngredientCard.styles";

export default function IngredientCard({
  id,
  ingredientName,
  description,
  imgUrl,
}) {
  return (
    <IngredientCardContainer>
      <IngredientImage $background={imgUrl} />
      <IngredientNameContainer>
        <span>{ingredientName}</span>
      </IngredientNameContainer>
    </IngredientCardContainer>
  );
}
