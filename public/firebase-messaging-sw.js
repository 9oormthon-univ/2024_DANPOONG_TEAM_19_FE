importScripts("https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.5.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

// FCM Messaging 객체 가져오기
const messaging = firebase.messaging();

// 백그라운드 메시지 처리
messaging.onBackgroundMessage((payload) => {
  console.log("백그라운드 메시지 수신:", payload);

  const notificationTitle = payload.notification.title || "알림 제목 없음";
  const notificationOptions = {
    body: payload.notification.body || "알림 내용 없음",
    icon: payload.notification.icon || "/icon.png", // 기본 아이콘 설정
  };

  // 브라우저 알림 표시
  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("install", function (e) {
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  console.log("fcm sw activate..");
});
