import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Splash from "./pages/Login/Splash";
import FirstPage from "./pages/Login/FirstPage";
import Select from "./pages/Login/Select";
import Signin from "./pages/Login/Signin.jsx";
import Signup from "./pages/Login/Signup";
import Detail from "./pages/Home/Detail";
import Home from "./pages/Home/Home";
import Upload from "./pages/Home/Upload";
import Education from "./pages/Education/Education";
import MyPage from "./pages/MyPage/MyPage";
import Order from "./pages/MyPage/Order";
import SearchE from "./pages/Education/SearchE";
import Search from "./pages/Home/Search";
import Alarm from "./pages/Home/Alarm.jsx";
import Explain from "./pages/Login/Explain.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/firstpage" element={<FirstPage />} />
          <Route path="/select" element={<Select />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/detail/:productId" element={<Detail />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/education" element={<Education />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/order/:productId" element={<Order />} />
          <Route path="/education/search" element={<SearchE />} />
          <Route path="/search" element={<Search />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/explain" element={<Explain />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
