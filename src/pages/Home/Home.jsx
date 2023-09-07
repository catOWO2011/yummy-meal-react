import "./Home.scss";
import mealCategories from "../../assets/img/meal-categories.jpg";
import mealIngredients from "../../assets/img/meal-ingredients.avif";
import mealInstructions from "../../assets/img/meal-instructions.avif";
import CardPreview from "../../components/CardPreview/CardPreview";

const mealCards = [
  { cardTitle: "Categories", imageUrl: mealCategories },
  { cardTitle: "Ingredients", imageUrl: mealIngredients },
  { cardTitle: "Instructions", imageUrl: mealInstructions },
];

const Home = () => {
  return (
    <div className="home-container">
      {mealCards.map(({ cardTitle, imageUrl }, idx) => (
        <CardPreview
          key={idx}
          id={idx}
          cardTitle={cardTitle}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
};

export default Home;
