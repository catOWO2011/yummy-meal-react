import { Link } from "react-router-dom";
import "./MealPreview.scss";

export default function MealPreview({ id, name, imgUrl }) {
  return (
    <div className="meal-preview-container">
      <figure>
        <img src={imgUrl} alt={name} />
        <Link to={"/"}>
          <div className="meal-title">
            <h3>{name}</h3>
          </div>
        </Link>
      </figure>
    </div>
  );
}
