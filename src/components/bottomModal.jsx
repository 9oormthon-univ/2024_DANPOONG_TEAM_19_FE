import React from "react";
import * as H from "../styles/Components/bottomModalStyle";

const BottomModal = ({ isOpen, onClose }) => {
  return (
    <H.ModalOverlay onClick={onClose} isOpen={isOpen}>
      <H.ModalContent onClick={(e) => e.stopPropagation()} isOpen={isOpen}>
        <H.Button color="#EE8144" textColor="#fff">신고</H.Button>
        <H.Button color="#EE8144" textColor="#fff">수정</H.Button>
        <H.Button color="#ccc" textColor="#000">삭제</H.Button>
      </H.ModalContent>
    </H.ModalOverlay>
  );
};

export default BottomModal;
