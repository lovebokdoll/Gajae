import styled from 'styled-components';

export const BackDiv = styled.div`
  margin-right: 0%;
  display: block;
  flex-direction: column;
  margin-left: 20px;
  max-width: 1000px;
  min-height: 900px;
  max-height: 1000px;
  align-items: center;
`;

export const ReviewList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ReviewItem = styled.li`
  width: 750px;
  height: 356px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  margin-bottom: 30px;
  list-style-type: none;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 800px;
  height: 300px;
  position: relative;
  margin: 20px 0 20px 0;
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

export const ReviewTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const RText = styled.p`
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

export const BtnWrapper = styled.div`
  float: right;
  background-color: white;
`;

export const TLineDiv = styled.div`
  background-color: #1e3050;
  height: 7px;
  with: 100%;
`;

export const EmtyDiv = styled.div`
  height: 50px;
`;
