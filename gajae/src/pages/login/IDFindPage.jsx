import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import { setToastMessage } from '../../redux/toastStatus/action';
import { findUserID } from '../../service/user/user';
import { DividerDiv, DividerHr, DividerSpan } from '../../style/FormStyle';
import { CenteredContainer, FindLink } from './styled-login';

const IDFindPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      dispatch(setToastMessage('이름하고 이메일을 모두 입력해주세요.'));
      return;
    }

    const user = {
      USER_NAME: name.trim(),
      USER_EMAIL: email.trim(),
    };

    console.log(user);
    const findID = async () => {
      const response = await findUserID(user);
      console.log(response.data);

      if (response.data.length === 0) {
        setResult('존재하지 않는 회원입니다.');
      } else {
        setResult(`아이디는 ` + response.data[0].USER_ID + ` 입니다.`);
        setName('');
        setEmail('');
      }
    };
    findID();
  };

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <InputLabel htmlFor="name">이름</InputLabel>
            <Input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <InputLabel htmlFor="email">이메일</InputLabel>
            <Input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormGroup>
          <ButtonContainer>
            <Button type="submit">아이디 찾기</Button>
          </ButtonContainer>
          {result && <ResultText> {result}</ResultText>}
        </Form>
      </FormContainer>
      <DividerDiv>
        <DividerHr />
        <DividerSpan>
          <CenteredContainer>
            <p>
              <FindLink to="/login/findpw" className="text-decoration-none">
                비밀번호 찾기
              </FindLink>
            </p>
          </CenteredContainer>
        </DividerSpan>
      </DividerDiv>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default IDFindPage;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /*height: calc(100vh - 35rem);  subtract the header and footer height */
  height: 400px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const InputLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const Input = styled.input`
  padding: 0.6rem;
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  font-size: 1.2rem;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 2px solid #ddd;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    background-color: violet;
  }
`;


const ResultText = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContainer = styled.div`
  background-color: #f4f4f4;
  padding: 2rem 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
