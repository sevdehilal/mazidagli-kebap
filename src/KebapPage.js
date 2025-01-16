import React from "react";
import { List } from "antd";
import "./KebapPage.css";
import KebapCard from "./KebapCard"; // Yeni bileşeni içe aktarın
import cigersis from "./img/cigersis.jpg";
import beyti from "./img/beytikebapsarma.jpg";
import patlicanlikebap from "./img/patlicanlikebap.jpg";
import urfakebap from "./img/urfakebap.jpg";
import adanakebap from "./img/adanakebap.jpg";
import kuzusis from "./img/kuzusis.jpg";
import tavuksis from "./img/tavuksis.jpg";
import tavukpirzola from "./img/tavukpirzola.jpg";
import tavukbiftek from "./img/tavukbiftek.jpg";
import tavukkanat from "./img/tavukkanat.jpg";
import karisikkebap from "./img/karisikkebap.jpg";
import domateslikebap from "./img/domateslikebap.jpg";

import alinazikkebap from "./img/alinazikkebap.jpg";
import halepisi from "./img/halepisi.jpg";
import kilistava from "./img/kilistava.jpg";
import tavukdurum from "./img/tavukdurum.jpg";
import adanaurfadurum from "./img/adanaurfadurum.jpg";
import guveckusbasi from "./img/guveckusbasi.jpg";
import guveckiymali from "./img/guveckiymali.jpg";
import izgarakofte from "./img/izgarakofte.jpg";
import yarimekmekkofte from "./img/yarimekmekkofte.jpg";



const kebabs = [
  { name: "Ciğer Şiş", weight: "170 gr", price: "340 TL", img: cigersis },
  { name: "Beyti Kebap", weight: "140 gr", price: "400 TL", img: beyti },
  { name: "Patlıcanlı Kebap", weight: "200 gr", price: "430 TL", img: patlicanlikebap },
  { name: "Urfa Kebap", weight: "120 gr", price: "320 TL", img: urfakebap },
  { name: "Adana Kebap (Acılı)", weight: "120 gr", price: "320 TL", img: adanakebap },
  { name: "Kuzu Şiş (Çöp Şiş 430₺)", weight: "180 gr", price: "420 TL", img: kuzusis },
  { name: "Tavuk Şiş", weight: "190 gr", price: "300 TL", img: tavuksis },
  { name: "Tavuk Pirzola", weight: "220 gr", price: "330 TL", img: tavukpirzola },
  { name: "Izgara Tavuk Biftek", weight: "160 gr", price: "300 TL", img: tavukbiftek },
  { name: "Tavuk Kanat (Uç Kanat 320₺)", weight: "-", price: "310 TL", img: tavukkanat },
  { name: "Karışık Kebap", weight: "-", price: "790 TL", img: karisikkebap },
  { name: "Domatesli Kebap", weight: "160 gr", price: "400 TL", img: domateslikebap },
  { name: "Ezmeli Kebap", weight: "120 gr", price: "400 TL", img: "https://static.wixstatic.com/media/c0d8ea_6018f5ee486646a7badad0b5051ba1f4~mv2.jpg/v1/fill/w_480,h_476,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c0d8ea_6018f5ee486646a7badad0b5051ba1f4~mv2.jpg" },
  { name: "Ali Nazik Kebap", weight: "120 gr", price: "400 TL", img: alinazikkebap },
  { name: "Halep İşi", weight: "120 gr", price: "400 TL", img: halepisi },
  { name: "Kilis Tava", weight: "-", price: "350 TL", img: kilistava },
  { name: "Tavuk Dürüm", weight: "-", price: "280 TL", img: tavukdurum },
  { name: "Adana / Urfa Dürüm", weight: "-", price: "280 TL", img: adanaurfadurum },
  { name: "Güveç Kuşbaşı", weight: "-", price: "350 TL", img: guveckusbasi },
  { name: "Güveç Kıymalı", weight: "-", price: "350 TL" ,img: guveckiymali },
  { name: "Izgara Köfte", weight: "-", price: "300 TL", img: izgarakofte },
  { name: "Yarım Ekmek Köfte", weight: "-", price: "200 TL", img: yarimekmekkofte },
  { name: "Mazıdağlı Special", weight: "-", price: "790 TL" }
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
