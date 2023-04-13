import styled from "styled-components";

export const Charge_title = styled.div`
  font-family: "KOTRA_GOTHIC";
  // border: 1px solid black;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  margin: 10%;
`;

export const TotalPrice = styled.span`
  font-family: "KOTRA_GOTHIC";
  // border: 1px solid black;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  margin-left: 1em;
`;
export const CardContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #ebf3ff;
`;
export const CustomCard = styled.span`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: calc(30% - 10px);
  margin: 5px;
  // border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  text-align: left;
  padding: 2%;
`;
export const CardBody = styled.span`
  width: 100%;
`;
export const CardTitle = styled.p`
  font-size: 1em;
  // border:2px solid #003580; border-radius: 2em;
  border-bottom: 2px solid #003580;
  padding: 1em;
`;
export const CardText = styled.p`
  font-size: 0.85em;
`;

export const Icon = styled.span`
  margin: 5%;
  // padding:1em;
`;
