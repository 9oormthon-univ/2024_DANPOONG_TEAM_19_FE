import React from "react";
import * as N from "../styles/Components/NoticeStyle";
import More from "../assets/images/Common/more.png";
import Sample1 from "../assets/images/Education/sample1.png";
import Sample2 from "../assets/images/Education/sample2.jpg";
import Sample3 from "../assets/images/Education/sample3.png";
import Sample4 from "../assets/images/Education/sample4.jpg";
import Sample5 from "../assets/images/Education/sample5.jpeg";
import Sample6 from "../assets/images/Education/sample6.jpg";

const Notice = () => {
  // URL 데이터 배열
  const notices = [
    {
      img: Sample1,
      title: "2024년 시장형(매장운영) 시니어드림스토어 7호점 참여자 모집 안내",
      url: "http://www.innojung.go.kr/sub/board.php?mn=noti&fn=board&md=v&zest_bn=hana_board_25&bn=hana_board_30&seq=471&page=&field=&keyword=&s_category=",
    },
    {
      img: Sample2,
      title: "2024년 노인일자리 및 사회활동지원사업 신규 시범사업 참여자 및 추가 대기자 모집",
      url: "http://seogusilver.or.kr/main/sub.html?Mode=view&boardID=www13&num=1352&page=&keyfield=&key=&bCate=",
    },
    {
      img: Sample3,
      title: "2023년도 직무중심 신입사원(5급, 6급) 채용 공고",
      url: "https://krc.recruiton.kr/recruit/gongo/gongo_view.asp?idx=580&token=",
    },
    {
      img: Sample4,
      title: "용인시니어클럽 참여자 모집 안내",
      url: "https://yisenior.com/board/index.html?id=notice&no=47",
    },
    {
      img: Sample5,
      title: "제주특별자치도 고용취약계층 일자리 지원",
      url: "http://www.bokgwon.go.kr/fund/details.do?id=727-1660",
    },
    {
      img: Sample6,
      title: "2024년도 연수구 노인일자리 및 사회활동 지원사업 참여자 모집 안내",
      url: "http://www.yeonsusilver.org/03_info/info_01.php",
    },
  ];

  // URL로 이동하는 함수
  const handleUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <N.List>
      {notices.map((notice, index) => (
        <N.ListItem key={index} onClick={() => handleUrl(notice.url)}>
          <N.ListImg src={notice.img} alt={`Notice ${index}`} />
          <N.ListText>
            <N.ListTitle>{notice.title}</N.ListTitle>
            <N.ListMore src={More} alt="more" />
          </N.ListText>
        </N.ListItem>
      ))}
    </N.List>
  );
};

export default Notice;
