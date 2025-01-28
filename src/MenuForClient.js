// MenuForClient.js

import React, { useState, useEffect } from 'react';
import { List, Card } from 'antd';
import { fetchMenu } from './firebaseFunctions';

const MenuForClient = () => {
  const [menu, setMenu] = useState([]);

  // Menü verisini başta çekiyoruz
  useEffect(() => {
    const getMenuData = async () => {
      const fetchedMenu = await fetchMenu();
      setMenu(fetchedMenu);
    };
    
    getMenuData();
  }, []);

  return (
    <div>
      <h2>Günlük Menü</h2>
      
      {/* Menü öğelerini listeliyoruz */}
      <List
        bordered
        dataSource={menu}
        renderItem={(item) => (
          <List.Item>
            <Card>{item.name}</Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default MenuForClient;
