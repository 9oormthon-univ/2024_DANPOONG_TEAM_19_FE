import React from "react";
import { useNavigate } from "react-router-dom";
import * as B from "../styles/Components/BackStyle"; 
import backIcon from "../assets/images/Login/back.png"; 

function Back() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <B.BackButton onClick={handleBack}>
      <B.BackImage src={backIcon} alt="뒤로 가기" />
    </B.BackButton>
  );
}

export default Back;
