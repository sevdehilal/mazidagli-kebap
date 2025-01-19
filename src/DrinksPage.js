import React from "react";
import { List } from "antd";
import "./KebapPage.css";
import KebapCard from "./KebapCard";

// Importing drink images
import suImg from "./img/su50cl.jpg";
import ayranImg from "./img/ayran1l.jpg";
import cocaColaImg from "./img/cocacola33cl.jpg";
import limonluSodaImg from "./img/limonlusoda20cl.jpg";
import fantaImg from "./img/fanta.jpg";
import spriteImg from "./img/sprite33cl.jpg";
import litrelikColaAyranImg from "./img/cocacola1l.jpg";
import sodaImg from "./img/soda20cl.jpg";
import kucukAyranImg from "./img/ayran18cl.jpg";
import cocaCola2LtImg from "./img/cocacola2l.jpg";
import salgamImg from "./img/şalgamsuyu30cl.jpg";
import cola2_5LtImg from "./img/cocacola2.5l.jpg";

// List of drinks with their prices, weights, and images
const drinks = [
  { name: "Su", weight: "15 TL", price: "15 TL", img: suImg },
  { name: "Ayran (278 ml)", weight: "40 TL", price: "40 TL", img: ayranImg },
  { name: "Coca Cola", weight: "60 TL", price: "60 TL", img: cocaColaImg },
  { name: "Limonlu Soda", weight: "30 TL", price: "30 TL", img: limonluSodaImg },
  { name: "Meyve Suyu-Fanta", weight: "60 TL", price: "60 TL", img: fantaImg },
  { name: "Sprite (Gazoz)", weight: "60 TL", price: "60 TL", img: spriteImg },
  { name: "Litrelik Cola-Ayran", weight: "100 TL", price: "100 TL", img: litrelikColaAyranImg },
  { name: "Soda", weight: "25 TL", price: "25 TL", img: sodaImg },
  { name: "Küçük Ayran (180ml)", weight: "35 TL", price: "35 TL", img: kucukAyranImg },
  { name: "2 Lt. Coca Cola", weight: "110 TL", price: "110 TL", img: cocaCola2LtImg },
  { name: "Şalgam", weight: "50 TL", price: "50 TL", img: salgamImg },
  { name: "2,5 Litre Cola", weight: "120 TL", price: "120 TL", img: cola2_5LtImg },
  { name: "Çay (İlk çay ikramdır)", weight: "15 TL", price: "15 TL", img: "https://www.tokatliva.com/image/cache/catalog/AA1/sicaklar/cay-1080x1350.jpg"}
];

const DrinksPage = () => {
  return (
    <div className="kebap-page">
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={drinks}
        renderItem={(item) => (
          <List.Item>
            <KebapCard
              img={item.img}
              name={item.name}
              weight={item.weight}
              price={item.price}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default DrinksPage;
