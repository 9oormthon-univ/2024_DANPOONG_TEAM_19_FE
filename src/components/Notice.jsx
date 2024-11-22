import React from "react";
import * as N from "../styles/Components/NoticeStyle";
import More from "../assets/images/Common/more.png";
import NoticeImg from "../assets/images/Mypage/notice.png";

const Notice = () => {
  return (
    <N.List>
      <N.ListItem>
        <N.ListImg src={NoticeImg} alt="test"></N.ListImg>
        <N.ListText>
          <N.ListTitle>미화원 모집 [북구일자리지원센터 채용대행]</N.ListTitle>
          <N.ListMore src={More} alt="more"></N.ListMore>
        </N.ListText>
      </N.ListItem>
      <N.ListItem>
        <N.ListImg src={NoticeImg} alt="test"></N.ListImg>
        <N.ListText>
          <N.ListTitle>[구평동] 특수경비원 모집</N.ListTitle>
          <N.ListMore src={More} alt="more"></N.ListMore>
        </N.ListText>
      </N.ListItem>
      <N.ListItem>
        <N.ListImg src={NoticeImg} alt="test"></N.ListImg>
        <N.ListText>
          <N.ListTitle>지역사회서비스(아동 청소년비젼 형성, 글로벌마인드형성)제공</N.ListTitle>
          <N.ListMore src={More} alt="more"></N.ListMore>
        </N.ListText>
      </N.ListItem>
      <N.ListItem>
        <N.ListImg src={NoticeImg} alt="test"></N.ListImg>
        <N.ListText>
          <N.ListTitle>[구평동] 특수경비원 모집</N.ListTitle>
          <N.ListMore src={More} alt="more"></N.ListMore>
        </N.ListText>
      </N.ListItem>
    </N.List>
  );
};

export default Notice;
