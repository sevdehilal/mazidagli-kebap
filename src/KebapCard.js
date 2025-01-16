import React, { useState } from "react";
import { Card, Modal } from "antd";
import "./KebapCard.css"; // Özel CSS dosyası

const KebapCard = ({ img, name, weight, price }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Modal'ı açma
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Modal'ı kapatma
  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Card hoverable>
        <div className="kebap-card">
          {/* Resme tıklama ile modal açılır */}
          <img
            src={img}
            alt={name}
            className="kebap-img"
            onClick={showModal}
            style={{ cursor: "pointer" }}
          />
          <div className="kebap-info">
            <h3>{name}</h3>
            <p>{weight}</p>
          </div>
          <div className="kebap-price">{price}</div>
        </div>
      </Card>

      {/* Modal */}
      <Modal
        open={isModalVisible}
        footer={null} // Alt kısmı kaldır
        onCancel={handleClose} // Modal'ı kapatma
        centered // Ortalanmış modal
        width="80%" // Modal genişliği
      >
        {/* Modal içeriği: Resim tam ekran */}
        <img
          src={img}
          alt={name}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
      </Modal>
    </>
  );
};

export default KebapCard;
