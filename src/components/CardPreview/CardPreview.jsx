import { useEffect, useMemo, useRef, useState } from "react";

import "./CardPreview.scss";

const useOnScreen = (elementRef) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      }),
    [elementRef]
  );

  useEffect(() => {
    observer.observe(elementRef.current);
    return () => observer.disconnect();
  });

  return isIntersecting;
};

const CardPreview = ({ id, cardTitle, imageUrl }) => {
  const divRef = useRef(null);
  const isVisible = useOnScreen(divRef);

  return (
    <div id={`cp-${id}`} className="card-preview-container">
      <div
        className={`card-preview ${isVisible ? "fadeInRight" : ""}`}
        ref={divRef}
      >
        <div className="title-container">
          <span className="title">{cardTitle}</span>
        </div>
        <img src={imageUrl} alt="meal-categories" />
      </div>
    </div>
  );
};

export default CardPreview;
