import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormGroup } from 'react-bootstrap';

export const FindLink = styled(Link)`
  color: violet; /* color 조정 */
  font-size: 1.1rem; /* font size 조정 */
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MBDIV = styled.div`
  margin-bottom: 30px;
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CodeFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  label {
    margin-bottom: 10px;
  }
`;

export const CodeFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const CodeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CodeInput = styled.input`
  padding: 0.6rem;
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  font-size: 1.2rem;
`;

export const MyH2 = styled.h1`
  font-size: 38px;
  margin-bottom: 50px;
  margin-top: 15px;
  font-weight: 20px;
  text-align: center;
`;
