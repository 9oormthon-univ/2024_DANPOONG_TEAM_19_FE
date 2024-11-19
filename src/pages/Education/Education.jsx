import React, { useState } from "react";
import * as C from "../../styles/CommonStyle";
import * as E from "../../styles/Education/EducationStyle";
import Notice from "../../components/Notice";
import Video from "../../components/Video";

function Education() {
  const [activeButton, setActiveButton] = useState("notice");

  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <E.Container>
            <E.Btn active={activeButton === "video"} onClick={() => setActiveButton("video")}>
              영상
            </E.Btn>
            <E.Btn active={activeButton === "notice"} onClick={() => setActiveButton("notice")}>
              공고
            </E.Btn>
          </E.Container>
          <E.Content>
            {activeButton === "video" && <Video />}
            {activeButton === "notice" && <Notice />}
          </E.Content>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default Education;
