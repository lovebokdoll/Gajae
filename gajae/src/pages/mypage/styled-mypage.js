import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MyPageUL = styled.ul`
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
  margin: 1em;
  padding: 1em;
  border: 1px solid lightgrey;
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

export const MSContainer = styled.div`
  width: 1140px;
  height: 707px;
  margin: 0px 82px;
  padding: 16px 0px;
`;

export const MSCLeftDIV = styled.div`
  width: 310px;
  height: 100%;
  float: left;
`;

export const MSCRightDIV = styled.div`
  width: 806px;
  height: 100%;
  float: right;
`;

export const MySettingsFlexByRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const MySettingsPageTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MSPTTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;
export const MSPTComment = styled.div`
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
  padding: 0px 16px;
`;
