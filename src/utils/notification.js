import { messaging } from "../firebase";
import { getToken } from "firebase/messaging";
import axios from "axios";

const VAPID_KEY = "import.meta.env.VITE_VAPID_KEY";

export const requestDeviceToken = async () => {
  try {
    // 알림 권한 요청
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("알림 권한 허용됨.");

      // Device Token 가져오기
      const token = await getToken(messaging, { vapidKey: VAPID_KEY });
      console.log("Device Token:", token);

      // 서버로 Token 전송
      await sendDeviceTokenToServer(token);

      return token;
    } else {
      console.warn("알림 권한 거부됨.");
      return null;
    }
  } catch (error) {
    console.error("Device Token 가져오기 실패:", error);
    return null;
  }
};

/**
 * Device Token을 서버로 전송
 * @param {string} token
 */
const sendDeviceTokenToServer = async (token) => {
  try {
    const response = await axios.post("https://your-backend.com/api/register-token", {
      token,
      userId: "USER_ID", // 선택적으로 사용자 식별자 전달
    });
    console.log("Device Token 서버 등록 성공:", response.data);
  } catch (error) {
    console.error("Device Token 서버 등록 실패:", error);
  }
};
