import React, { useState } from 'react';
import './Headeer.css';
import ModalWindow from '../ModalWindow/ModalWindow'

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <header>
      <div className="menu">
        <a>About me</a>
        <a>Services</a>
        <a>Portfolio</a>
        <a>Testimonials</a>
        <a>Guarantees</a>
      </div>

      <button onClick={handleOpenModal} className="btn">Contact</button>
      <ModalWindow show={showModal} onClose={handleCloseModal}>
        <h2 style={{ color: "#4824ff", fontSize: "40px", marginBlock: "5%" }}>Contacts</h2>
        <p style={{ fontSize: "22px" }}>You can contact me in Telegram <br/> or Instagram 👇</p>
      </ModalWindow>

      <a href="https://t.me/codorum" target="_blank" className="icon telegram"></a>
      <a href="https://t.me/codorum" target="_blank" className="icon instagram"></a>

      <div className="switch">
        <div className="theme light">
        </div>
      </div>
    </header>
  )
}

export default Header;