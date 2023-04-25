import React, { useEffect, useState } from 'react';
import { Accordion,Table } from 'react-bootstrap';
import { ContainerDiv, FormDiv, HeaderDiv } from '../../style/FormStyle';
import HeaderNav1 from '../header/HeaderNav1';
import { noticeListDB } from '../../service/database';
const NoticeListPage = (property) => {

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
          A_CONTENT: row.A_CONTENT
        };
        list.push(obj);
      });
      setListBody(list);
    };
    noticeList();
  }, [setListBody]);

  const listHeaders = ['번호', '제목'];
  const HeaderWd = ['5%', '95%'];
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
                  &nbsp;&nbsp;{listItem.A_TITLE}
                </Accordion.Header>
                <Accordion.Body>
                  <p>{listItem.A_CONTENT}</p>
                </Accordion.Body>
              </Accordion>
            </td>
          </tr>
        );
      });
  return (
    <>
      <HeaderNav1 />
      <ContainerDiv>
        <HeaderDiv>
          <h3 style={{ marginLeft: '10px' , marginTop: '50px'}}>자주 묻는 질문</h3>
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
          </div>
        </FormDiv>
      </ContainerDiv>
    </>
  );
          }
export default NoticeListPage;