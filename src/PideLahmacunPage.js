import React from "react";
import { List } from "antd";
import "./KebapPage.css";
import KebapCard from "./KebapCard"; 
import { useNavigate } from "react-router-dom";


import kasarli from "./img/kasarlipidemazidagli.jpg";
import kiymali from "./img/kiymalipidemazidagli.jpg";
import kusbasili from "./img/kusbasikasarlimazidagli.jpg";
import karisik from "./img/karisikpidemazidagli.jpg";
import sucukluKasarlı from "./img/sucuklukasarlipidemazidagli.jpg";
import kavurmali from "./img/kavurmalikasarlipide.jpg";
import lahmacun from "./img/lahmacunmazidagli.jpg";
import findikLahmacun from "./img/findiklahmacun.jpg";
import antepLahmacun from "./img/lahmacunmazidagli.jpg";
import kasarliLahmacun from "./img/lahmacunmazidagli.jpg";

const pideLahmacunItems = [
  { name: "Karışık Pizza", price: "410 TL" },
  { name: "Kaşarlı Pide", price: "330 TL", img: kasarli },
  { name: "Kıymalı Pide", price: "330 TL", img: kiymali },
  { name: "Kuşbaşılı Pide", price: "400 TL", img: kusbasili },
  { name: "Karışık Pide", price: "400 TL", img: karisik },
  { name: "Sucuklu-Kaşarlı Pide", price: "400 TL", img: sucukluKasarlı },
  { name: "Kavurmalı Pide", price: "450 TL", img: kavurmali },
  { name: "Lahmacun", price: "140 TL", img: lahmacun },
  { name: "Fındık Lahmacun", price: "110 TL", img: findikLahmacun },
  { name: "Antep Lahmacun (soğansız)", price: "150 TL", img: antepLahmacun },
  { name: "Kaşarlı Lahmacun", price: "190 TL", img: kasarliLahmacun },
];


const PideLahmacunPage = () => {
    const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/"); // HomePage yönlendirmesi
  };
  return (
    <div className="pide-lahmacun-page">
      {/* AppBar */}
      <div className="kebap-app-bar">
        <div className="kebap-header">
          <button className="kebap-back-button" onClick={handleBackClick}>
            &#8592;
          </button>
          <div className="kebap-logo">Pide Lahmacun Çeşitleri</div>
        </div>
      </div>
      <List
        grid={{ gutter: 16, column: 1 }} // 2 sütunlu düzen için
        dataSource={pideLahmacunItems}
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

export default PideLahmacunPage;
