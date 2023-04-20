import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import { setToastMessage } from '../../redux/toastStatus/action';
import { regexEmail } from '../../service/regex';
import { activate, sendVerificationCode } from '../../service/user/user';
import { DividerDiv, DividerHr, DividerSpan } from '../../style/FormStyle';
import { CenteredContainer, CodeButtonContainer, CodeFormContainer, CodeFormGroup, CodeInput, FindLink } from './styled-login';
import { useNavigate } from 'react-router-dom';

const UserActivatePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState('');

  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  const handleEmailChange = (event) => {
    const message = regexEmail(event);
    setEmailMessage(message);
    setEmail(event.target.value);
  };

  const [result, setResult] = useState(null);
  const [code, setCode] = useState('');
  const [authCode, setAuthCode] = useState();

  const verificationCode = () => {
    if (code === authCode) {
      console.log('같은 코드');
    } else {
      setResult('인증 코드 확인 결과: 실패');
      return;
    }

    const parameterID = {
      USER_ID: id,
    };

    const userActivate = async () => {
      const response = await activate(parameterID);
      console.log(response.data);
    };
    userActivate();
    setResult('인증 코드 확인 결과: 성공, 5초 후에 로그인페이지로 이동합니다.');

    setTimeout(() => {
      navigate('/login');
    }, 5000);
  };

  const handleAuthCodeChange = (event) => {
    setAuthCode(event.target.value);
  };

  const sendVerificationEmail = (event) => {
    event.preventDefault();

    if (!id.trim() || !email.trim()) {
      dispatch(setToastMessage('아이디와 이메일을 모두 입력해주세요.'));
      return;
    }

    const parameterEmail = {
      email: email,
    };

    const sendEmail = async () => {
      const response = await sendVerificationCode(parameterEmail);
      setEmail('');
      console.log(response.data);
      setCode(response.data);
    };
    sendEmail();
  };

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      {code ? (
        <CodeFormContainer>
          <form>
            <CodeFormGroup>
              <label htmlFor="authCode">인증 코드 입력</label>
              <Input type="text" id="authCode" value={authCode} onChange={handleAuthCodeChange} />
            </CodeFormGroup>
            <CodeButtonContainer>
              <Button type="button" onClick={verificationCode}>
                인증 코드 확인
              </Button>
            </CodeButtonContainer>
            {result && <ResultText> {result}</ResultText>}
          </form>
        </CodeFormContainer>
      ) : (
        <FormContainer>
          <Form onSubmit={sendVerificationEmail}>
            <FormGroup>
              <InputLabel htmlFor="id">아이디</InputLabel>
              <Input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <InputLabel htmlFor="email">이메일주소</InputLabel>
              <Input type="text" id="email" value={email} onChange={handleEmailChange} />
              <div>{emailMessage}</div>
            </FormGroup>
            <ButtonContainer>
              <Button type="submit">인증 코드 발송</Button>{' '}
            </ButtonContainer>
            {result && <ResultText> {result}</ResultText>}
          </Form>{' '}
        </FormContainer>
      )}{' '}
      <DividerDiv>
        <DividerHr />
        <DividerSpan>
          <CenteredContainer>
            <p>
              <FindLink to="/" className="text-decoration-none">
                여행가재 홈페이지
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

export default UserActivatePage;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /*height: calc(100vh - 35rem);  subtract the header and footer height */
  height: 450px;
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
