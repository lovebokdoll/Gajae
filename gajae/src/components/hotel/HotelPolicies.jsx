import React from "react";
import {
  CardBody,
  CardContainer,
  CardText,
  CardTitle,
  Contents,
  CustomCard,
  Icon,
} from "../../style/HotelStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * 호텔정책 , 규칙
 * @returns
 */
const HotelPolicies = ({ row }) => {
  return (
    <>
      <div className="title">하우스룰</div>
      <Contents>
        {" "}
        {row.ROOM_TYPE}에 별도 요청 접수 가능 - 다음단계에서 입력하세요!
      </Contents>
      <CardContainer>
        <CustomCard>
          <CardBody>
            <CardTitle>
              <Icon>
                <FontAwesomeIcon icon="fa-regular fa-credit-card" />
              </Icon>
              환불정책
            </CardTitle>
            {row.P_REFUND?.split(",").map((option, index) => (
              <CardText key={index}>
                <Icon>
                  <FontAwesomeIcon icon="fa-solid fa-check" />
                </Icon>
                {option}
              </CardText>
            ))}
          </CardBody>
        </CustomCard>
        <CustomCard>
          <CardBody>
            <CardTitle>
              <Icon>
                <FontAwesomeIcon icon="fa-solid fa-person" />
              </Icon>
              수용인원
            </CardTitle>
            {row.P_MAXPEOPLE?.split(",").map((option, index) => (
              <CardText key={index}>
                <Icon>
                  <FontAwesomeIcon icon="fa-solid fa-check" />
                </Icon>
                {option}
              </CardText>
            ))}
          </CardBody>
        </CustomCard>
        <CustomCard>
          <CardBody>
            <CardTitle>
              <Icon>
                <FontAwesomeIcon icon="fa-solid fa-house-circle-check" />
              </Icon>
              규모
            </CardTitle>
            {row.P_SCALE?.split(",").map((option, index) => (
              <CardText key={index}>
                <Icon>
                  <FontAwesomeIcon icon="fa-solid fa-check" />
                </Icon>
                {option}
              </CardText>
            ))}
          </CardBody>
        </CustomCard>
        <CustomCard>
          <CardBody>
            <CardTitle>
              <Icon>
                <FontAwesomeIcon icon="fa-solid fa-lightbulb" />
              </Icon>
              체크인
            </CardTitle>
            {row.P_CHECKIN?.split(",").map((option, index) => (
              <CardText key={index}>
                <Icon>
                  <FontAwesomeIcon icon="fa-solid fa-check" />
                </Icon>
                {option}
              </CardText>
            ))}
          </CardBody>
        </CustomCard>
        <CustomCard>
          <CardBody>
            <CardTitle>
              <Icon>
                <FontAwesomeIcon icon="fa-regular fa-lightbulb" />
              </Icon>
              체크아웃
            </CardTitle>
            {row.P_CHECKOUT?.split(",").map((option, index) => (
              <CardText key={index}>
                <Icon>
                  <FontAwesomeIcon icon="fa-solid fa-check" />
                </Icon>
                {option}
              </CardText>
            ))}
          </CardBody>
        </CustomCard>
      </CardContainer>
    </>
  );
};

export default HotelPolicies;
