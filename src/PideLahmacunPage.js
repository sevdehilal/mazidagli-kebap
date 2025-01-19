import React from "react";
import { List } from "antd";
import "./KebapPage.css";
import KebapCard from "./KebapCard"; 



import kasarli from "./img/kasarlipidemazidagli.jpg";
import kiymali from "./img/kiymalipidemazidagli.jpg";
import kusbasili from "./img/kusbasikasarlimazidagli.jpg";
import karisik from "./img/karisikpidemazidagli.jpg";
import sucukluKasarlı from "./img/sucuklukasarlipidemazidagli.jpg";
import kavurmali from "./img/kavurmalikasarlipide.jpg";
import lahmacun from "./img/lahmacunmazidagli.jpg";
import findikLahmacun from "./img/lahmacunmazidagli.jpg";
import antepLahmacun from "./img/lahmacunmazidagli.jpg";
import kasarliLahmacun from "./img/lahmacunmazidagli.jpg";

const pideLahmacunItems = [
  { name: "Karışık Pizza", price: "330 TL"},
  { name: "Kaşarlı", price: "270 TL", img: kasarli },
  { name: "Kıymalı", price: "270 TL", img: kiymali },
  { name: "Kuşbaşılı", price: "320 TL", img: kusbasili },
  { name: "Karışık", price: "320 TL", img: karisik },
  { name: "Sucuklu-Kaşarlı", price: "320 TL", img: sucukluKasarlı },
  { name: "Kavurmalı", price: "350 TL", img: kavurmali },
  { name: "Lahmacun (1,5 lahmacun = 175₺)", price: "115 TL", img: lahmacun },
  { name: "Fındık Lahmacun", price: "85 TL", img: findikLahmacun },
  { name: "Antep Lahmacun (soğansız)", price: "125 TL", img: antepLahmacun },
  { name: "Kaşarlı Lahmacun", price: "150 TL", img: kasarliLahmacun },
];

const PideLahmacunPage = () => {
  return (
    <div className="pide-lahmacun-page">
      <h1 className="page-title">Pide & Lahmacun Çeşitleri</h1>
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
