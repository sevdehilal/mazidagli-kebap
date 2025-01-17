import React from "react";
import { List } from "antd";
import KebapCard from "./KebapCard";
import "./KebapPage.css";

// Görsellerinizi uygun şekilde import edin
import hatayKunefeImg from "./img/hataykunefe.jpg";
import kaymakliKunefeImg from "./img/kaymaklikunefe.jpg";
import kadayifImg from "./img/kadayif.jpg";
import tahinliKabakImg from "./img/kemalpasatatlisi.jpg";
import sutlacImg from "./img/sutlacmazidagli.jpg";


const desserts = [
  { name: "Hatay Künefesi", price: "125 TL", img: hatayKunefeImg },
  { name: "Kaymaklı Künefe", price: "150 TL", img: kaymakliKunefeImg },
  { name: "Kadayıf", price: "110 TL", img: kadayifImg },
  { name: "Kemalpaşa", price: "110 TL", img: tahinliKabakImg },
  { name: "Sütlaç-Kemalpaşa", price: "110 TL", img: sutlacImg },
  { name: "Kabak Tatlısı", price: "110 TL", img: "https://i.lezzet.com.tr/images-xxlarge-recipe/kabak_tatlisi-92bdccc7-ea10-44d3-a83e-90a8ed9a9e07.jpg" },
];

const DessertsPage = () => {
  return (
    <div className="desserts-page">
      <h1 className="page-title">Tatlı Çeşitleri</h1>
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
