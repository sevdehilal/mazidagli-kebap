import React, { useState } from "react";
import { Card, Row, Col, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import kebap from "./img/kebapcesitlerimazidagli.jpg";
import pide from "./img/pidelahmacuncesitlerimazidagli.jpg";
import karisiksalata from "./img/karisiksalata.jpg";
import sutlac from "./img/sutlacmazidagli.jpg";
const { Meta } = Card;

const categories = [
  { title: "Dönerler", img: "https://inbursa.com.tr/wp-content/uploads/2024/12/iskender.webp", key: "doner" },
  { title: "Kebaplar", img: kebap, key: "kebap" },
  { title: "Pide & Lahmacun", img: pide , key: "pideler" },
  { title: "Salatalar", img: "https://cf.kizlarsoruyor.com/q9794022/784b56c1-56e8-4fad-8e2c-311c73aa15eb.jpg", key: "salatalar" },
  { title: "Tatlılar", img: sutlac, key: "tatlilar" },
  { title: "Meşrubatlar", img: "https://festivalkafe.com/wp-content/uploads/2023/12/1353082343-kopya-1024x576.jpg", key: "mesrubatlar" },
];

const HomePage = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate();

  

  const handleCardClick = (key) => {
    if (key === "kebap") {
      navigate("/kebap");
    }

    else if (key === "doner") {
      navigate("/doner");
    }

    else if (key === "pideler") {
      navigate("/pideler");
    }
    else if (key === "salatalar") {
      navigate("/salatalar");
    }
    else if (key === "tatlilar") {
      navigate("/tatlilar");
    }

    else if (key === "mesrubatlar") {
      navigate("/mesrubatlar");
    }

  };

  return (
    <div className="home-page">
      {/* AppBar */}
      <div className="app-bar">
        <div className="logo">
          <div className="logo-title">MAZIDAĞLI</div>
          <div className="logo-subtitle">Kebap Lahmacun Salonu</div>
        </div>
      </div>


      <Row gutter={[16, 16]}>
        {categories.map((category) => (
          <Col xs={12} sm={12} md={6} key={category.key}>
            <Card
              hoverable
              cover={<img alt={category.title} src={category.img} />}
              onClick={() => handleCardClick(category.key)}
            >
              <Meta title={category.title} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;