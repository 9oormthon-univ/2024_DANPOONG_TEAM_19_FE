import React, { useState } from "react";
import * as C from "../../styles/CommonStyle";
import * as E from "../../styles/Education/EducationStyle";
import Notice from "../../components/Notice";
import Video from "../../components/Video";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSearchParams } from "react-router-dom";

function Education() {
  const [activeButton, setActiveButton] = useState("video");
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <Header />
          <E.Container>
            <E.Btn data-active={activeButton === "video"} onClick={() => setActiveButton("video")}>
              영상
            </E.Btn>
            <E.Btn data-active={activeButton === "notice"} onClick={() => setActiveButton("notice")}>
              공고
            </E.Btn>
          </E.Container>
          <E.Content>{activeButton === "video" ? <Video /> : <Notice />}</E.Content>
          <Footer />
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default Education;
