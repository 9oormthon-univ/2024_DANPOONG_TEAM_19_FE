import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../styles/Login/Splash";
import Loading from "../../assets/images/Login/loading.png";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/firstpage");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <S.ImageContainer>
      <S.Image src={Loading} alt="Loading" />
    </S.ImageContainer>
  );
}

export default Splash;
