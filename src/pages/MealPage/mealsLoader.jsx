import axios from "axios";

export async function mealsLoader({ params: { categoryName } }) {
  let meals = {};
  try {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );

    meals = { meals: data.meals };
  } catch (error) {
    console.error(error);
  }

  return meals;
}
