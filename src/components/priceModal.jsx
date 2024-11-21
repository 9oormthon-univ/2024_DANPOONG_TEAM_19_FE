import React, { useState } from 'react';
import * as M from '../styles/Components/ModalStyle';
import back from '../assets/images/Home/back.svg';

const formatNumber = (number) => {
  return Number(number).toLocaleString(); 
};

const priceModal = ({ isOpen, onClose, onChange }) => {
  const [value, setValue] = useState('');

  const handleButtonClick = (num) => {
    const newValue = value + num;
    const formattedValue = formatNumber(newValue); 
    setValue(newValue);
    onChange(formattedValue); 
  };


  const handleDelete = () => {
    const newValue = value.slice(0, -1);
    const formattedValue = formatNumber(newValue);
    setValue(newValue);
    onChange(formattedValue); 
  };

  const handleClear = () => {
    setValue('');
    onChange('');
  };

  if (!isOpen) return null;

  return (
    <M.ModalOverlay onClick={onClose}>
      <M.ModalContainer onClick={(e) => e.stopPropagation()}>
        {[[1, 2, 3], [4, 5, 6], [7, 8, 9]].map((row, index) => (
          <M.ButtonRow key={index}>
            {row.map((num) => (
              <M.Button
                key={num}
                onClick={() => handleButtonClick(num.toString())}
              >
                {num}
              </M.Button>
            ))}
          </M.ButtonRow>
        ))}
        <M.ButtonRow>
          <M.Button
            onClick={handleClear}
            style={{
              whiteSpace: 'nowrap',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            전체 삭제
          </M.Button>
          <M.Button onClick={() => handleButtonClick('0')}>0</M.Button>
          <M.Button onClick={handleDelete}>
    <M.Icon src={back} alt="뒤로가기" />
  </M.Button>
        </M.ButtonRow>
        <M.ButtonWrapper>
          <M.CButton className="next" onClick={onClose}>
            완료
          </M.CButton>
        </M.ButtonWrapper>
      </M.ModalContainer>
    </M.ModalOverlay>
  );
};

export default priceModal;
