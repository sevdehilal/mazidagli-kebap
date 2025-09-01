import React from "react";
import { List } from "antd";
import "./KebapPage.css";
import KebapCard from "./KebapCard"; 
import { useNavigate } from "react-router-dom";
import pidedoner from "./img/pidedoner.jpg";
import iskender from "./img/iskendermazidagli.jpg";
import donerporsiyon from "./img/etdonermazidagli.jpg";
import aziskender from "./img/iskendermazidagli.jpg";
import pilavustudoner from "./img/pilavustudoner.jpg";
import donerdurum from "./img/etdonerdurum.jpg";
import yarimekmek from "./img/yarimekmek.jpg";
import tamekmek from "./img/tamekmek.jpg";

const doners = [
  
  { name: "Pide Döner", weight: "70 gr", price: "240 TL", img: pidedoner },
  { name: "İskender Kebap", weight: "120 gr", price: "430 TL", img: iskender },
  { name: "Döner Porsiyon", weight: "120 gr", price: "400 TL", img: donerporsiyon },
  { name: "Az İskender", weight: "90 gr", price: "350 TL", img: aziskender },
  { name: "Pilavüstü Döner", weight: "120 gr", price: "420 TL", img: pilavustudoner },
  { name: "Döner Dürüm", weight: "100 gr", price: "340 TL", img: donerdurum },
  { name: "Yarım Ekmek", weight: "70 gr", price: "240 TL", img: yarimekmek },
  { name: "Tam Ekmek / Üç Çeyrek", weight: "100 gr", price: "350 TL", img: tamekmek },
];

  

const DonerPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/"); // HomePage yönlendirmesi
  };

  return (
    <div >
        {/* AppBar */}
      <div className="kebap-app-bar">
        <div className="kebap-header">
          <button className="kebap-back-button" onClick={handleBackClick}>
            &#8592;
          </button>
          <div className="kebap-logo">Döner Çeşitleri</div>
        </div>
      </div>
      
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={doners}
        renderItem={(item) => (
          <List.Item>
            <KebapCard img={item.img} name={item.name} weight={item.weight} price={item.price} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default DonerPage;
