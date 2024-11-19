import React, { useState } from 'react';
import * as M from '../styles/Components/ModalStyle';
import back from '../assets/images/Home/back.svg';

const Modal = ({ isOpen, onClose, onChange }) => {
  const [value, setValue] = useState('');

  const handleButtonClick = (num) => {
    const newValue = value + num;
    setValue(newValue);
    onChange(newValue);
  };

  const handleDelete = () => {
    const newValue = value.slice(0, -1);
    setValue(newValue);
    onChange(newValue);
  };

  const handleClear = () => {
    setValue('');
    onChange('');
  };

  if (!isOpen) return null;

  return (
    <M.ModalOverlay onClick={onClose}>
      <M.ModalContainer onClick={e => e.stopPropagation()}>
        {[[1, 2, 3], [4, 5, 6], [7, 8, 9]].map((row, index) => (
          <M.ButtonRow key={index}>
            {row.map(num => (
              <M.Button key={num} onClick={() => handleButtonClick(num.toString())}>
                {num}
              </M.Button>
            ))}
          </M.ButtonRow>
        ))}
        <M.ButtonRow>
          <M.Button onClick={handleClear}>전체 삭제</M.Button>
          <M.Button onClick={() => handleButtonClick('0')}>0</M.Button>
          <M.Button onClick={handleDelete} style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover' }}>
            {/* Optionally, use an <img> tag if needed */}
            {/* <img src={back} alt="Back" style={{ width: '100%', height: '100%' }} /> */}
          </M.Button>
        </M.ButtonRow>
      </M.ModalContainer>
    </M.ModalOverlay>
  );
};

export default Modal;
