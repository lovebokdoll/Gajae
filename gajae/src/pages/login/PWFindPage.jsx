import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import { setToastMessage } from '../../redux/toastStatus/action';
import { findUserPW } from '../../service/user/user';
import { DividerDiv, DividerHr, DividerSpan } from '../../style/FormStyle';
import { CenteredContainer, FindLink } from './styled-login';
import { MGDIV } from './styled-loginpage';

const PWFindPage = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [mobile, setMobile] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!id.trim() || !mobile.trim()) {
      dispatch(setToastMessage('이름하고 이메일을 모두 입력해주세요.'));
      return;
    }

    const user = {
      USER_ID: id.trim(),
      USER_MOBILE: mobile.trim(),
    };

    console.log(user);
    const findID = async () => {
      const response = await findUserPW(user);
      console.log(response.data);

      if (response.data.length === 0) {
        setResult('존재하지 않는 아이디입니다.');
      } else {
        setResult(`비밀번호는 ` + response.data[0].USER_PW + ` 입니다.`);
        setId('');
        setMobile('');
      }
    };
    findID();
  };

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
         <div className="containerBig" style={{width:'1900px',height:'800px', backgroundSize: 'cover', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
  <div className="containerSmall" style={{ marginTop:'40px',marginBottom:'40px',width:'650px', height:'650px',  borderRadius:'20px', backgroundColor:'rgba(255,255,255,0.5)', position: 'relative' }}>
  <div className='image-cover'>
  <div className='image-container' style={{ backgroundImage: "url('/images/LoginLogo.png')" }} />
</div>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <InputLabel htmlFor="id">아이디</InputLabel>
            <Input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} style={{width:'300px'}}/>
          </FormGroup>
          <FormGroup>
            <InputLabel htmlFor="mobile">핸드폰번호</InputLabel>
            <Input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </FormGroup>
          <MGDIV></MGDIV>
          <ButtonContainer>
            <Button type="submit">비밀번호 찾기</Button>{' '}
          </ButtonContainer>
          {result && <ResultText> {result}</ResultText>}
        </Form>
      </FormContainer>
      <DividerDiv>
        
        <DividerSpan>
          <CenteredContainer>
            <p>
              <FindLink to="/login" className="text-decoration-none">
                로그인
              </FindLink>
            </p>
          </CenteredContainer>
        </DividerSpan>
      </DividerDiv>
      </div></div>
    </>
  );
};

export default PWFindPage;

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
  background-color: #003580;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 2px solid #ddd;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    background-color: skyblue;
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
