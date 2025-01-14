import React from "react";
import { Card } from "antd";
import "./KebapCard.css"; // Özel CSS dosyası

const KebapCard = ({ img, name, weight, price }) => {
  return (
    <Card hoverable>
      <div className="kebap-card">
        <img src={img} alt={name} className="kebap-img" />
        <div className="kebap-info">
          <h3>{name}</h3>
          <p>{weight}</p>
        </div>
        <div className="kebap-price">{price}</div>
      </div>
    </Card>
  );
};

export default KebapCard;
