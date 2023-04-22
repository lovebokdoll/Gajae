import React, { useCallback, useEffect, useState } from 'react';
import { Accordion, Pagination, Table } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { ContainerDiv, FormDiv, HeaderDiv } from '../../style/FormStyle';
import HeaderNav1 from '../header/HeaderNav1';
import { noticeListDB } from '../../service/database';
const NoticeListPage = (property) => {
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
  useEffect(() => {
    const noticeList = async () => {
      const res = await noticeListDB(property);
      console.log(res.data);
      const list = [];
      res.data.forEach((row) => {
        const obj = {
          A_NO: row.A_NO,
          A_TITLE: row.A_TITLE,
          A_DATE: row.A_DATE,
          A_CONTENT: row.A_CONTENT
        };
        list.push(obj);
      });
      setListBody(list);
    };
    noticeList();
  }, [setListBody, page]);
  const listHeaders = ['번호', '제목', '날짜'];
  const HeaderWd = ['8%', '80%', '12%'];
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
          <tr key={index}>
            <td style={{ width: HeaderWd[0], fontSize: '15px', textAlign: 'center' }}>
              {listItem.A_NO}
            </td>
            <td style={{ width: HeaderWd[1] }}>
              <Accordion style={{ backgroundColor: 'white' }}>
                <Accordion.Header>
                  {!isNaN(listItem.file) && (
                    <span>
                      <i style={{ width: '15px', height: '15px' }} className={'fas fa-image'}></i>
                    </span>
                  )}
                  &nbsp;&nbsp;{listItem.A_TITLE}
                </Accordion.Header>
                <Accordion.Body>
                  <p>{listItem.A_CONTENT}</p>
                </Accordion.Body>
              </Accordion>
            </td>
            <td style={{ width: HeaderWd[2], fontSize: '15px', textAlign: 'center' }}>
              {listItem.A_DATE}
            </td>
          </tr>
        );
      });
  return (
    <>
      <HeaderNav1 />
      <ContainerDiv>
        <HeaderDiv>
          <h3 style={{ marginLeft: '10px' }}>공지사항</h3>
        </HeaderDiv>
        <FormDiv>
          <div>
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
            <Pagination page={page} path={'/notice/list'} />
          </div>
        </FormDiv>
      </ContainerDiv>
    </>
  );
          }
export default NoticeListPage;