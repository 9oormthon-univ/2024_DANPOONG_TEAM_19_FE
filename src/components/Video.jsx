import React, { useState, useEffect } from "react";
import { axiosInstance } from "../axios/axios_instance";
import * as V from "../styles/Components/VideoStyle";
import More from "../assets/images/Common/more.png";

const Video = () => {
  const [items, setItems] = useState([]);

  const getVideo = async () => {
    try {
      const response = await axiosInstance.get("/api/core/kakao/search");
      setItems(response.data.documents);
      console.log(response.data.documents);
    } catch (error) {
      console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

  const handleVideo = (url) => {
    window.open(url, "_blank");
  };

  return (
    <V.List>
      {items.map((item, index) => (
        <V.ListItem key={index} onClick={() => handleVideo(item.url)}>
          <V.ListImg src={item.thumbnail} alt="미리보기"></V.ListImg>
          <V.ListText>
            <V.ListTitle>{item.title}</V.ListTitle>
            <V.ListMore src={More} alt="more"></V.ListMore>
          </V.ListText>
        </V.ListItem>
      ))}
    </V.List>
  );
};

export default Video;
