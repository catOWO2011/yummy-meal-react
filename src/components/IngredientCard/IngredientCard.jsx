import {
  IngredientCardContainer,
  IngredientImage,
} from "./IngredientCard.styles";

export default function IngredientCard({
  id,
  ingredientName,
  description,
  imgUrl,
}) {
  console.log(imgUrl);
  return (
    <IngredientCardContainer>
      <IngredientImage $background={imgUrl} />
    </IngredientCardContainer>
  );
}
