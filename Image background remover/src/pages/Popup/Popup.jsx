import './Popup.css';
import React, { useState } from 'react';

const Popup = () => {
  const [base64Image, setBase64Image] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target.result;
        setBase64Image(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const createtab = () => {
    chrome.runtime.sendMessage({ action: 'received', file: base64Image });
  };

  return (
    <div className="popup-container">
    <h1>Image background Remover</h1>
      <label htmlFor="img">Select image:</label>
      <input
        type="file"
        id="img"
        name="img"
        accept="image/*"
        onChange={handleFileChange}
      />
      <button onClick={createtab}>Submit</button>
    </div>
  );
};

export default Popup;
