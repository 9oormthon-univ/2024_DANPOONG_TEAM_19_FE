import React, { useState, useEffect } from "react";
import axios from "axios";
import * as V from "../styles/Components/VideoStyle";
import More from "../assets/images/Common/more.png";
import Test from "../assets/images/Common/test.png";

const API_KEY = import.meta.env.VITE_API_KEY;

const Video = () => {
  const [items, setItems] = useState([]);

  const getVideo = async () => {
    try {
      const url = `${API_KEY}/kakao/search`;
      const response = await axios.get(url);
      setItems(response.data.documents);
    } catch (error) {
      console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

  const handleVideo = (url) => {
    window.open = url;
  };

  return (
    <V.List>
      {items.map((item) => (
        <V.ListItem key={item.id} onClick={() => handleItemClick(item.url)}>
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
