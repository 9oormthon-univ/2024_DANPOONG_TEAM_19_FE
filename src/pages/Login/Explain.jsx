import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as EX from "../../styles/Login/ExplainStyle";
import Explain1 from "../../assets/images/Login/explain1.png";
import Explain2 from "../../assets/images/Login/explain2.png";
import Explain3 from "../../assets/images/Login/explain3.png";
import Jump from "../../assets/images/Login/jump.png";

function Explain() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const images = [Explain1, Explain2, Explain3];

  const handleClick = () => {
    if (currentStep < images.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      navigate("/firstpage");
    }
  };

  const handleJump = () => {
    navigate("/firstpage");
  };

  return (
    <EX.ImageContainer onClick={handleClick}>
      <EX.Jump src={Jump} onClick={handleJump}></EX.Jump>
      <EX.Image src={images[currentStep]} alt={`Explain${currentStep + 1}`} />
    </EX.ImageContainer>
  );
}

export default Explain;
