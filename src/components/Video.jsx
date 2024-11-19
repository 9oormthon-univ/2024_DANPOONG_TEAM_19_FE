import React from "react";
import * as V from "../styles/Components/VideoStyle";
import More from "../assets/images/Common/more.png";
import Test from "../assets/images/Common/test.png";

const Video = () => {
  return (
    <V.List>
      <V.ListItem>
        <V.ListImg src={Test} alt="test"></V.ListImg>
        <V.ListText>
          <V.ListTitle>테스트</V.ListTitle>
          <V.ListMore src={More} alt="more"></V.ListMore>
        </V.ListText>
      </V.ListItem>
    </V.List>
  );
};

export default Video;
