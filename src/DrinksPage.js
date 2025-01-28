import React from "react";
import { List } from "antd";
import "./KebapPage.css";
import KebapCard from "./KebapCard";
import { useNavigate } from "react-router-dom";

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
import salgamImg from "./img/doganaysalgam.jpg";
import cola2_5LtImg from "./img/cocacola2.5l.jpg";

// List of drinks with their prices, weights, and images
const drinks = [
    { name: "Su", price: "15 TL", img: suImg },
    { name: "Ayran (278 ml)", price: "40 TL", img: "https://marketkarsilastir.com/urunler/8690158121089.jpg" },
    { name: "Coca Cola", price: "60 TL", img: cocaColaImg },
    { name: "Limonlu Soda", price: "30 TL", img: limonluSodaImg },
    { name: "Meyve Suyu-Fanta", price: "60 TL", img: fantaImg },
    { name: "Sprite (Gazoz)", price: "60 TL", img: spriteImg },
    { name: "Litrelik Cola-Ayran", price: "100 TL", img: litrelikColaAyranImg },
    { name: "Soda", price: "25 TL", img: sodaImg },
    { name: "Küçük Ayran (180ml)", price: "35 TL", img: "https://migrostoptanstr01.blob.core.windows.net/toptanimgs/11559379.jpg" },
    { name: "2 Lt. Coca Cola", price: "110 TL", img: cocaCola2LtImg },
    { name: "Şalgam", price: "50 TL", img: salgamImg },
    { name: "2,5 Litre Cola", price: "120 TL", img: cola2_5LtImg },
    { name: "Çay (İlk çay ikramdır)", price: "15 TL", img: "https://www.tokatliva.com/image/cache/catalog/AA1/sicaklar/cay-1080x1350.jpg" }
  ];
  

const DrinksPage = () => {
    const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/"); // HomePage yönlendirmesi
  };
  return (
    <div className="kebap-page">
        {/* AppBar */}
      <div className="kebap-app-bar">
        <div className="kebap-header">
          <button className="kebap-back-button" onClick={handleBackClick}>
            &#8592;
          </button>
          <div className="kebap-logo">İçecekler</div>
        </div>
      </div>
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
