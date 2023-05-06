import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MyPageUL = styled.ul`
  margin: 10px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  diplay: grid;
  list-style: none;
`;

export const MyPageH2 = styled.h2`
  font-weight: bold;
  font-size: 1.2em;
  font: bold;
`;

export const MyPageLinkDIV = styled.div`
  font-size: 0.9em;
`;

export const MyPageLinkSPAN = styled.span`
  font-size: 0.85em;
  color: #006ce4;
`;

export const MyPageDIV = styled.div`
  width: 542px;
  height: 116px;
  margin: 0.8em;
  padding: 1em;
  border: 1px solid lightgrey;
`;

export const MyPageLinkMove = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 70px;
  border: 1px solid lightgrey;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
  padding-left: 0;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
  }
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const MyPageLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const SignOutButton = styled.button`
  background-color: white;
  color: black;
  width: 250px;
  height: 70px;
  border: 1px solid lightgrey;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

export const MSContainer = styled.div`
  width: 1140px;
  height: 1500px;
  margin: 0 auto; /* 수평 중앙 정렬 */
  padding-top: 50px;
  margin-top: 0px;
`;

export const MySettingContainer = styled.div`
  width: 1140px;
  height: 800px;
  margin: 0 auto; /* 수평 중앙 정렬 */
  padding-top: 50px;
  margin-top: 0px;
`;

export const MyPaymentContainer = styled.div`
  width: 1140px;
  height: 700px;
  margin: 0 auto; /* 수평 중앙 정렬 */
  padding-top: 50px;
  margin-top: 0px;
`;
export const MSCLeftDIV = styled.div`
  width: 260px;
  height: 100%;
  float: left;
  display: flex; /* add display: flex */
  justify-content: center; /* add justify-content: center */
  margin: 0px 0px 0px 10px;
`;

export const MSCRightDIV = styled.div`
  width: 806px;
  height: 100%;
  float: right;
  margin: 0px 30px 0px 0px;
`;

export const MySettingsFlexByRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
`;

export const MySettingsPageTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const MSPTTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;
export const MSPTComment = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

export const MySettingsRow = styled.div`
  width: 100%;
  padding: 16px 0px;
  border-top: 1px solid lightgrey;
`;

export const MySettingsRowLayout = styled.div`
  width: 100%;
`;

export const UserDeactivateButton = styled.button`
  margin-left: auto;
  background-color: transparent;
  color: blue;
  border-radius: 4px;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

export const EditButton = styled.button`
  margin-left: auto;
  background-color: transparent;
  color: blue;
  border: none;
  border-radius: 4px;
  font-size: 1.2em;
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;

export const ProfileUploadButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 40%; /* 추가 */
  display: flex;
  align-items: center;

  &:hover {
    background-color: #ebf3ff;
  }
`;

export const AbsoluteDIV = styled.div`
  margin-top: '30px';
`;
