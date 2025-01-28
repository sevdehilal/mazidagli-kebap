// GunlukMenu.js

import React, { useState, useEffect } from 'react';
import { Button, Input, List } from 'antd';
import { addProductToMenu, removeProductFromMenu, fetchMenu, saveMenu } from './firebaseFunctions';

const GunlukMenu = () => {
  const [menu, setMenu] = useState([]);
  const [newProduct, setNewProduct] = useState('');

  // Menü verisini başta çekiyoruz
  useEffect(() => {
    const getMenuData = async () => {
      const fetchedMenu = await fetchMenu();
      setMenu(fetchedMenu);
    };
    
    getMenuData();
  }, []);

  // Ürün ekleme işlemi
  const handleAddProduct = async () => {
    if (newProduct.trim() === "") return; // Eğer boşsa ekleme işlemini yapma
    const newProductObject = { name: newProduct }; // Basit bir ürün ekleme
    await addProductToMenu(newProductObject); // Yeni ürünü menüye ekliyoruz
    setNewProduct(''); // Input alanını temizliyoruz

    // Menü verisini yeniden alıyoruz
    const updatedMenu = await fetchMenu();
    setMenu(updatedMenu);
  };

  // Ürün silme işlemi
  const handleRemoveProduct = async (index) => {
    await removeProductFromMenu(index); // Ürünü menüden siliyoruz

    // Menü verisini yeniden alıyoruz
    const updatedMenu = await fetchMenu();
    setMenu(updatedMenu);
  };

  return (
    <div>
      <h2>Günlük Menü Yönetimi</h2>
      
      <Input
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
        placeholder="Yeni ürün ekleyin"
      />
      <Button onClick={handleAddProduct}>Ürün Ekle</Button>
      
      <List
        bordered
        dataSource={menu}
        renderItem={(item, index) => (
          <List.Item
            actions={[<Button onClick={() => handleRemoveProduct(index)}>Sil</Button>]}
          >
            {item.name}
          </List.Item>
        )}
      />
    </div>
  );
};

export default GunlukMenu;
