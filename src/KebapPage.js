import React from "react";
import { List, Card } from "antd";
import "./KebapPage.css";
import cigersis from "./img/cigersis.jpg";

const kebabs = [
  { name: "Ciğer Şiş", weight: "170 gr", price: "340 TL", img: cigersis },
  { name: "Beyti Kebap", weight: "140 gr", price: "400 TL", img: "https://via.placeholder.com/150" },
  { name: "Patlıcanlı Kebap", weight: "200 gr", price: "430 TL", img: "https://via.placeholder.com/150" },
  { name: "Urfa Kebap (Acısız)", weight: "120 gr", price: "320 TL", img: "https://via.placeholder.com/150" },
  { name: "Adana Kebap (Acılı)", weight: "120 gr", price: "320 TL", img: "https://via.placeholder.com/150" },
  // Diğer kebapları ekle...
];

const KebapPage = () => {
  return (
    <div className="kebap-page">
      <h1>Kebap Çeşitleri</h1>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={kebabs}
        renderItem={(item) => (
          <List.Item>
            <Card hoverable>
              <div className="kebap-card">
                <img src={item.img} alt={item.name} className="kebap-img" />
                <div className="kebap-info">
                  <h3>{item.name}</h3>
                  <p>{item.weight}</p>
                </div>
                <div className="kebap-price">{item.price}</div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default KebapPage;
