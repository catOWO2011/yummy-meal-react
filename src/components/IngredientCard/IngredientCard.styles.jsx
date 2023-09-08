import styled from "styled-components";

export const IngredientCardContainer = styled.div`
  height: 300px;
`;

export const IngredientImage = styled.div`
  background-image: ${(props) => `url("${props.$background}")`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100%;
`;

export const IngredientDescription = styled.div``;
