import React, { useCallback, useEffect, useState } from 'react';
import { Pagination, Table } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { qnaListDB } from '../../service/qnaLogic';
import { BButton, ContainerDiv, FormDiv, HeaderDiv } from '../../style/FormStyle';
import HeaderNav1 from '../header/HeaderNav1';
import MyFilter from './MyFilter';
import SearchBar from './SearchBar';

const QNAListPage = ({ authLogic }) => {
  const navigate = useNavigate();
  /**
   * 페이징 처리시에 현재 내가 바라보는 페이지 정보 담기
   */
  let page = 1;

  /**
   * URL주소에 한글이 있을 때 사용
   */
  const search = decodeURIComponent(useLocation().search);
  console.log('search ===>', search);

  const [listBody, setListBody] = useState([]);
  /**
   * qna_type 구분 상세값 - label
   * tTitle - qna_type 상태를 관리하기 위해 선언
   */
  const [types] = useState(['전체', '일반', '결제', '양도', '회원', '수업']);
  const [tTitle, setTTitle] = useState('전체');

  // 함수 메모이제이션 - useCallback <-> useMemo는 값을 메모이제이션
  const handleTTitle = useCallback((element) => {
    // 파라미터로 받은 값을 저장 - tTitle
    setTTitle(element);
  }, []); // 의존성 배열이 비어있으므로 한 번 메모이제이션 된 함수값을 계속 기억

  useEffect(() => {
    const qnaList = async () => {
      //http://localhost:3000/qna/list?condition=제목|내용|작성자&content=입력한값
      // [0] - ?condition=제목|내용|작성자
      // [1] - content=입력한값
      const condition = search
        .split('&')
        .filter((item) => {
          return item.match('condition');
        })[0]
        ?.split('=')[1];

      const content = search
        .split('&')
        .filter((item) => {
          return item.match('content');
        })[0]
        ?.split('=')[1];

      //콤보박스 내용 -> 제목, 내용, 작성자 중 하나
      //사용자가 입력한 키워드
      const qna_type = search
        .split('&')
        .filter((item) => {
          return item.match('qna_type');
        })[0]
        ?.split('=')[1];
      console.log('qna_type ===>', qna_type);
      console.log('condition ===>', condition);
      console.log('content ===>', content);
      setTTitle(qna_type || '전체'); //쿼리스트링이 없으면 전체가 담긴다.
      const board = {
        //get방식 조건검색 - params 속성에 들어갈 변수
        page: page,
        qna_type: qna_type,
        condition: condition,
        content: content,
      };
      const res = await qnaListDB(board);
      console.log(res.data);
      const list = [];

      res.data.forEach((row) => {
        const obj = {
          qna_bno: row.QNA_BNO,
          qna_type: row.QNA_TYPE,
          qna_title: row.QNA_TITLE,
          mem_name: row.MEM_NAME,
          qna_date: row.QNA_DATE,
          qna_hit: row.QNA_HIT,
          qna_secret: JSON.parse(row.QNA_SECRET),
        };
        list.push(obj);
      });
      setListBody(list);
    };
    qnaList();
  }, [setListBody, setTTitle, page, search]);

  //listItemsElements 클릭이벤트 처리시 사용
  const getAuth = (listItem) => {
    console.log(listItem);
  };

  const listHeaders = ['글번호', '분류', '제목', '작성자', '등록일', '조회수'];
  const HeaderWd = ['8%', '15%', '40%', '15%', '12%', '10%'];

  const listHeadersElements = listHeaders.map((listHeader, index) =>
    listHeader === '제목' ? (
      <th key={index} style={{ width: HeaderWd[index], paddingLeft: '40px' }}>
        {listHeader}
      </th>
    ) : (
      <th key={index} style={{ width: HeaderWd[index], textAlign: 'center' }}>
        {listHeader}
      </th>
    )
  );

  const listItemsElements = listBody.map((listItem, index) => {
    console.log(listItem);
    return (
      <tr
        key={index}
        onClick={() => {
          getAuth(listItem);
        }}
      >
        {Object.keys(listItem).map((key, index) =>
          key === 'secret' || key === 'no' || key === 'file' || key === 'comment' ? null : key === 'date' ? (
            <td key={index} style={{ fontSize: '15px', textAlign: 'center' }}>
              {listItem[key]}
            </td>
          ) : key === 'title' ? (
            <td key={index}>
              {isNaN(listItem.file) && (
                <span>
                  <i style={{ width: '15px', height: '15px' }} className={'fas fa-file-lines'}></i>
                </span>
              )}
              {!isNaN(listItem.file) && (
                <span>
                  <i style={{ width: '15px', height: '15px' }} className={'fas fa-image'}></i>
                </span>
              )}
              &nbsp;&nbsp;{listItem[key]}
              {listItem.comment ? <span style={{ fontWeight: 'bold' }}>&nbsp;&nbsp;[답변완료]</span> : <span>&nbsp;&nbsp;[미답변]</span>}
              {listItem.secret && (
                <span>
                  &nbsp;&nbsp;<i className="fas fa-lock"></i>
                </span>
              )}
            </td>
          ) : (
            <td key={index} style={{ textAlign: 'center' }}>
              {listItem[key]}
            </td>
          )
        )}
      </tr>
    );
  });

  return (
    <>
      <HeaderNav1 authLogic={authLogic} />
      <ContainerDiv>
        <HeaderDiv>
          <h3 style={{ marginLeft: '10px' }}>QnA 게시판</h3>
        </HeaderDiv>
        <FormDiv>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '40px' }}>
              <MyFilter types={types} type={true} id={'qna_type'} title={tTitle} handleTitle={handleTTitle} />
              {/*    {sessionStorage.getItem('auth') === '2' && (
               
              )} */}
              <BButton
                style={{ width: '80px', height: '38px' }}
                onClick={() => {
                  navigate(`/qna/insert`);
                }}
              >
                글쓰기
              </BButton>
            </div>
            <Table responsive hover style={{ minWidth: '800px' }}>
              <thead>
                <tr>{listHeadersElements}</tr>
              </thead>
              <tbody>{listItemsElements}</tbody>
            </Table>
          </div>
          <div
            style={{
              margin: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Pagination page={page} path={'/qna/list'} />
            <SearchBar />
          </div>
        </FormDiv>
      </ContainerDiv>
    </>
  );
};

export default QNAListPage;
