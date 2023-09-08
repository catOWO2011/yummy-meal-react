import { Link } from "react-router-dom";

import "./Category.scss";
import wrinkledRedBackground from "./../../assets/img/wrinkled-red.avif";
import kitchenClothWoodBackground from "./../../assets/img/kitchen-cloth-wood-table.avif";

export default function Category({ id, name, imgUrl }) {
  return (
    <div
      className="category-container"
      id={`C${id}`}
      style={{
        backgroundImage: `url(${
          id % 2 ? wrinkledRedBackground : kitchenClothWoodBackground
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <img src={imgUrl} alt={name} />
      {/* <p className="overlay">{name}</p> */}
      <div className="title-container">
        <Link className="title" to={"/"}>
          {name}
        </Link>
      </div>
    </div>
  );
}
