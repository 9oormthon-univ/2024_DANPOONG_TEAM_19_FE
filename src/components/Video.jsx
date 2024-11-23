import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // URL에서 쿼리 파라미터 가져오기
import { axiosInstance } from "../axios/axios_instance";
import * as V from "../styles/Components/VideoStyle";

const Video = () => {
  const [items, setItems] = useState([]);
  const [searchParams] = useSearchParams(); // URL에서 query 파라미터 가져오기
  const query = searchParams.get("query"); // query 파라미터 추출

  // 추천 영상 요청
  const getRecommendedVideos = async () => {
    try {
      const response = await axiosInstance.get("/api/core/kakao/search");
      setItems(response.data.documents);
      console.log("추천영상: ", response.data.documents);
    } catch (error) {
      console.error("추천 영상을 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  // 검색 결과 요청
  const getSearchResults = async (query) => {
    try {
      const response = await axiosInstance.get(`/api/core/kakao/search/keyword`, {
        params: { query }, // 쿼리 파라미터 전달
      });
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

  const truncateTitle = (title) => {
    if (title.length > 60) {
      return `${title.slice(0, 60)} ···`;
    }
    return title;
  };

  return (
    <V.List>
      {items.map((item, index) => (
        <V.ListItem key={index} onClick={() => handleVideo(item.url)}>
          <V.ListImg src={item.thumbnail} alt="미리보기" />
          <V.ListText>
            <V.ListTitle>{truncateTitle(item.title)}</V.ListTitle>
          </V.ListText>
        </V.ListItem>
      ))}
    </V.List>
  );
};

export default Video;
