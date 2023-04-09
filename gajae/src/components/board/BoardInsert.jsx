import React, { useCallback, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { boardInsertDB, qnaInsertDB } from '../../service/boardLogic';
import { uploadFileDB } from '../../service/database';
import { ContainerDiv, FormDiv, HeaderDiv } from '../../style/FormStyle';
import BoardFileInsert from './BoardFileInsert';
import QuillEditor from './QuillEditor';

const BoardInsert = () => {
  //const user_number = sessionStorage.getItem(user_number);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [nickname, setNickname] = useState('');
  const [reviewPassword, setReviewPassword] = useState('');
  const [file_name, setFilename] = useState('');
  const [file_size, setFilesize] = useState('');
  /**
   * QuillEditor에서 이미지를 선택하면 imageUploadDB를 호출하고 스프링 프로젝트 pds folder에 image upload
   * pds folder에 upload된 file을 읽어서 editor안에 출력한다. imageGet?imageNmae
   */
  const [files, setFiles] = useState([]);

  const quillRef = useRef();
  const fileRef = useRef();
  const navigate = useNavigate();

  /**
   * 사용자가 입력한 값을 useState에 초기화 하기
   */
  const handleTitle = useCallback((event) => {
    setTitle(event);
  }, []);

  const handleContent = useCallback((event) => {
    //QuillEditor에서 담긴다. - 태그 포함된 정보
    setContent(event);
  }, []);

  const handleSecret = useCallback((event) => {
    setReviewPassword(event);
  }, []);

  const handleNickname = useCallback((event) => {
    setNickname(event);
  }, []);

  const handleFiles = () => {
    // setFilename(event);
  };

  const boardInsert = async () => {
    const board = {
      qna_bno: 0,
      qna_title: title,
      qna_content: content,
      qna_type: nickname,
      qna_secret: reviewPassword,
      qna_hit: 0,
      mem_no: 17,
    };

    const res = await qnaInsertDB(board);
    console.log(res);
    //  window.location.replace('/board');
    navigate('/board');
  };

  const handleChange = async (event) => {
    const str = fileRef.current.value.split('/').pop().split('\\').pop();
    setFilename(str);
    console.log(str);
    const formData = new FormData();
    const file = document.querySelector('#file-input').files[0];
    formData.append('file_name', file);
    const res = await uploadFileDB(formData);
    console.log('res.data ===>', res.data);
    const fileinfo = res.data.split(',');
    console.log('fileinfo ===>', fileinfo);
    setFilename(fileinfo[0]);
    setFilesize(fileinfo[1]);
  };

  return (
    <>
      {' '}
      <ContainerDiv>
        <HeaderDiv>
          <h3 style={{ marginLeft: '10px' }}>공지사항 글작성</h3>
        </HeaderDiv>
        <FormDiv>
          <div style={{ width: '100%', maxWidth: '2000px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <h3>제목</h3>
              <Button
                onClick={() => {
                  boardInsert();
                }}
              >
                글쓰기
              </Button>
            </div>
            <input
              id="dataset-title"
              type="text"
              maxLength="50"
              placeholder="제목을 입력하세요."
              style={{ width: '100%', height: '40px', border: '1px solid lightGray', marginBottom: '5px' }}
              onChange={(e) => {
                handleTitle(e.target.value);
              }}
            />{' '}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <h3>닉네임</h3>
            </div>
            <input
              id="dataset-writer"
              type="text"
              maxLength="50"
              placeholder="닉네임을 입력하세요."
              style={{ width: '200px', height: '40px', border: '1px solid lightGray', marginBottom: '5px' }}
              onChange={(e) => {
                handleNickname(e.target.value);
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <h3>비밀번호</h3>
            </div>
            <input
              id="dataset-pw"
              type="text"
              maxLength="50"
              placeholder="비밀번호를 입력하세요."
              style={{ width: '200px', height: '40px', border: '1px solid lightGray', marginBottom: '5px' }}
              onChange={(e) => {
                handleSecret(e.target.value);
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <h3>첨부파일</h3>
            </div>
            <input
              id="file-input"
              name="file_name"
              ref={fileRef}
              type="file"
              maxLength="50"
              className="visuallyhidden"
              onChange={handleChange}
            />
            &nbsp;
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}></div>
            <h3>상세내용</h3>
            <hr style={{ margin: '10px 0px 10px 0px' }} />
            <QuillEditor value={content} handleContent={handleContent} quillRef={quillRef} files={files} handleFiles={handleFiles} />
            <BoardFileInsert files={files} />
          </div>
        </FormDiv>
      </ContainerDiv>
    </>
  );
};

export default BoardInsert;
