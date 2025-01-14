import React from "react";
import { List } from "antd";
import "./KebapPage.css";
import KebapCard from "./KebapCard"; // Yeni bileşeni içe aktarın
import cigersis from "./img/cigersis.jpg";
import beyti from "./img/beytikebapsarma.jpg"
import patlicanlikebap from "./img/patlicanlikebap.jpg"

const kebabs = [
  { name: "Ciğer Şiş", weight: "170 gr", price: "340 TL", img: cigersis },
  { name: "Beyti Kebap", weight: "140 gr", price: "400 TL", img: beyti },
  { name: "Patlıcanlı Kebap", weight: "200 gr", price: "430 TL", img: patlicanlikebap },
  { name: "Urfa Kebap (Acısız)", weight: "120 gr", price: "320 TL", img: "https://via.placeholder.com/150" },
  { name: "Adana Kebap (Acılı)", weight: "120 gr", price: "320 TL", img: "https://via.placeholder.com/150" },
  // Diğer kebapları ekle...
];

const KebapPage = () => {
  return (
    <div className="kebap-page">
      
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={kebabs}
        renderItem={(item) => (
          <List.Item>
            <KebapCard img={item.img} name={item.name} weight={item.weight} price={item.price} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default KebapPage;
