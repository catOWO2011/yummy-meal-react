import axios from "axios";
import { useEffect, useState } from "react";
import InputContainer from "../InputContainer/InputContainer";
import SelectInputWrapper from "../SelectInputWrapper/SelectInputWrapper";
import "./Filter.scss";

export default function Filter({ setPanelMeals }) {
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [areas, setAreas] = useState([]);

  let selectedCategories = [];
  let selectedAreas = [];
  let selectedIngredients = [];

  const handleFilterClick = async (event) => {
    event.preventDefault();

    let mealList = [];
    const idMealSet = new Set();

    const filterBySelectedOptions = async (url, options) => {
      for (const option of options) {
        try {
          const {
            data: { meals },
          } = await axios.get(`${url}${option}`);

          for (const meal of meals) {
            if (!idMealSet.has(meal.idMeal)) {
              idMealSet.add(meal.idMeal);
              mealList.push(meal);
            }
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    if (
      selectedCategories.length === 0 &&
      selectedAreas.length === 0 &&
      selectedIngredients.length === 0
    ) {
      try {
        const {
          data: { meals: categoryList },
        } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?i="
        );
        mealList = categoryList.slice();
      } catch (error) {
        console.log(error);
      }
    } else {
      await filterBySelectedOptions(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=",
        selectedCategories
      );
      await filterBySelectedOptions(
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=",
        selectedIngredients
      );
      await filterBySelectedOptions(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=",
        selectedAreas
      );
    }
    setPanelMeals(mealList);
  };

  const handleOnChangeCategoryInput = (value) => {
    selectedCategories = value;
  };

  const handleOnChangeIngredientInput = (value) => {
    selectedIngredients = value;
  };

  const handleOnChangeAreaInput = (value) => {
    selectedAreas = value;
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const {
          data: { meals },
        } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        );
        // console.log(categoryList.map(({ strCategory }) => strCategory));
        setCategories(
          meals.map(({ strCategory }) => {
            return {
              value: strCategory,
            };
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

    const getIngredients = async () => {
      try {
        const {
          data: { meals },
        } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
        );
        // console.log(categoryList.map(({ strCategory }) => strCategory));
        setIngredients(
          meals.map(({ strIngredient }) => {
            return {
              value: strIngredient,
            };
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

    const getAreas = async () => {
      try {
        const {
          data: { meals },
        } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
        );
        // console.log(categoryList.map(({ strCategory }) => strCategory));
        setAreas(
          meals.map(({ strArea }) => {
            return {
              value: strArea,
            };
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
    getIngredients();
    getAreas();
  }, []);

  return (
    <div className="filter-container">
      <InputContainer name={"Category"}>
        <SelectInputWrapper
          options={categories}
          onChange={handleOnChangeCategoryInput}
        />
      </InputContainer>
      <InputContainer name={"Ingredients"}>
        <SelectInputWrapper
          options={ingredients}
          onChange={handleOnChangeIngredientInput}
        />
      </InputContainer>
      <InputContainer name={"Area"}>
        <SelectInputWrapper
          options={areas}
          onChange={handleOnChangeAreaInput}
        />
      </InputContainer>
      <div onClick={handleFilterClick} className="btn-filter">
        <span>Filter</span>
      </div>
    </div>
  );
}
