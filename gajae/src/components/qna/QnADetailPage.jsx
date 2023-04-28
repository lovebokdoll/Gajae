import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BButton, ContainerDiv, FormDiv, HeaderDiv, QnACommentArea } from '../../style/FormStyle';
import HeaderNav1 from '../header/HeaderNav1';
import Footer from '../footer/Footer';
import { qnaDeleteDB, qnaDetailDB } from '../../service/database';
import Swal from 'sweetalert2';

const QnADetailPage = () => {
  const search = window.location.search;
  console.log(search);
  const QNA_NO = search.split('&').filter((item)=>{return item.match('QNA_NO')})[0]?.split('=')[1];
  console.log(QNA_NO);
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();

  const boardDelete = async() => {
    const qna = {
      QNA_NO: QNA_NO,
    }
    console.log("========> " + QNA_NO)
  
    // 삭제 여부 물어보는 다이얼로그
    const result = await Swal.fire({
      title: '삭제하시겠습니까?',
      text: '삭제하시면 복구할 수 없습니다.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '삭제',
      cancelButtonText: '취소'
    });
  
    // 사용자가 '삭제' 버튼을 눌렀을 경우
    if (result.isConfirmed) {
      const res = await qnaDeleteDB(qna);
      navigate("/qnalist");
    }
  }
  const qnaList = () => {
    navigate('/qnalist')
  }
  
// user_id 가져오기
const userId = localStorage.getItem("userId");
console.log(userId)

useEffect(() => {
  const boardDetail = async () => {
    const qna = {
      QNA_NO: QNA_NO,
    };
    console.log(QNA_NO)
    const res = await qnaDetailDB(qna);
    console.log(res.data); 
    if (res.data.length > 0) {
      const temp = JSON.stringify(res.data);
      const jsonDoc = JSON.parse(temp);
      // 글 작성자의 user_id와 세션에 저장된 user_id를 비교하여 같은 경우에만 상세보기 가능
      if (jsonDoc[0].USER_ID === userId) {
          setDetail({
            QNA_NO: jsonDoc[0].QNA_NO,
            QNA_TITLE: jsonDoc[0].QNA_TITLE,
            QNA_CONTENT: jsonDoc[0].QNA_CONTENT,
            QNA_DATE: jsonDoc[0].QNA_DATE,
            QNA_TYPE: jsonDoc[0].QNA_TYPE,
          });
      }
    }
  };
  boardDetail();
}, [QNA_NO, setDetail, userId, navigate]);

  
  return (
    <>
      <HeaderNav1 />
      <ContainerDiv>
        <HeaderDiv>
          <h3 style={{marginLeft:"10px", marginTop : '20px'}}>QnA 게시글</h3>
        </HeaderDiv>
        <FormDiv>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <BButton style={{margin:'0px 10px 0px 10px'}} onClick={()=>{navigate(`/qna/update/${QNA_NO}`)}}>
                수정
              </BButton>
              <BButton style={{margin:'0px 10px 0px 10px'}} onClick={()=>{boardDelete()}}>
                삭제
              </BButton>
              <BButton style={{margin:'0px 10px 0px 10px'}} onClick={qnaList}>
                목록
              </BButton>
            </div>
            <hr style={{height:"2px"}}/>
        <section style={{minHeight: '400px'}}>
            <h3> 제목 : {detail.QNA_TITLE}</h3>
            <br />
            <div dangerouslySetInnerHTML={{__html:detail.QNA_CONTENT}}></div>
          </section>
          <hr style={{height:"2px"}}/>
          <div>
          </div>
        </FormDiv>
      </ContainerDiv>
      <Footer />
    </>
  );
};

export default QnADetailPage;