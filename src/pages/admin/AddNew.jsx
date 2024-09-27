import React, { useState } from "react";
import "./AddNew.css";
import { BiImageAdd } from "react-icons/bi";

const AddNew = () => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    description: "",
    year: "",
    mileage: "",
    bodyType: "",
    steering: "",
    price: "",
    engine: "",
    condition: "",
    transmission: "",
    color: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      images: [...e.target.files],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена", formData);
  };

  return (
    
    <div className="form-container">
        <div className="vertex">
        <h3 className="form-title">Марка и модель</h3>

        <div className="image-grid">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="image-placeholder">
              <BiImageAdd />
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <hr className="hrx" />
          <h3 className="padin"> Добавить обзор активности</h3>

          <div className="fless">
            <div>
              <div className="form-group">
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="Марка"
                  className="form-input"
                />
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="Модель"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Описание"
                  className="form-texts"
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="Год выпуска"
                  className="form-input"
                />
                <input
                  type="number"
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                  placeholder="Введите пробег (км.)"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="bodyType"
                  value={formData.bodyType}
                  onChange={handleChange}
                  placeholder="Кузов"
                  className="form-input"
                />
                <input
                  type="text"
                  name="steering"
                  value={formData.steering}
                  onChange={handleChange}
                  placeholder="Руль"
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <div className="form-groupe">
                <button className="download">Загрузите изображение</button>
                <p className="gif">
                Допустимые форматы : PNG , GIF , WEBP ,MP3 , and MP4{" "}
                </p>
              </div>

              <div className="form-group">  
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Цена"
                  className="form-input"
                />
                <input
                  type="text"
                  name="engine"
                  value={formData.engine}
                  onChange={handleChange}
                  placeholder="Двигатель"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  placeholder="Состояние"
                  className="form-input"
                />
                <input
                  type="text"
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleChange}
                  placeholder="Коробка передач"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  placeholder="Цвет"
                  className="form-input"
                />
              </div>
            </div>
          </div>
          <div className="form-buttons">
            <button type="button" className="form-button secondary">
              Назад
            </button>
            <button type="submit" className="form-button primary">
              Сохранить и опубликовать
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNew;
