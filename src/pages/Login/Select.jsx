import React, { useState } from "react";
import * as C from "../../styles/CommonStyle";
import * as S from "../../styles/Login/SelectStyle";
import Back from "../../components/back";

import image1 from "../../assets/images/Login/image1.png";
import image2 from "../../assets/images/Login/image2.png";
import image3 from "../../assets/images/Login/image3.png";
import image4 from "../../assets/images/Login/image4.png";
import image5 from "../../assets/images/Login/image5.png";
import image6 from "../../assets/images/Login/image6.png";
import image7 from "../../assets/images/Login/image7.png";
import image8 from "../../assets/images/Login/image8.png";
import image9 from "../../assets/images/Login/image9.png";
import image10 from "../../assets/images/Login/image10.png";
import image11 from "../../assets/images/Login/image11.png";
import image12 from "../../assets/images/Login/image12.png";

const items = [
  { id: 1, image: image1, title: "이미지 1" },
  { id: 2, image: image2, title: "이미지 2" },
  { id: 3, image: image3, title: "이미지 3" },
  { id: 4, image: image4, title: "이미지 4" },
  { id: 5, image: image5, title: "이미지 5" },
  { id: 6, image: image6, title: "이미지 6" },
  { id: 7, image: image7, title: "이미지 7" },
  { id: 8, image: image8, title: "이미지 8" },
  { id: 9, image: image9, title: "이미지 9" },
  { id: 10, image: image10, title: "이미지 10" },
  { id: 11, image: image11, title: "이미지 11" },
  { id: 12, image: image12, title: "이미지 12" },
];

function Select() {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else if (selectedIds.length < 5) {
      setSelectedIds([...selectedIds, id]);
    } else {
      alert("최대 5개까지 선택할 수 있습니다."); 
    }
  };

  return (
    <S.Page>
      <Back />
      <S.Center>
        <S.PageSpace>
          <S.Wrapper>
            <S.Title>관심사 선택</S.Title>
            <S.Line />
            <S.Comment>관심있는 분야를 3~5개 선택해주세요</S.Comment>
            <S.Grid>
              {items.map((item) => (
                <S.Box
                  key={item.id}
                  image={item.image}
                  className={selectedIds.includes(item.id) ? "selected" : ""}
                  onClick={() => handleSelect(item.id)}
                >
                  {/* <S.Label>{item.title}</S.Label> */}
                </S.Box>
              ))}
            </S.Grid>
            <S.Button className="next">완료</S.Button>
          </S.Wrapper>
        </S.PageSpace>
      </S.Center>
    </S.Page>
  );
}

export default Select;
