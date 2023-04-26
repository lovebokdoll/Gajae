import React, { useState } from 'react'
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BButton, ContainerDiv, FormDiv, HeaderDiv } from '../../style/FormStyle';
import HeaderNav2 from '../header/HeaderNav2';
import HeaderNav1 from '../header/HeaderNav1';
import Footer from '../footer/Footer';
import { qnaListDB } from '../../service/database';

const QnAListPage = (qna) => {
  const navigate = useNavigate();

  const [qnalist, setQnaList] = useState([]);
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
          QNA_DATE: row.QNA_DATE
        };
        list.push(obj);
      });
      setQnaList(list);
    };
    qnaList();
  }, [setQnaList]);

  const handleQna = () => {
    navigate('/qna/writer');
  }

  const getAuth = (listItem) => {
    console.log(listItem);
    console.log(listItem.qna_secret)
    if(listItem.USER_ID === listItem.USER_ID){
      navigate(`/qna/detail?QNA_NO=${listItem.QNA_NO}`)
    } else {
      console.log("권한이 없습니다.")
    }
  }

  const listHeaders = ["글번호","분류","제목", "등록일"];
  const HeaderWd = ["7%","8%","75%", "10%"];


  const listHeadersElements = listHeaders.map((listHeader, index) => 
  listHeader==='제목'?
    <th key={index} style={{width:HeaderWd[index], paddingLeft:"40px"}}>{listHeader}</th>
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
            {listItem.comment?<span style={{fontWeight:"bold"}}>&nbsp;&nbsp;[답변완료]</span>:<span>&nbsp;&nbsp;[미답변]</span>}
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
          <h3 style={{marginLeft:"10px"}}>QnA 게시판</h3>
        </HeaderDiv>
        <div>
          <BButton style={{ marginLeft: 'auto' }} onClick={handleQna}>작성하기</BButton>
        </div>
        <FormDiv>
          <div>
            <div style={{display:"flex", justifyContent:"space-between", height:"40px"}}>
              {
                sessionStorage.getItem('auth')==='teacher'&&
                <BButton style={{width:"80px", height:"38px"}} onClick={()=>{navigate(`/qna/write`)}}>글쓰기</BButton>
              }
            </div>
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