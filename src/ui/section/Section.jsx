import React, { useState } from 'react';
import './Section.css';

// Статические данные для примера
const carsData = {
  all: [
    { id: 1, model: 'Porsche Taycan', price: '$175,900', img: 'car1.png' },
    { id: 2, model: 'Audi R8', price: '$114,900', img: 'car2.png' },
    { id: 3, model: 'Mercedes G-Wagon', price: '$175,900', img: 'car3.png' },
    { id: 4, model: 'Porsche Cayenne', price: '$114,900', img: 'car4.png' },
    { id: 5, model: 'Audi A8', price: '$114,900', img: 'car5.png' },
    { id: 6, model: 'Mercedes S-Class', price: '$175,900', img: 'car6.png' },
    { id: 7, model: 'Porsche Panamera', price: '$114,900', img: 'car7.png' },
    { id: 8, model: 'Audi Q7', price: '$114,900', img: 'car8.png' },
    { id: 9, model: 'Porsche 911', price: '$175,900', img: 'car9.png' },
    { id: 10, model: 'Mercedes E-Class', price: '$114,900', img: 'car10.png' },
    { id: 11, model: 'Audi RS7', price: '$175,900', img: 'car11.png' },
    { id: 12, model: 'Porsche Macan', price: '$114,900', img: 'car12.png' }
  ],
  porsche: [
    { id: 1, model: 'Porsche Taycan', price: '$175,900', img: 'car1.png' },
    { id: 2, model: 'Porsche Cayenne', price: '$114,900', img: 'car4.png' },
    { id: 3, model: 'Porsche Panamera', price: '$114,900', img: 'car7.png' },
    { id: 4, model: 'Porsche 911', price: '$175,900', img: 'car9.png' },
    { id: 5, model: 'Porsche Macan', price: '$114,900', img: 'car12.png' }
  ],
  audi: [
    { id: 1, model: 'Audi R8', price: '$114,900', img: 'car2.png' },
    { id: 2, model: 'Audi A8', price: '$114,900', img: 'car5.png' },
    { id: 3, model: 'Audi Q7', price: '$114,900', img: 'car8.png' },
    { id: 4, model: 'Audi RS7', price: '$175,900', img: 'car11.png' }
  ],
  mercedes: [
    { id: 1, model: 'Mercedes G-Wagon', price: '$175,900', img: 'car3.png' },
    { id: 2, model: 'Mercedes S-Class', price: '$175,900', img: 'car6.png' },
    { id: 3, model: 'Mercedes E-Class', price: '$114,900', img: 'car10.png' }
  ]
};

const Section = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const carsToShow = carsData[selectedFilter];
  const carsPerSlide = Math.min(4, carsToShow.length); // Учитываем количество машин для отображения
  const totalSlides = Math.ceil(carsToShow.length / carsPerSlide); // Количество слайдов

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setCurrentSlide(0); // Обнуляем слайд при смене фильтра
  };

  const getVisibleCars = () => {
    const start = currentSlide * carsPerSlide;
    return carsToShow.slice(start, start + carsPerSlide);
  };

  return (
    <div className="carousel-container">
      {/* Фильтр */}
      <div className="filter-buttons">
        <button
          className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterClick('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${selectedFilter === 'porsche' ? 'active' : ''}`}
          onClick={() => handleFilterClick('porsche')}
        >
          Porsche
        </button>
        <button
          className={`filter-btn ${selectedFilter === 'audi' ? 'active' : ''}`}
          onClick={() => handleFilterClick('audi')}
        >
          Audi
        </button>
        <button
          className={`filter-btn ${selectedFilter === 'mercedes' ? 'active' : ''}`}
          onClick={() => handleFilterClick('mercedes')}
        >
          Mercedes
        </button>
      </div>

      {/* Карусель */}
      <div className="carousel">
        <div className="carousel-slides" style={{ transform: `translateX(-${(currentSlide * 100) / totalSlides}%)` }}>
          {getVisibleCars().map((car) => (
            <div key={car.id} className="carousel-slide">
              <img src={car.img} alt={car.model} />
              <h3>{car.model}</h3>
              <p>{car.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Точки */}
      <div className="carousel-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Section
