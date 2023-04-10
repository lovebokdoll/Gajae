import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { BButton, ContainerDiv, FormDiv, HeaderDiv } from '../../style/FormStyle';
import QuillEditor from '../board/QuillEditor';
import Footer from '../footer/Footer';
import HeaderNav1 from '../header/HeaderNav1';
import MyFilter from './MyFilter';
import BoardFileInsert from '../board/BoardFileInsert';
import { qnaInsertDB } from '../../service/qnaLogic';

const QNAInsertForm = ({ authLogic }) => {
  const [title, setTitle] = useState(''); //제목
  const [content, setContent] = useState(''); //내용
  const [secret, setSecret] = useState(false); //비밀글
  const [tTitle, setTTitle] = useState('일반'); // qna_type
  const [types] = useState(['일반', '결제', '양도', '회원', '수업']); //qna_type의 라벨값
  const [files, setFiles] = useState([]); //파일처리
  const quillRef = useRef();


  const handleContent = useCallback((value) => {
    console.log(value);
    setContent(value);
  }, []);

  const handleFiles = useCallback(
    (value) => {
      setFiles([...files, value]);
    },
    [files]
  );

  const handleTitle = useCallback((e) => {
    setTitle(e);
  }, []);

  const handleTTitle = useCallback((e) => {
    setTTitle(e);
  }, []);

  const qnaInsert = async () => {
    console.log('secret ===> ' + secret + ', type of secret ===> ' + typeof secret);
    const qna = {
      qna_title: title,
      qna_content: content,
      qna_type: tTitle,
      qna_secret: secret ? 'true' : 'false',
      qna_hit: 0,
      mem_no: 17,
      fileNames: files,
    };

    if (qna.qna_title === '') {
      alert('제목을 입력해주세요');
      return;
    } else if (qna.qna_content === '') {
      alert('내용을 입력해주세요');
      return;
    }

    const response = await qnaInsertDB(qna);
    console.log(response.data);

    if (response.data === 1) {
      alert('입력 성공');
      window.location.replace('/qna/list?page=1');
    } else if (response.data === 0) {
      alert('입력 실패');
    }
  };

  return (
    <>
      <HeaderNav1 authLogic={authLogic} />
      <ContainerDiv>
        <HeaderDiv>
          <h3>QNA 글작성</h3>
        </HeaderDiv>
        <FormDiv>
          <div style={{ width: '100%', maxWidth: '2000px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <h2>제목</h2>
              <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginRight: '10px', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px' }}>비밀글</span>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    style={{ paddingLeft: '46px' }}
                    onClick={() => {
                      setSecret(!secret);
                    }}
                  />
                </div>
                <MyFilter title={tTitle} types={types} handleTitle={handleTTitle}></MyFilter>
                <BButton
                  style={{ marginLeft: '10px' }}
                  onClick={() => {
                    qnaInsert();
                  }}
                >
                  글쓰기
                </BButton>
              </div>
            </div>
            <input
              id="dataset-title"
              type="text"
              maxLength="50"
              placeholder="제목을 입력하세요."
              style={{ width: '100%', height: '40px', border: '1px solid lightGray' }}
              onChange={(e) => {
                handleTitle(e.target.value);
              }}
            />
            <hr style={{ margin: '10px 0px 10px 0px' }} />
            <h3>상세내용</h3>
            <QuillEditor value={content} handleContent={handleContent} quillRef={quillRef} files={files} handleFiles={handleFiles} />
            <BoardFileInsert files={files} />
          </div>
        </FormDiv>
      </ContainerDiv>
      <Footer />
    </>
  );
};

export default QNAInsertForm;
