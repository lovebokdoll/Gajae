import { faComment, faCreditCard, faHeart, faHistory, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import { reviewListDB } from "../../service/reviewboardLogic";
import {
  MSCLeftDIV,
  MSCRightDIV,
  MSContainer,
  MyPageLinkMove,
  SignOutButton
} from './styled-mypage';

const MyReviewPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [myreview, setMyreview] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = [];
  const reviewsPerPage = 5;

  useEffect(() => {
    const reviewList = async () => {
      const res = await reviewListDB();
      if (res) {
        setMyreview(res.data);
      }
    };
    reviewList();
  }, []);

  for (let i = 1; i <= Math.ceil(myreview?.length / reviewsPerPage); i++) {
    pageNumber.push(i);
  }

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const start = indexOfFirstReview;
  const end = indexOfLastReview;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleDelete = () => {};
  return (
    <>
      <HeaderNav1 />
      <BackDiv>
        <ReviewList>
          {myreview.slice(start, end).map((review, index) => (
            <li key={index}>
              <hr />
              <ReviewWrapper>
                <ImageContainer>
                  <ImageWrapper>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="placeholder image"
                    />
                  </ImageWrapper>
                  <ImageDescription>호텔정보</ImageDescription>
                </ImageContainer>
                <ContentWrapper>
                  <ReviewTitle>{review.REVIEW_TITLE}</ReviewTitle>
                  <RText>{review.REVIEW_GOOD}</RText>
                  <RText>{review.REVIEW_BAD}</RText>
                  <CardTimestamp>{review.REVIEW_DATE}</CardTimestamp>
                  <ButtonContainer>
                    <ButtonWrapper>
                      <div className="dropdown">
                        <Btn
                          className="btn btn-custom dropdown-toggle border-0"
                          type="button"
                          onClick={toggleDropdown}
                        >
                          <i className="fa-solid fa-bars"></i>
                        </Btn>
                        <div
                          className={
                            isDropdownOpen
                              ? "dropdown-menu show"
                              : "dropdown-menu"
                          }
                        >
                          <Link
                            to="/review/reviewUpdate"
                            style={{ textDecoration: "none" }}
                          >
                            수정
                          </Link>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={handleDelete}
                          >
                            삭제
                          </a>
                        </div>
                      </div>
                    </ButtonWrapper>
                  </ButtonContainer>
                </ContentWrapper>
              </ReviewWrapper>
            </li>
          ))}
        </ReviewList>
        <nav>
          <ul className="pagination justify-content-center">
            {pageNumber.map((page) => (
              <li
                key={page}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </BackDiv>
      <Footer />
    </>
  );
};
export default MyReviewPage;

const BackDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 10px;
  max-width: 1200px;
  min-height: 650px;
  align-items: center;
`;

const ReviewList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 700px;
  height: 230px;
  position: relative;
  margin: 50px 0 50px 0;
`;

const ImageWrapper = styled.div`
  flex: 0 0 33.333333%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentWrapper = styled.div`
  flex: 0 0 66.666667%;
  padding: 1rem;
`;

const ReviewTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: bold;
`;

const RText = styled.p`
  margin-top: 10px;
  font-size: 1rem;
`;

const CardTimestamp = styled.p`
  font-size: 0.875rem;
  color: gray;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Btn = styled.button`
  font-size: 16px;
  border: none;
  cursor: pointer;
  border: 1px solid lightgray;
  background-color: white;
  &::after {
    content: "";
    transform: none;
    display: none;
  }
`;
const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding-right: 2px; /* 버튼과 콘텐츠 사이의 간격을 띄우기 위해 추가 */
`;

const ImageDescription = styled.div`
  flex: 0 0 33.333333%;
  width: 100%;
  padding: 0.5rem; /* 기존 코드: 1rem */
  font-size: 1rem;
  margin-top: 0.25rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33.333333%;
`;

const DropLink = styled(Link);
