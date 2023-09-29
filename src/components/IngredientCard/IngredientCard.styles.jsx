import { Modal } from "antd";
import styled from "styled-components";

export const IngredientCardContainer = styled.div`
  height: 200px;
  position: relative;
  cursor: pointer;
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
  text-shadow: -1px 3px 0px #A2678A;
  font-size: 35px;
  color: #4D3C77;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #E19898;
`;

export const ModalIngredientContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 28rem);
  width: 100%;
  justify-content: center;

  .image-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 70%;
    }
  }

  .description-content {
    width: 100%;
    flex: column;
    padding: 1rem;

    .meal-tag-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }

  button.ant-modal-close {
    color: blue;
  }
`;

export const IngredientModal = styled(Modal)`
  button.ant-modal-close {
    color: #ffddb5;

    svg {
      font-size: 2rem;
    }
  }

  button.ant-modal-close:hover {
    svg {
      background-image: linear-gradient(to right, #f3723b, #e54750);
      border-radius: 10px;
      color: #ffddb5;
    }
  }
`;

export const MealLink = styled.div`
  padding: 5px;
  margin: 5px;
  background-image: linear-gradient(to right, #f3723b, #e54750);
  width: max-content;
  border-radius: 5px;
  a {
    color: #fff;
  }
`