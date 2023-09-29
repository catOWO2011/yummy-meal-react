import "./Home.scss";
import mealCategories from "../../assets/img/meal-categories.jpg";
import mealIngredients from "../../assets/img/meal-ingredients.avif";
import CardPreview from "../../components/CardPreview/CardPreview";
import mainMealBackground from "../../assets/img/food-pattern-vector.jpg"
import mainMeal from "../../assets/img/main-meal.png";
import world from "../../assets/img/world.jpg";
import randomMeal from "../../assets/img/ramdon-meal.png";

const mealCards = [
  {
    cardTitle: "Categories",
    imageUrl: mealCategories,
    linkDestine: "categories",
  },
  {
    cardTitle: "Ingredients",
    imageUrl: mealIngredients,
    linkDestine: "ingredients",
  },
  {
    cardTitle: "Random Meal",
    imageUrl: randomMeal,
    linkDestine: "random"
  }
];

const Home = () => {
  return (
    <>
    <div className="main-meal-container">
      <div class="main-meal-background" style={{
        backgroundImage: `url(${mainMealBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "25%",
        zIndex: "10"
      }}>
        <img className="main-meal" src={mainMeal} alt="main-meal-image"/>
        <div className="main-description">
          Found Recipes from around the World
          <div className="world-icon"
            style={{
              borderRadius: "100%",
              backgroundImage: `url(${world})`,
              backgroundSize: "cover",
              height: "100px",
              width: "100px",
              animation: "spin 3.5s infinite linear"
            }}
          ></div>
        </div>
      </div>
    </div>
    <div className="home-container">
      {mealCards.map(({ cardTitle, imageUrl, linkDestine }, idx) => (
        <CardPreview
          key={idx}
          id={idx}
          cardTitle={cardTitle}
          imageUrl={imageUrl}
          linkDestine={linkDestine}
        />
      ))}
    </div>
    </>
  );
};

export default Home;
