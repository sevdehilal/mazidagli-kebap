import React, { useState, useEffect } from 'react';
import { Button, Input, List } from 'antd';
import { addProductToMenu, removeProductFromMenu, fetchMenu } from './firebaseFunctions';

const GunlukMenu = () => {
  const [menu, setMenu] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

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
    if (newProductName.trim() === "" || newProductPrice.trim() === "") return; // Eğer boşsa ekleme işlemini yapma
    const newProductObject = { name: newProductName, price: newProductPrice }; // Ürün adı ve fiyatını ekliyoruz
    await addProductToMenu(newProductObject); // Yeni ürünü menüye ekliyoruz
    setNewProductName(''); // Ürün adını temizliyoruz
    setNewProductPrice(''); // Ürün fiyatını temizliyoruz

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
        value={newProductName}
        onChange={(e) => setNewProductName(e.target.value)}
        placeholder="Yeni ürün adı"
      />
      <Input
        value={newProductPrice}
        onChange={(e) => setNewProductPrice(e.target.value)}
        placeholder="Fiyat"
        type="number"
      />
      <Button onClick={handleAddProduct}>Ürün Ekle</Button>
      
      <List
        bordered
        dataSource={menu}
        renderItem={(item, index) => (
          <List.Item
            actions={[<Button onClick={() => handleRemoveProduct(index)}>Sil</Button>]}
          >
            {item.name} - {item.price}₺
          </List.Item>
        )}
      />
    </div>
  );
};

export default GunlukMenu;
