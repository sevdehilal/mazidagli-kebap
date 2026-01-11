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
  { name: "Karışık Pizza", price: "470 TL" },
  { name: "Kaşarlı", price: "360 TL", img: kasarli },
  { name: "Kıymalı", price: "380 TL", img: kiymali },
  { name: "Kuşbaşılı", price: "450 TL", img: kusbasili },
  { name: "Karışık", price: "450 TL", img: karisik },
  { name: "Sucuklu-Kaşarlı", price: "450 TL", img: sucukluKasarlı },
  { name: "Kavurmalı", price: "500 TL", img: kavurmali },
  { name: "Lahmacun", price: "160 TL", img: lahmacun },
  { name: "Fındık Lahmacun", price: "120 TL", img: findikLahmacun },
  { name: "Antep Lahmacun (soğansız)", price: "170 TL", img: antepLahmacun },
  { name: "Kaşarlı Lahmacun", price: "190 TL", img: kasarliLahmacun }
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
