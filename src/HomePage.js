import React, { useState } from "react";
import { Card, Row, Col, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const categories = [
  { title: "Döner", img: "https://www.ustadonerci.com/media/products/durum-et-doner_b.png", key: "doner" },
  { title: "Kebap", img: "https://images.deliveryhero.io/image/fd-tr/Products/66161844.jpg??width=800", key: "kebap" },
  { title: "Pideler", img: "https://www.ustadonerci.com/media/products/durum-et-doner_b.png", key: "pideler" },
  { title: "Salatalar", img: "https://www.ustadonerci.com/media/products/durum-et-doner_b.png", key: "salatalar" },
  { title: "Tatlılar", img: "https://www.ustadonerci.com/media/products/durum-et-doner_b.png", key: "tatlilar" },
  { title: "Meşrubatlar", img: "https://www.ustadonerci.com/media/products/durum-et-doner_b.png", key: "mesrubatlar" },
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