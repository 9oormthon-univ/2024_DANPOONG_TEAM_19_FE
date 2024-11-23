import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../axios/axios_instance";
import * as C from "../../styles/CommonStyle";
import * as A from "../../styles/Home/AlarmStyle";
import Back from "../../components/back";

const Alarm = () => {
  const [items, setItems] = useState([]);
  const [readStatus, setReadStatus] = useState({}); // 로컬스토리지 기반 읽음 상태 저장
  const [userType, setUserType] = useState(null);

  // 사용자 타입 가져오기
  const fetchUserType = async () => {
    try {
      const response = await axiosInstance.get("/api/core/mypage/who");
      setUserType(response.data);
      console.log("사용자 타입:", response.data);
    } catch (error) {
      console.error("사용자 타입을 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  // 알람 데이터를 서버에서 가져오기
  const getItems = async () => {
    try {
      const response = await axiosInstance.get("/api/core/alarm");
      const data = response.data.data.reverse(); // 서버 데이터 역순으로 저장
      console.log("알람 데이터:", data);

      const localReadStatus = JSON.parse(localStorage.getItem("readStatus")) || {};

      // 읽음 상태를 데이터에 병합
      const updatedItems = data.map((item) => ({
        ...item,
        isRead: localReadStatus[item.content1 + item.content2] || false, // 로컬스토리지 기준 읽음 여부 결정
      }));

      // 읽음 상태에 따라 정렬: 읽지 않은 알람(isRead=false)을 위로 올림
      updatedItems.sort((a, b) => a.isRead - b.isRead);

      setItems(updatedItems);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  // 로컬스토리지에 읽음 상태 저장
  const saveReadStatus = (updatedReadStatus) => {
    localStorage.setItem("readStatus", JSON.stringify(updatedReadStatus));
    setReadStatus(updatedReadStatus);
  };

  // 특정 알람을 읽음 처리
  const markAsRead = (item) => {
    const updatedReadStatus = {
      ...readStatus,
      [item.content1 + item.content2]: true,
    };

    saveReadStatus(updatedReadStatus);

    // UI 업데이트
    const updatedItems = items.map((prevItem) =>
      prevItem.content1 === item.content1 && prevItem.content2 === item.content2
        ? { ...prevItem, isRead: true }
        : prevItem
    );

    // 읽음 상태에 따라 다시 정렬
    updatedItems.sort((a, b) => a.isRead - b.isRead);

    setItems(updatedItems);
  };

  useEffect(() => {
    fetchUserType();
    getItems();
  }, []);

  return (
    <C.Page>
      <Back />
      <C.Center>
        <C.PageSpace>
          <A.Alarm>
            {items.map((item, index) => (
              <A.AlarmItem
                key={index}
                isRead={item.isRead}
                onClick={() => markAsRead(item)} // 클릭 시 읽음 처리
              >
                <A.AlarmText>
                  {userType === "consumer" ? (
                    <>
                      <span style={{ fontFamily: "EliceDigitalBaeum_Bold" }}>{item.content1}</span>이{" "}
                      <span style={{ fontFamily: "EliceDigitalBaeum_Bold" }}>{item.content2}</span>
                    </>
                  ) : (
                    <>
                      <span style={{ fontFamily: "EliceDigitalBaeum_Bold" }}>{item.content1}</span>
                      님이 <span style={{ fontFamily: "EliceDigitalBaeum_Bold" }}>[{item.content2}]</span>를 구매
                      요청하였습니다.
                    </>
                  )}
                </A.AlarmText>
              </A.AlarmItem>
            ))}
          </A.Alarm>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
};

export default Alarm;
