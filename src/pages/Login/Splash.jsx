import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../../styles/CommonStyle";
import * as S from "../../styles/Login/Splash";
import Loading from "../../assets/images/Login/Loading.png";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/firstpage");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <S.ImageContainer>
            <S.Image src={Loading} alt="Loading" />
          </S.ImageContainer>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default Splash;
