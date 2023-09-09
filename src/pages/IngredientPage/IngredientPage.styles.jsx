import styled from "styled-components";

export const IngredientPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  gap: 1.5rem;
  align-items: flex-start;
  justify-content: center;
`;

export const IngredientSpinContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  padding: 300px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;
