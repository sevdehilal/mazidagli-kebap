import React from "react";
import { List } from "antd";
import KebapCard from "./KebapCard";
import "./KebapPage.css";
import { useNavigate } from "react-router-dom";

// Görsellerinizi uygun şekilde import edin
import tavukluSalataImg from "./img/tavuklusalata.jpg";
import cobanSalataImg from "./img/cobansalata.jpg";
import ezmeSalataImg from "./img/ezme.jpg";
import karisikSalataImg from "./img/karisiksalata.jpg";
import yogurtImg from "./img/yogurt.jpg";

const salataItems = [
  { name: "Tavuklu Salata", price: "330 TL", img: tavukluSalataImg },
  { name: "Çoban Salata", price: "110 TL", img: cobanSalataImg },
  { name: "Ezme Salata", price: "110 TL", img: ezmeSalataImg },
  { name: "Karışık Salata", price: "110 TL", img: karisikSalataImg },
  { name: "Göbek Salata", price: "110 TL"},
  { name: "Cacık", price: "100 TL"},
  { name: "Yoğurt", price: "50 TL", img: yogurtImg },
];

const SalatalarPage = () => {
    const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/"); // HomePage yönlendirmesi
  };
  return (
    <div className="salatalar-page">
      {/* AppBar */}
      <div className="kebap-app-bar">
        <div className="kebap-header">
          <button className="kebap-back-button" onClick={handleBackClick}>
            &#8592;
          </button>
          <div className="kebap-logo">Salatalar</div>
        </div>
      </div>
      <List
        grid={{ gutter: 16, column: 1 }} // 2 sütunlu düzen
        dataSource={salataItems}
        renderItem={(item) => (
          <List.Item>
            <KebapCard
              img={item.img}
              name={item.name}
              price={item.price}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default SalatalarPage;
