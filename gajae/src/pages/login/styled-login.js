import styled from "styled-components";
import { Link } from "react-router-dom";
export const FindLink = styled(Link)`
  color: violet; /* color 조정 */
  font-size: 1.1rem; /* font size 조정 */
`;
export const SignInForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
