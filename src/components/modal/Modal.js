import React from "react";
// Modal management component
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <section className="modal-content">
        <h2>Employee Created</h2>
        <button onClick={onClose} className="modal-close-button">Close</button>
      </section>
    </div>
  );
};

export default Modal;
