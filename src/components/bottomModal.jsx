import React from "react";
import * as H from "../styles/Components/bottomModalStyle";

const BottomModal = ({ isOpen, onClose, onDelete, commentId }) => {
  const handleDelete = () => {
    console.log("삭제 버튼 클릭됨"); // 로그 추가
    console.log(`전달된 commentId: ${commentId}`); // commentId 검증
    if (onDelete && commentId) {
      console.log(`onDelete 실행: commentId=${commentId}`); // onDelete 호출 확인
      onDelete(commentId);
    } else {
      console.log("onDelete가 정의되지 않았거나 commentId가 없습니다."); // 문제 확인
    }
  };

  return (
    <H.ModalOverlay onClick={onClose} isOpen={isOpen}>
      <H.ModalContent onClick={(e) => e.stopPropagation()} isOpen={isOpen}>
        <H.Button color="#EE8144" textColor="#fff">신고</H.Button>
        <H.Button color="#EE8144" textColor="#fff">수정</H.Button>
        <H.Button color="#ccc" textColor="#000" onClick={handleDelete}>
          삭제
        </H.Button>
      </H.ModalContent>
    </H.ModalOverlay>
  );
};

export default BottomModal;
