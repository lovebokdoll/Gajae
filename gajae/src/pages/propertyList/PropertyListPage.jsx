import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import HeaderNav1 from "../../components/header/HeaderNav1";
import HeaderNav2 from "../../components/header/HeaderNav2";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import PropertyCard from "../../components/searchItem/PropertyCard";
import SearchBox from "../../components/searchItem/SearchBox";
import { searchListDB } from "../../service/database";
import { BButton } from "../../style/FormStyle";
import "./propertyList.css";
import axios from "axios";
import Cookies from "js-cookie";
import ReactPaginate from "react-paginate";
import MapModal from "../../components/searchItem/MapModal";

/**
 * 사용자가 마이페이지에서 여행지, 체크인&체크아웃 날짜, 인원 수&객실 수를 선택한 데이터를 기준하여 화면을 렌더링한다.
 *
 * @returns 검색 결과 페이지 (Search Result)
 */
const PropertyListPage = () => {
  const navigate = useNavigate();
  const [ranksList, setRanksList] = useState([]);

  const [showModal, setShowModal] = useState(false); //모달창

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };

  //URL 검색어 잘라서 가져오기
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log(location.search);

  // 정렬 순서
  const [orderBy, setOrderBy] = useState("");

  // 검색 결과
  const [property, setProperty] = useState([]);

  //사용자가 입력하는 값
  const params = {
    P_ADDRESS: searchParams.get("P_ADDRESS"),
    ROOM_CAPACITY: searchParams.get("ROOM_CAPACITY"),
  };

  console.log(params.P_ADDRESS);
  console.log(params.ROOM_CAPACITY);

  //사용자가 검색한 결과에 대한 배열
  useEffect(() => {
    const propertyList = async () => {
      const response = await searchListDB(params);
      setProperty(response.data);
    };
    propertyList();
  }, []);
  console.log(params);

  //쿠키에 검색정보 저장
  Cookies.set("P_ADDRESS", params.P_ADDRESS);
  Cookies.set("ROOM_CAPACITY", params.ROOM_CAPACITY);
  Cookies.set("P_TITLE", params.P_TITLE);

  //정렬조건
  const handleOrder = (orderBy) => {
    setOrderBy(orderBy);
  };

  //쿠키 값 빼서 스프링으로 같이 넘겨주기
  const P_ADDRESS = Cookies.get("P_ADDRESS");
  const ROOM_CAPACITY = Cookies.get("ROOM_CAPACITY");

  //사용자가 정렬조건 선택 시 스프링으로 요청
  useEffect(() => {
    if (orderBy === "가격 낮은순") {
      axios
        .post("http://localhost:9999/search/list", {
          orderBy: "priceLow",
          P_ADDRESS,
          ROOM_CAPACITY,
        })
        .then((response) => {
          setProperty(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (orderBy === "가격 높은순") {
      axios
        .post("http://localhost:9999/search/list", {
          orderBy: "priceHigh",
          P_ADDRESS,
          ROOM_CAPACITY,
        })
        .then((response) => {
          setProperty(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [orderBy]);
  console.log(orderBy);

  const ranks = (P_STAR, value) => {
    if ("1" === P_STAR) {
      axios
        .post("http://localhost:9999/search/list", {
          P_ADDRESS,
          ROOM_CAPACITY,
          P_STAR,
        })
        .then((response) => {
          setRanksList(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else if ("2" === P_STAR) {
      axios
        .post("http://localhost:9999/search/list", {
          P_ADDRESS,
          ROOM_CAPACITY,
          P_STAR,
        })
        .then((response) => {
          setProperty(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else if ("3" === P_STAR) {
      axios
        .post("http://localhost:9999/search/list", {
          P_ADDRESS,
          ROOM_CAPACITY,
          P_STAR,
        })
        .then((response) => {
          setProperty(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else if ("4" === P_STAR) {
      axios
        .post("http://localhost:9999/search/list", {
          P_ADDRESS,
          ROOM_CAPACITY,
          P_STAR,
        })
        .then((response) => {
          setProperty(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else if ("5" === P_STAR) {
      axios
        .post("http://localhost:9999/search/list", {
          P_ADDRESS,
          ROOM_CAPACITY,
          P_STAR,
        })
        .then((response) => {
          setProperty(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {}, [setRanksList]);

  //페이징 처리
  const [currentPage, setCurrentPage] = useState(0);

  //한 페이지에 10개까지만 숙소 나열
  const propertiesPerPage = 10;
  const offset = currentPage * propertiesPerPage;
  const currentProperties = property.slice(offset, offset + propertiesPerPage);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
    window.scrollTo(0, 0); // 페이지가 선택될 때 맨 위로 스크롤
  };

  return (
    <>
      <div>
        <HeaderNav1 />
        <HeaderNav2></HeaderNav2>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <SearchBox />
              <div>
                <BButton
                  id="mapbtn"
                  type="mapbotton"
                  className="me-2 mb-2"
                  data-bs-dismiss="modal"
                  data-bs-target="#fullScreenModal"
                  style={{ height: "60px", width: "200px" }}
                  onClick={openModal}
                >
                  지도에서 보기
                </BButton>
                <MapModal show={showModal} closeModal={closeModal} />
              </div>
            </div>
            <div className="col-lg-9 col-md-12">
              <h4
                className="search-hotel"
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {params.P_ADDRESS} : 검색된 숙소{property.length}개
              </h4>
              <DropdownButton
                id="dropdown-btn"
                title={orderBy ? orderBy : "정렬 순서"}
              >
                <Dropdown.Item
                  id="dropdownItem-btn"
                  onClick={() => handleOrder("가격 낮은순")}
                >
                  가격 낮은순
                </Dropdown.Item>
                <Dropdown.Item
                  id="dropdownItem-btn"
                  onClick={() => handleOrder("가격 높은순")}
                >
                  가격 높은순
                </Dropdown.Item>
              </DropdownButton>
              <div className="row align-items-center mb-3"></div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "1000px",
                }}
              >
                {currentProperties.map((row, index) => (
                  <PropertyCard
                    key={index}
                    row={row}
                    style={{ marginRight: "10px", marginBottom: "10px" }}
                  />
                ))}
                <div className="rounded-box">
                  <ReactPaginate
                    pageCount={Math.ceil(property.length / propertiesPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName="pagination"
                    previousLabel="<"
                    nextLabel=">"
                    pageLinkClassName="pagination-link"
                    breakClassName="pagination-break"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default PropertyListPage;
