import React from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { BButton, ContainerDiv, FormDiv, HeaderDiv } from '../../style/FormStyle';
import MyFilter from './MyFilter';
import { qnaListDB, qnaUpdateDB } from '../../service/database';
import Swal from 'sweetalert2';

const QnAUpdatePage = () => {
  const location = useLocation();
  const path = location.pathname;
  const QNA_NO = path.substring(path.lastIndexOf('/') + 1);

  const navigate = useNavigate()
  
  const [QNA_TITLE, setTitle] = useState(""); //사용자가 입력한 제목 담기
  const [QNA_CONTENT, setContent] = useState(""); //사용자가 입력한 내용 담기
  const [QNA_TYPE, setTitleType] = useState("");
  const[types]= useState(['문의','결제','취소','예약']); //qna_type의 라벨값

 // user_id 가져오기
const userId = localStorage.getItem("userId");
console.log(userId)

  useEffect(() => {
    //한 건 가져오기
    const qnaDetail = async() => {
      const qna = {
        QNA_NO : QNA_NO,
      }
      const res = await qnaListDB(qna)
      console.log(res.data)
      const temp = JSON.stringify(res.data) //문자열로 전환
      const jsonDoc = JSON.parse(temp) //배열로 접근
      setTitle(jsonDoc[0].QNA_TITLE)
      setContent(jsonDoc[0].QNA_CONTENT)
      setTitleType(jsonDoc[0].QNA_TYPE)

    }
    qnaDetail();
  },[QNA_NO]);
  

  const Toast = Swal.mixin({
    toast: true,
    position: 'center-center',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  

  const handleContent = useCallback((value) => {
    console.log(value);
    setContent(value);
  },[]);


  const handleTitle = useCallback((e) => {
    setTitle(e);
  },[]); 

  const handleType =useCallback((e) => {
    setTitleType(e);
  },[]);

  const boardUpdate = async() => {
    if(QNA_TITLE.trim() === "" || QNA_CONTENT.trim() ==="") 
      return  (
      Toast.fire({
      icon: 'error',
      title: '내용을 입력해주세요.',
      timer: 2000,
      timerProgressBar : false
  })
) 
    const qna = {
      USER_ID: userId, // 로그인한 사용자의 ID
      QNA_TITLE: QNA_TITLE, // 작성한 글의 제목
      QNA_CONTENT: QNA_CONTENT, // 작성한 글의 내용
      QNA_TYPE: QNA_TYPE, // 작성한 글의 유형
      }
      try {
        await qnaUpdateDB(qna);
        navigate('/qnalist');
        Toast.fire({
          icon: 'success',
          title: '수정이 완료되었습니다.',
          timer: 2000,
          timerProgressBar : false
        });
      } catch(error) {
        console.error(error);
        Toast.fire({
          icon: 'error',
          title: '수정에 실패했습니다. 다시 시도해주세요.',
          timer: 2000,
          timerProgressBar : false
        });
      }
    }


  return (
    <>
      <ContainerDiv>
        <HeaderDiv>
          <h3 style={{marginLeft:"10px", marginTop : '100px'}}>문의 수정</h3>
        </HeaderDiv>
        <FormDiv>
          <div style={{width:"100%", maxWidth:"2000px"}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom:'10px'}}>
              <h2>제목</h2> 
              <div style={{display: 'flex'}}>
              <MyFilter title={QNA_TYPE} types={types} handleType={handleType}></MyFilter>
                <BButton style={{marginLeft: '10px'}} onClick={()=>{boardUpdate()}}>글수정</BButton>
              </div>
            </div>
            <input id="dataset-title" type="text" placeholder={QNA_TITLE} value={QNA_TITLE}
              style={{width:"100%",height:'40px' , border:'1px solid lightGray'}} onChange={(e)=>{handleTitle(e.target.value)}}/>
            <hr />
            <h3 style={{textAlign:"left", marginBottom:'10px'}}>상세내용</h3>
            <input id="dataset-content" type="text" placeholder={QNA_CONTENT} value={QNA_CONTENT}
              style={{width:"100%",height:'200px' , border:'1px solid lightGray'}} onChange={(e)=>{handleContent(e.target.value)}}/>
            </div>
        </FormDiv>
      </ContainerDiv>
    </>
  );
}

export default QnAUpdatePage