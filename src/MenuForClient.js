import React, { useState, useEffect } from 'react';
import { List, Card, Row, Col } from 'antd';
import { fetchMenu } from './firebaseFunctions';

const MenuForClient = () => {
  const [menu, setMenu] = useState([]);

  // Fetch the menu data initially
  useEffect(() => {
    const getMenuData = async () => {
      const fetchedMenu = await fetchMenu();
      setMenu(fetchedMenu);
    };
    
    getMenuData();
  }, []);

  return (
    <div>
      <h2>Günün Yemeği</h2>
      
      {/* Display menu items */}
      <List
        bordered
        dataSource={menu}
        renderItem={(item) => (
          <List.Item>
            <Card style={{ width: '100%' }}>
              <Row justify="space-between" align="middle">
                <Col>
                  <strong>{item.name}</strong> {/* Product name on the left */}
                </Col>
                <Col style={{ textAlign: 'right' }}>
                  <strong>{item.price} ₺</strong> {/* Product price on the right */}
                </Col>
              </Row>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default MenuForClient;
