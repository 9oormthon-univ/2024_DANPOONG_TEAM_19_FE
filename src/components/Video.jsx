import React, { useState, useEffect } from "react";
import { axiosInstance } from "../axios/axios_instance";
import * as V from "../styles/Components/VideoStyle";

const Video = ({ query }) => {
  const [items, setItems] = useState([]);

  const getRecommendedVideos = async () => {
    try {
      const response = await axiosInstance.get("/api/core/kakao/search/recommended");
      setItems(response.data.documents);
      console.log("추천영상: ", response.data.documents);
    } catch (error) {
      console.error("추천 영상을 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  const getSearchResults = async (searchQuery) => {
    try {
      const response = await axiosInstance.get(`/api/core/kakao/search/${searchQuery}`);
      setItems(response.data.documents);
      console.log("검색결과: ", response.data.documents);
    } catch (error) {
      console.error("검색 결과를 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    if (query) {
      getSearchResults(query); // 검색어가 있으면 검색 결과 요청
    } else {
      getRecommendedVideos(); // 검색어가 없으면 추천 영상 요청
    }
  }, [query]);

  const handleVideo = (url) => {
    window.open(url, "_blank");
  };

  return (
    <V.List>
      {items.map((item, index) => (
        <V.ListItem key={index} onClick={() => handleVideo(item.url)}>
          <V.ListImg src={item.thumbnail || "/default-thumbnail.png"} alt="미리보기" />
          <V.ListText>
            <V.ListTitle>{item.title}</V.ListTitle>
          </V.ListText>
        </V.ListItem>
      ))}
    </V.List>
  );
};

export default Video;
