import React, { useState } from 'react'
import { useEffect } from 'react';
import { Table, Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BButton, ContainerDiv, FormDiv, HeaderDiv } from '../../style/FormStyle';
import HeaderNav2 from '../header/HeaderNav2';
import HeaderNav1 from '../header/HeaderNav1';
import Footer from '../footer/Footer';
import { qnaListDB } from '../../service/database';
import Swal from 'sweetalert2';

const QnAListPage = (qna) => {
  const navigate = useNavigate();

  const [qnalist, setQnaList] = useState([]);

  //모달 창
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

 // user_id 가져오기
const userId = localStorage.getItem("userId");
console.log(userId)

  useEffect(() => {
    const qnaList = async () => {
      const res = await qnaListDB(qna);
      console.log(res.data);
      const list = [];
      res.data.forEach((row) => {
        const obj = {
          QNA_NO: row.QNA_NO,
          QNA_TITLE: row.QNA_TITLE,
          QNA_CONTENT: row.QNA_CONTENT,
          QNA_TYPE: row.QNA_TYPE,
          QNA_DATE: row.QNA_DATE,
          USER_ID: row.USER_ID
        };
        list.push(obj);
      });
      setQnaList(list);
    };
    qnaList();
  }, [setQnaList]);

  const handleQna = () => {
    if(!userId){
      Toast.fire({
        icon: 'info',
        title: '로그인을 하세요.',
        timer: 2000,
        timerProgressBar : false
    })
      navigate('/login');
    } else {
      navigate('/qna/writer');
    }
  }

  const isMyPost = (USER_ID) => {
    return userId === USER_ID;
  };

      

  const getAuth = (listItem) => {
    console.log(listItem);

    if(userId === listItem.USER_ID){
      navigate(`/qna/detail?QNA_NO=${listItem.QNA_NO}`);
    } else {
      console.log(listItem.USER_ID)
      Toast.fire({
        icon: 'error',
        title: '읽기 권한이 없습니다.',
        timer: 2000,
        timerProgressBar : false
    })
    }
    
  }

  const listHeaders = ["글번호","분류","제목", "등록일"];
  const HeaderWd = ["7%","8%","75%", "10%"];


  const listHeadersElements = listHeaders.map((listHeader, index) => 
  listHeader==='제목'?
    <th key={index} style={{width:HeaderWd[index], paddingLeft:"40px", textAlign: 'center'}}>{listHeader}</th>
    :
    <th key={index} style={{width:HeaderWd[index],textAlign: 'center'}}>{listHeader}</th>

  )
  const listItemsElements = qnalist.map((listItem, index) => {
    console.log(listItem);
    return (
          <tr key={index}  onClick={()=>{getAuth(listItem)}}>
            <td style={{ width: HeaderWd[0], fontSize: '15px', textAlign: 'center' }}>
              {listItem.QNA_NO}
            </td>
            <td style={{ width: HeaderWd[0], fontSize: '15px', textAlign: 'center' }}>
              {listItem.QNA_TYPE}
            </td>
            <td style={{ width: HeaderWd[0], fontSize: '15px', textAlign: 'center' }}>
              {listItem.QNA_TITLE}
              {isMyPost(listItem.USER_ID) && (
                <span style={{fontWeight:"bold", color:"red"}}>&nbsp;&nbsp;[본인글]</span>
              )}
              {listItem.comment?<span>&nbsp;&nbsp;[답변완료]</span>:<span>&nbsp;&nbsp;[미답변]</span>}
            </td>
            <td style={{ width: HeaderWd[0], fontSize: '15px', textAlign: 'center' }}>
              {listItem.QNA_DATE}
            </td>
          </tr>
        );
      });


  return (
    <>
      <HeaderNav1 />
        <HeaderNav2></HeaderNav2>
      <ContainerDiv>
        <HeaderDiv>
          <h3 style={{marginLeft:"10px", marginTop : '25px'}}>문의 게시판</h3>
        </HeaderDiv>
        <div style={{ marginLeft: 'auto' , display : "flex", marginRight : '150px'}}>
          <BButton  onClick={handleQna}>작성하기</BButton>
        </div>
        <FormDiv>
          <div>
 
              {
                sessionStorage.getItem('auth')==='teacher'&&
                <BButton style={{width:"80px", height:"38px"}} onClick={()=>{navigate(`/qna/write`)}}>글쓰기</BButton>
              }
          
            <Table responsive hover style={{minWidth:"800px"}}>
              <thead>
                <tr>
                  {listHeadersElements}
                </tr>
              </thead>
              <tbody>
                {listItemsElements}
              </tbody>
            </Table>
          </div>
          <div style={{margin:"10px", display:"flex",flexDirection:"column" ,alignItems:"center" , justifyContent:"center" , width:"100%"}}>

          </div>
        </FormDiv>
      </ContainerDiv>
      <Footer />   
    </>
  );
};

export default QnAListPage;