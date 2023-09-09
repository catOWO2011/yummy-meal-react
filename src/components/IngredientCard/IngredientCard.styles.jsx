import styled from "styled-components";

export const IngredientCardContainer = styled.div`
  height: 200px;
  position: relative;
`;

export const IngredientImage = styled.div`
  background-image: ${(props) => `url("${props.$background}")`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100%;
  background-color: #f6f1d3;
  border-radius: 10px;
`;

export const IngredientNameContainer = styled.div`
  position: absolute;
  padding: 10px;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  background-image: linear-gradient(to right, #f3723b, #e54750);
  border-radius: 0 0 10px 10px;

  span {
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const IngredientTitle = styled.h2`
  font-family: "Merienda";
  text-shadow: -1px 3px 0px #e54750;
  font-size: 35px;
  color: #ffddb5;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
