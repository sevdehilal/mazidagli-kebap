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
  { title: "Salatalar", img: karisiksalata, key: "salatalar" },
  { title: "Tatlılar", img: sutlac, key: "tatlilar" },
  { title: "Meşrubatlar", img: "ghttps://www.ustadonerci.com/media/products/durum-et-doner_b.pn", key: "mesrubatlar" },
];

const HomePage = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

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
        <div className="logo">Mazıdağlı Kebap Lahmacun</div>
        <Button
          type="primary"
          icon={<MenuOutlined />}
          className="menu-button"
          onClick={toggleDrawer}
        />
      </div>

      {/* Drawer for Small Screens */}
      <Drawer
        title="Menü"
        placement="right"
        onClose={toggleDrawer}
        visible={drawerVisible}
      >
        <Menu>
          <Menu.Item key="doner">Döner</Menu.Item>
          <Menu.Item key="kebap">Kebap</Menu.Item>
          <Menu.Item key="pideler">Pideler</Menu.Item>
        </Menu>
      </Drawer>

      {/* Content */}
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