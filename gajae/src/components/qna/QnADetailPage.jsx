import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ContainerDiv, FormDiv, HeaderDiv, QnACommentArea } from '../../style/FormStyle';
import { Button } from 'react-bootstrap';
import HeaderNav1 from '../header/HeaderNav1';
import Footer from '../footer/Footer';
import { qnaDetailDB } from '../../service/database';

const QnADetailPage = () => {
  const search = window.location.search;
  console.log(search);
  const page = search.split('&').filter((item)=>{return item.match('page')})[0]?.split('=')[1];
  console.log(page);
  const QNA_NO = search.split('&').filter((item)=>{return item.match('QNA_NO')})[0]?.split('=')[1];
  console.log(QNA_NO);
  const [detail, setDetail] = useState({});
  const[files, setFiles]= useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const commentInsert = () => {

  }
  const commentUpdate = () => {

  }
  
  useEffect(() => {
    const boardDetail = async() => {
      const qna = {
        QNA_NO : QNA_NO
      }
      
      //상세보기 페이지에서는 첨부파일이 있는 경우에 fileList 호출해야함
      //qnaListDB에서는 qna_bno를 결정지을 수 없음
      const res = await qnaDetailDB(qna);
      console.log(res.data); //빈배열만 출력됨
      const temp = JSON.stringify(res.data)
      const jsonDoc = JSON.parse(temp)
      console.log(jsonDoc[0]) //qna - 1row
      console.log(jsonDoc[1]) //1.png

      console.log(jsonDoc[0].QNA_TITLE);
      console.log(JSON.parse(jsonDoc[0].QNA_SECRET));
      if(JSON.parse(jsonDoc[0].QNA_SECRET)){
        if(sessionStorage.getItem('auth')!=='3'&&sessionStorage.getItem('no')!==JSON.stringify(jsonDoc[0].MEM_NO)) {
          //navigate(`/qna/list?page=1`);
          //return dispatch(setToastMsg("권한이 없습니다.")); 
        }
      }
      //이미지 파일을 담을 배열 선언
      const list = []
      if(jsonDoc.length > 1){
        for(let i = 1; i < jsonDoc.length; i++){ // 1번째 방부터 이미지가 들어있음
          const obj = {
            FILE_NAME : jsonDoc[i].FILE_NAME
          }
          list.push(obj)
        }
      }
      setFiles(list)

      setDetail({
        QNA_TITLE : jsonDoc[0].QNA_TITLE,
        QNA_CONTENT : jsonDoc[0].QNA_CONTENT,
        USER_ID : jsonDoc[0].USER_ID,
        QNA_DATE : jsonDoc[0].QNA_DATE,
        QNA_TYPE : jsonDoc[0].QNA_TYPE,
      });
    }
    boardDetail();
  },[setDetail, setFiles , QNA_NO, dispatch, navigate])

  
  return (
    <>
      <HeaderNav1 />
      <ContainerDiv>
        <HeaderDiv>
          <h3 style={{marginLeft:"10px"}}>QnA 게시글</h3>
        </HeaderDiv>
        <FormDiv>

          <hr style={{height:"2px"}}/>
          <div>
            <div style={{display:"flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <h2>답변 대기중&nbsp;</h2>
              <div style={{display:"flex"}}>
                <Button onClick={commentInsert}>답변</Button>
                &nbsp;
                <Button onClick={commentUpdate}>수정</Button>
              </div>
            </div>
              <QnACommentArea />
          </div>
        </FormDiv>
      </ContainerDiv>
      <Footer />
    </>
  );
};

export default QnADetailPage;