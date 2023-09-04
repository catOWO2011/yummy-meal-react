import "./MealPreview.scss";

export default function MealPreview({ id, name, imgUrl }) {
  return (
    <div className="meal-preview-container">
      <figure>
        <img src={imgUrl} alt={name} />
        <a href="/">
          <div className="meal-title">
            <h3>{name}</h3>
          </div>
        </a>
      </figure>
    </div>
  );
}
