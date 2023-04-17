import React from "react";
import {
  CardTitle,
  CardText,
  Icon,
  CardBody,
  CardContainer,
  CustomCard,
  Contents,
} from "../../style/HotelStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * 사용자가 선택한 호텔에 대한 시설정보를 보여준다
 * @param {*} param0
 * @returns
 */
const HotelFacilities = ({ row }) => {
  return (
    <>
      <div className="title">시설</div>
      <Contents>만족도 높은 숙소! 이용 후기 평점 8.0</Contents>
      <CardContainer>
        <CustomCard>
          <CardBody>
            <CardTitle>
              <Icon>
                <FontAwesomeIcon icon="fa-solid fa-house-circle-check" />
              </Icon>
              객실 내 시설
            </CardTitle>
            {row.FAC_ROOM?.split(",").map((option, index) => (
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
                <FontAwesomeIcon icon="fa-solid fa-mug-hot" />
              </Icon>
              식음료
            </CardTitle>
            {row.FAC_RESTARUANT?.split(",").map((option, index) => (
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
                <FontAwesomeIcon icon="fa-solid fa-unlock" />
              </Icon>
              보안
            </CardTitle>
            {row.FAC_SECURITY?.split(",").map((option, index) => (
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
                <FontAwesomeIcon icon="fa-solid fa-shower" />
              </Icon>
              화장실
            </CardTitle>
            {row.FAC_BATHROOM?.split(",").map((option, index) => (
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
                <FontAwesomeIcon icon="fa-solid fa-square-parking" />
              </Icon>
              주차여부
            </CardTitle>
            {row.FAC_PARKING?.split(",").map((option, index) => (
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
                <FontAwesomeIcon icon="fa-solid fa-utensils" />
              </Icon>
              식음료
            </CardTitle>
            {row.FAC_LIVING?.split(",").map((option, index) => (
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
                <FontAwesomeIcon icon="fa-solid fa-tv" />
              </Icon>
              미디어 / 테크놀로지
            </CardTitle>
            {row.FAC_MEDIA?.split(",").map((option, index) => (
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
                <FontAwesomeIcon icon="fa-solid fa-wifi" />
              </Icon>
              인터넷
            </CardTitle>
            {row.FAC_INTERNET?.split(",").map((option, index) => (
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
                <FontAwesomeIcon icon="fa-solid fa-language" />
              </Icon>
              지원 가능한 언어
            </CardTitle>
            {row.FAC_LANGUAGE?.split(",").map((option, index) => (
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
                <FontAwesomeIcon icon="fa-solid fa-kitchen-set" />
              </Icon>
              주방
            </CardTitle>
            {row.FAC_KITCHEN?.split(",").map((option, index) => (
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
                <FontAwesomeIcon icon="fa-regular fa-circle-question" />
              </Icon>
              리셉션 서비스
            </CardTitle>
            {row.FAC_RECEPTION?.split(",").map((option, index) => (
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
                <FontAwesomeIcon icon="fa-solid fa-info" />
              </Icon>
              일반
            </CardTitle>
            {row.FAC_GENERAL?.split(",").map((option, index) => (
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

export default HotelFacilities;
