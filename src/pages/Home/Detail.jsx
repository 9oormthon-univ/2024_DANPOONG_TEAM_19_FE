import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as C from "../../styles/CommonStyle";
import * as D from "../../styles/Home/DetailStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useFetchProductDetail from "../../hooks/Home/useFetchProductDetail";
import useFetchReplies from "../../hooks/Home/useFetchReplies";
import usePostComment from "../../hooks/Home/usePostComment";
import { axiosInstance } from "../../axios/axios_instance";

import Back from "../../components/back";
import Footer from "../../components/Footer";
import BottomModal from "../../components/bottomModal";
import ModalConfirm from "../../components/ModalConfirm";

import arrow from "../../assets/images/Home/arrow.svg";
import post from "../../assets/images/Home/post.svg";
import userProfile from "../../assets/images/user.png";

function Detail() {
  const { productId } = useParams(); // URL에서 productId 가져오기
  const { productDetail, comments: initialComments, loading, error } = useFetchProductDetail(productId);
  const { postComment, loading: postLoading, error: postError } = usePostComment(productId);

  const [comments, setComments] = useState([]); // 로컬에서 관리할 댓글 상태
  const [repliesData, setRepliesData] = useState({}); // 모든 댓글의 답글 데이터를 저장
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [isSecret, setIsSecret] = useState(false); // 비밀글 여부
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  useEffect(() => {
    setComments(initialComments);
  }, [initialComments]);

  useEffect(() => {
    const fetchRepliesForComments = async () => {
      try {
        const repliesMap = {};
        for (const comment of comments) {
          const mainCommentId = comment.commentId || 1; // 기본값 1 설정
          const response = await axiosInstance.get(
            `/api/core/product/${productId}/comment`,
            { params: { mainCommentId } }
          );
          repliesMap[mainCommentId] = response.data?.data || [];
        }
        setRepliesData(repliesMap);
      } catch (err) {
        console.error("답글 데이터를 가져오는 데 실패했습니다.", err);
      }
    };
  
    if (comments.length > 0) {
      fetchRepliesForComments();
    }
  }, [productId, comments]);
  

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleConfirmModalToggle = () => {
    setIsConfirmModalOpen((prev) => !prev);
  };

  const handleReplyToggle = (commentId) => {
    if (selectedCommentId === commentId) {
      setSelectedCommentId(null); // 답글 접기
    } else {
      setSelectedCommentId(commentId); // 답글 펼치기
    }
  };

  const handleCommentSubmit = async () => {
    if (!comment.trim()) {
      alert("댓글 내용을 입력하세요.");
      return;
    }
  
    try {
      const newComment = await postComment(comment, isSecret); // 새로운 댓글 작성
      setComments((prevComments) => [...prevComments, newComment]); // 로컬 상태 업데이트
      setComment(""); // 입력창 초기화
      setIsSecret(false); // 비밀글 체크박스 초기화
    } catch (err) {
      console.error("댓글 등록 실패:", err);
      alert("댓글 등록 중 오류가 발생했습니다.");
    }
  };
  

  return (
    <D.Page>
      <Back />
      <D.Center>
        <D.PageSpace>
          <D.Wrapper>
            {/* 타이틀 */}
            <D.Title>{productDetail?.title}</D.Title>
            <D.Line />

            {/* 이미지 */}
            <D.SliderWrapper>
              <img
                src={productDetail?.imgUrl}
                alt={productDetail?.title}
                style={{
                  width: "321px",
                  height: "321px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </D.SliderWrapper>

            {/* 제품 설명 */}
            <D.DescriptionBox>
              <D.ProfileContainer>
                <D.ProfileImage src={userProfile} alt="사용자 프로필" />
                <D.UserName>{productDetail?.sellerName}</D.UserName>
                <D.DButton onClick={handleModalToggle}>...</D.DButton>
                <BottomModal isOpen={isModalOpen} onClose={handleModalToggle} />
              </D.ProfileContainer>
              <D.DescriptionText>{productDetail?.content}</D.DescriptionText>
            </D.DescriptionBox>

            <D.Button className="next" onClick={handleConfirmModalToggle}>
              구매하기
            </D.Button>

            <D.CommentHeader>댓글 {comments.length}</D.CommentHeader>

            {/* 댓글 목록 */}
            {comments.map((comment) => (
              <div key={comment.commentId}>
                <D.CommentBox isHighlighted={selectedCommentId === comment.commentId}>
                  <D.ProfileContainer>
                    <D.ProfileImage src={userProfile} alt="사용자 프로필" />
                    <D.UserName>{comment.username}</D.UserName>
                    <D.DButton onClick={handleModalToggle}>...</D.DButton>
                  </D.ProfileContainer>
                  <D.CommentText>{comment.content}</D.CommentText>
                </D.CommentBox>
                <D.ReplyHeader onClick={() => handleReplyToggle(comment.commentId)}>
                  <D.ReplyIcon src={arrow} alt="Reply Icon" />
                  <D.ReplyText>{(repliesData[comment.commentId] || []).length} 답글</D.ReplyText>
                </D.ReplyHeader>

                {/* 답글 */}
                {selectedCommentId === comment.commentId && (
                  <div>
                    {(repliesData[comment.commentId] || []).map((reply) => (
                      <D.ReplyBox key={reply.commentId}>
                        <D.ProfileContainer>
                          <D.ProfileImage src={userProfile} alt="사용자 프로필" />
                          <D.UserName>{reply.username}</D.UserName>
                          <D.DButton onClick={handleModalToggle}>...</D.DButton>
                        </D.ProfileContainer>
                        <D.CommentText>{reply.content}</D.CommentText>
                      </D.ReplyBox>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* 댓글 입력 */}
            <D.CommentInputBox>
              <D.ProfileContainer>
                <D.ProfileImage src={userProfile} alt="사용자 프로필" />
                <D.UserName>김옥순</D.UserName>
              </D.ProfileContainer>
              <D.CommentInputRow>
                <D.CommentInput
                  type="text"
                  placeholder="댓글을 작성해주세요"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <D.PostIcon
                  src={post}
                  alt="Post Comment"
                  onClick={handleCommentSubmit}
                />
              </D.CommentInputRow>
            </D.CommentInputBox>
            {/* 비밀글 체크박스 */}
            <D.SecretOptionContainer>
              <D.SecretCheckbox
                type="checkbox"
                id="secret"
                checked={isSecret}
                onChange={(e) => setIsSecret(e.target.checked)}
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