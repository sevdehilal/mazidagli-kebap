import React from "react";
import { List } from "antd";
import KebapCard from "./KebapCard";
import "./KebapPage.css";
import { useNavigate } from "react-router-dom";
// Görsellerinizi uygun şekilde import edin
import hatayKunefeImg from "./img/hataykunefe.jpg";
import kaymakliKunefeImg from "./img/kaymaklikunefe.jpg";
import kadayif from "./img/kadayifmazidagli.jpg";
import tahinliKabakImg from "./img/kemalpasamazidagli.jpg";
import sutlacImg from "./img/sutlacmazidagli.jpg";


const desserts = [
  { name: "Hatay Künefesi", price: "150 TL", img: hatayKunefeImg },
  { name: "Kaymaklı Künefe", price: "200 TL", img: kaymakliKunefeImg },
  { name: "Kadayıf", price: "140 TL", img: kadayif },
  { name: "Tahinli Kabak", price: "140 TL", img: tahinliKabakImg },
  { name: "Sütlaç-Kemalpaşa", price: "140 TL", img: sutlacImg },
  { name: "Kabak Tatlısı", price: "140 TL", img: "https://i.lezzet.com.tr/images-xxlarge-recipe/kabak_tatlisi-92bdccc7-ea10-44d3-a83e-90a8ed9a9e07.jpg" },
];


const DessertsPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/"); // HomePage yönlendirmesi
  };

  return (
    <div className="desserts-page">
      {/* AppBar */}
      <div className="kebap-app-bar">
        <div className="kebap-header">
          <button className="kebap-back-button" onClick={handleBackClick}>
            &#8592;
          </button>
          <div className="kebap-logo">Tatlılar</div>
        </div>
      </div>
      <List
        grid={{ gutter: 16, column: 1 }} // Liste görünümü için 1 sütun
        dataSource={desserts}
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

export default DessertsPage;
