import { useState } from "react";
import "./Indicator.css";

export const Indicator = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderComingSoon = (index) => {
    console.log(`Скоро будет доступно: элемент под индексом ${index}`);
  };

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    renderComingSoon(index);
  };

  return (
    <div>
      <div className="random-btn">
        {[0, 1, 2].map((_, index) => (
          <div
            key={index}
            className={`random-next ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleButtonClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
