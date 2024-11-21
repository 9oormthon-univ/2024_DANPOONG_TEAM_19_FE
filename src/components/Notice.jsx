import React, { useState, useEffect } from "react";
import * as N from "../styles/Components/NoticeStyle";
import More from "../assets/images/Common/more.png";
import Test from "../assets/images/Common/test.png";
import { useNavigate, Link } from "react-router-dom";

const Notice = () => {
  const [notice, setNotice] = useState([]);

  const navigate = useNavigate();

  const getNotice = async () => {};

  useEffect(() => {
    getNotice();
  }, []);

  return (
    <N.List>
      <N.ListItem>
        <N.ListImg src={Test} alt="test"></N.ListImg>
        <N.ListText>
          <N.ListTitle>Test</N.ListTitle>
          <N.ListMore src={More} alt="more"></N.ListMore>
        </N.ListText>
      </N.ListItem>
      <N.ListItem>
        <N.ListImg src={Test} alt="test"></N.ListImg>
        <N.ListText>
          <N.ListTitle>Test</N.ListTitle>
          <N.ListMore src={More} alt="more"></N.ListMore>
        </N.ListText>
      </N.ListItem>
    </N.List>
  );
};

export default Notice;
