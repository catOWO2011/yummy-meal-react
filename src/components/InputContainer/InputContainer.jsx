import "./InputContainer.scss";

export default function InputContainer({ name, children }) {
  return (
    <div className="input-container">
      <div className="category-input-container">
        <div className="input-name">
          <span>{name}</span>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
