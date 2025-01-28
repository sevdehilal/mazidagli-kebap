import React, { useState } from "react";
import { Card, Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";
import kebap from "./img/kebapcesitlerimazidagli.jpg";
import pide from "./img/pidelahmacuncesitlerimazidagli.jpg";
import karisiksalata from "./img/karisiksalata.jpg";
import sutlac from "./img/sutlacmazidagli.jpg";
import { UserOutlined } from '@ant-design/icons';
import "./HomePage.css";

const { Meta } = Card;

const categories = [
  { title: "Dönerler", img: "https://inbursa.com.tr/wp-content/uploads/2024/12/iskender.webp", key: "doner" },
  { title: "Kebaplar", img: kebap, key: "kebap" },
  { title: "Pide & Lahmacun", img: pide, key: "pideler" },
  { title: "Salatalar", img: "https://cf.kizlarsoruyor.com/q9794022/784b56c1-56e8-4fad-8e2c-311c73aa15eb.jpg", key: "salatalar" },
  { title: "Tatlılar", img: sutlac, key: "tatlilar" },
  { title: "Meşrubatlar", img: "https://festivalkafe.com/wp-content/uploads/2023/12/1353082343-kopya-1024x576.jpg", key: "mesrubatlar" },
  
  { title: "Günün Yemeği", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPkLQyEbxLKN3GKUC9L9ccSXJKMvojoAy-OVUm7J-BpuAyD6FtdCds7KDX_mMH1tPXztY&usqp=CAU", key: "gunluk-menu-client" },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleCardClick = (key) => {
    navigate(`/${key}`);
  };
  const handleLoginClick = () => {
    navigate("/login"); // Login sayfasına yönlendirme
  };

  return (
    <div className="home-page">
      {/* AppBar */}
      <div className="app-bar">
        <div className="logo">
          <div className="logo-title">MAZIDAĞLI</div>
          <div className="logo-subtitle">Kebap Lahmacun Salonu</div>
        </div>
        <div className="login-icon" onClick={handleLoginClick}>
          <UserOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
        </div>
      </div>

      {/* Günlük Menü */}
      <div className="daily-menu-section">
        <Card
          hoverable
          className="daily-menu-card"
          cover={
            <img
              alt="Günün Yemeği"
              src="https://via.placeholder.com/800x400?text=Günlük+Menü"
            />
          }
          onClick={() => handleCardClick("gunluk-menu-client")}
        >
          <Meta title="Günün Yemeği" />
        </Card>
      </div>

      {/* Diğer Kategoriler */}
      <Row gutter={[16, 16]}>
        {categories
          .filter((category) => category.key !== "gunluk-menu-client")
          .map((category) => (
            <Col xs={12} sm={12} md={12} key={category.key}>
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
