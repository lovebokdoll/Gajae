import styled from 'styled-components';

export const ResDiv = styled.div`
  margin-right: 0%;
  display: block;
  flex-direction: column;
  width: 806px;
  align-items: center;
  height: 350px;
`;

export const ResList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const ResItem = styled.li`
  width: 805px;
  height: 345px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  list-style-type: none;
  margin: 10px 0px 0px 0px;
`;

export const ResWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 800px;
  height: 300px;
  position: relative;
  margin: 15px 0 15px 0;
`;
export const ImageContainer = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  flex-basis: 15%;
`;

export const ImageWrapper = styled.div`
  margin-bottom: 10px;
  flex: 0 0 33.333333%;
  img {
    width: 100px;
    height: 100px;
  }
`;
export const ImageDescription = styled.div`
  flex: 0 0 33.333333%;
  width: 100%;
  padding: 0.5rem; /* 기존 코드: 1rem */
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

export const ContentWrapper = styled.div`
  flex: 0 0 100%;
  margin-left: 20px;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResTitle = styled.h5`
  margin-left: 20px;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const ResText = styled.p`
  margin-top: 10px;
  font-size: 1rem;
`;

export const CardTimestamp = styled.p`
  font-size: 0.875rem;
  color: #006ce3;
  bottom: 0;
  margin-top: auto;
`;

export const ColorDiv = styled.div`
  background-color: lightgray;
  height: 1px;
  with: 100%;
`;

export const ResBtnWrapper = styled.div`
  float: right;
  background-color: white;
  margin: 1.0px 1.0px 0px 0px;
`;

export const ResTLineDiv = styled.div`
  background-color: #1e3050;
  height: 7px;
  with: 100%;
`;

export const ResEmtyDiv = styled.div`
  height: 10px;
`;
