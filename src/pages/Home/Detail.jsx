import React, { useState } from "react";
import * as C from "../../styles/CommonStyle";
import * as D from "../../styles/Home/DetailStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Back from "../../components/back";
import Footer from "../../components/Footer";
import BottomModal from "../../components/bottomModal";
import ModalConfirm from "../../components/ModalConfirm";

import arrow from "../../assets/images/Home/arrow.svg";
import post from "../../assets/images/Home/post.svg";
import test1 from "../../assets/images/test1.png";
import test2 from "../../assets/images/test2.png";
import test3 from "../../assets/images/test3.png";
import userProfile from "../../assets/images/user.png";

function Detail() {
  const [images, setImages] = useState([test1, test2, test3]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [comment, setComment] = useState(""); 
  const [comments, setComments] = useState([]); 
  const [selectedCommentId, setSelectedCommentId] = useState(null); 


  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleConfirmModalToggle = () => {
    setIsConfirmModalOpen((prev) => !prev);
  };


  const handlePostComment = () => {
    if (comment.trim() === "") return; 

    if (selectedCommentId) {
        {/* 답글 추가 */}
      setComments((prevComments) =>
        prevComments.map((c) =>
          c.id === selectedCommentId
            ? { ...c, replies: [...c.replies, { id: Date.now(), content: comment }] }
            : c
        )
      );
    } else {
       {/* 댓글 추가 */}
      setComments([
        ...comments,
        { id: Date.now(), content: comment, replies: [] },
      ]);
    }

    setComment(""); 
    setSelectedCommentId(null); 
  };

  
  const handleReplyToggle = (id) => {
    setSelectedCommentId(id); 
  };

  return (
    <D.Page>
      <Back />
      <D.Center>
        <D.PageSpace>
          <D.Wrapper>
            {/* 타이틀 */}
            <D.Title>하트 키링</D.Title>
            <D.Line />

            {/* 이미지 슬라이더 */}
            <D.SliderWrapper>
              <Swiper
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<span class="${className}" style="width: 10px; height: 10px; margin: 0 5px; background-color: ${
                      className.includes("swiper-pagination-bullet-active")
                        ? "#CCC"
                        : "#EE8814"
                    }; border-radius: 50%;"></span>`;
                  },
                }}
                modules={[Pagination]}
              >
                {images.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={image}
                      alt={`Preview ${index}`}
                      style={{
                        width: "321px",
                        height: "321px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </D.SliderWrapper>

            {/* 제품 설명 */}
            <D.DescriptionBox>
              <D.ProfileContainer>
                <D.ProfileImage src={userProfile} alt="사용자 프로필" />
                <D.UserName>김옥순</D.UserName>
                <D.DButton onClick={handleModalToggle}>...</D.DButton>
                <BottomModal isOpen={isModalOpen} onClose={handleModalToggle} />
              </D.ProfileContainer>
              <D.DescriptionText>
                정신차려 하트 키링을 보며 늘 잊지 말아요! 신이어는 준이어를 항상
                응원하고 언제나 곁에 있다는걸... 사용자의 모니터 환경과
                해상도에 따라 실제 색상과 차이가 날 수 있습니다. 사이즈는
                55x65mm로 패브릭 소재에요! 이 글이 얼마나 길어질지는
                모르겠지만 이정도면 적당할까요.
              </D.DescriptionText>
            </D.DescriptionBox>

            <D.Button className="next" onClick={handleConfirmModalToggle}>
              구매하기
            </D.Button>

            <D.CommentHeader>댓글 {comments.length}</D.CommentHeader>

            {/* 댓글 목록 */}
            {comments.map((comment) => (
              <div key={comment.id}>
                <D.CommentBox isHighlighted={selectedCommentId === comment.id}>
                  {/* 댓글 */}
                  <D.ProfileContainer>
                    <D.ProfileImage src={userProfile} alt="사용자 프로필" />
                    <D.UserName>김옥순</D.UserName>
                  </D.ProfileContainer>
                  <D.CommentText>{comment.content}</D.CommentText>
                </D.CommentBox>
                <D.ReplyHeader onClick={() => handleReplyToggle(comment.id)}>
                  <D.ReplyIcon src={arrow} alt="Reply Icon" />
                  <D.ReplyText>{comment.replies.length} 답글</D.ReplyText>
                </D.ReplyHeader>

                {/* 답글 */}
                <div>
                  {comment.replies.map((reply) => (
                    <D.ReplyBox key={reply.id}>
                      <D.ProfileContainer>
                        <D.ProfileImage src={userProfile} alt="사용자 프로필" />
                        <D.UserName>김옥순</D.UserName>
                      </D.ProfileContainer>
                      <D.CommentText>{reply.content}</D.CommentText>
                    </D.ReplyBox>
                  ))}
                </div>
              </div>
            ))}

            {/* 댓글, 답글 입력 */}
            <D.CommentInputBox>
              <D.ProfileContainer>
                <D.ProfileImage src={userProfile} alt="사용자 프로필" />
                <D.UserName>김옥순</D.UserName>
              </D.ProfileContainer>
              <D.CommentInputRow>
                <D.CommentInput
                  type="text"
                  placeholder={
                    selectedCommentId ? "답글을 작성해주세요" : "댓글을 작성해주세요"
                  }
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <D.PostIcon
                  src={post}
                  alt="Post Comment"
                  onClick={handlePostComment}
                />
              </D.CommentInputRow>
            </D.CommentInputBox>

            {/* 비밀글 체크박스 */}
            <D.SecretOptionContainer>
              <D.SecretCheckbox
                type="checkbox"
                id="secret"
                onChange={(e) => console.log(e.target.checked)}
              />
              <D.SecretLabel htmlFor="secret">비밀글이에요</D.SecretLabel>
            </D.SecretOptionContainer>
          </D.Wrapper>
        </D.PageSpace>
      </D.Center>
      
      {/* 구매 확인 모달 */}
      {isConfirmModalOpen && (
        <ModalConfirm
          isModalVisibleD={isConfirmModalOpen}
          onClose={handleConfirmModalToggle}
        />
      )}
      <Footer />
    </D.Page>
  );
}

export default Detail;
