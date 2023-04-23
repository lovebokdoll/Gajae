import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import FilterSidebar from '../../components/searchItem/FilterSidebar';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import PropertyCard from '../../components/searchItem/PropertyCard';
import SearchBox from '../../components/searchItem/SearchBox';
import { searchListDB } from '../../service/database';
import { BButton } from '../../style/FormStyle';
import './propertyList.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import ReactPaginate from 'react-paginate';

/**
 * 사용자가 마이페이지에서 여행지, 체크인&체크아웃 날짜, 인원 수&객실 수를 선택한 데이터를 기준하여 화면을 렌더링한다.
 *
 * @returns 검색 결과 페이지 (Search Result)
 */
const PropertyListPage = () => {
  const navigate = useNavigate();
  const [ranksList, setRanksList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  //URL 검색어 잘라서 가져오기
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log(location.search);

  // 정렬 순서
  const [orderBy, setOrderBy] = useState('');

  // 검색 결과
  const [property, setProperty] = useState([]);
  console.log(property);

  //사용자가 입력하는 값
  const params = {
    P_ADDRESS: searchParams.get('P_ADDRESS'),
    ROOM_CAPACITY: searchParams.get('ROOM_CAPACITY'),
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
  Cookies.set('P_ADDRESS', params.P_ADDRESS);
  Cookies.set('ROOM_CAPACITY', params.ROOM_CAPACITY);
  Cookies.set('P_TITLE', params.P_TITLE);

  //정렬조건
  const handleOrder = (orderBy) => {
    setOrderBy(orderBy);
  };

  //쿠키 값 빼서 스프링으로 같이 넘겨주기
  const P_ADDRESS = Cookies.get('P_ADDRESS');
  const ROOM_CAPACITY = Cookies.get('ROOM_CAPACITY');

  //사용자가 정렬조건 선택 시 스프링으로 요청
  useEffect(() => {
    if (orderBy === '가격 낮은순') {
      axios
        .post('http://localhost:9999/search/list', { orderBy: 'priceLow', P_ADDRESS, ROOM_CAPACITY})
        .then((response) => {
          setProperty(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (orderBy === '가격 높은순') {
      axios
        .post('http://localhost:9999/search/list', { orderBy: 'priceHigh', P_ADDRESS, ROOM_CAPACITY})
        .then((response) => {
          setProperty(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (orderBy === '평점 높은순') {
      axios
        .post('http://localhost:9999/search/list', { orderBy: 'reviewHigh', P_ADDRESS, ROOM_CAPACITY})
        .then((response) => {
          setProperty(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [orderBy]);
  console.log(orderBy);
  
  //성급 필터
  const ranks = (selectRanks) => {
    const selectedStars = selectRanks.split(','); // 선택한 모든 별점을 ',' 기준으로 분리하여 배열로 만듦
    
    // 별점 선택에 따라 요청 보내기
    selectedStars.forEach((P_STAR) => {
      Cookies.set('P_STAR',P_STAR)
      axios
      .post('http://localhost:9999/search/list', {orderBy, P_ADDRESS, ROOM_CAPACITY, P_STAR })
      .then((response) => {
        setProperty(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    });
  };

  useEffect(() => {}, [setRanksList]);

  //부대시설 필터
  const filters = (selectFilter) => {
    const selectedFilter = selectFilter.split(','); // ',' 기준으로 분리하여 배열로 만듦
    
    // 별점 선택에 따라 요청 보내기
    selectedFilter.forEach((P_EXTRA) => {
      Cookies.set('P_EXTRA',P_EXTRA)
      axios
        .post('http://localhost:9999/search/list', { orderBy, P_ADDRESS, ROOM_CAPACITY, P_EXTRA })
        .then((response) => {
          setProperty(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  useEffect(() => {

  }, [setFilterList]);


  const handleMap = () => {
    navigate('/kakaomap');
  };

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
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <SearchBox />
              <div>
                <BButton id="mapbtn" type="mapbotton" style={{ height: '60px', width: '200px' }} onClick={() => handleMap}>
                  지도에서 보기
                </BButton>
                <FilterSidebar ranks={ranks} filters={filters} />
              </div>
            </div>
            <div className="col-lg-9 col-md-12">
              <h4 className="search-hotel" style={{ marginTop: '20px', textAlign: 'center', fontWeight: 'bold' }}>
                {params.P_ADDRESS} : 검색된 숙소{property.length}개
              </h4>
              <DropdownButton id="dropdown-btn" title={orderBy ? orderBy : '정렬 순서'}>
                <Dropdown.Item id="dropdownItem-btn" onClick={() => handleOrder('가격 낮은순')}>
                  가격 낮은순
                </Dropdown.Item>
                <Dropdown.Item id="dropdownItem-btn" onClick={() => handleOrder('가격 높은순')}>
                  가격 높은순
                </Dropdown.Item>
                <Dropdown.Item id="dropdownItem-btn" onClick={() => handleOrder('평점 높은순')}>
                  평점 높은순
                </Dropdown.Item>
              </DropdownButton>
              <div className="row align-items-center mb-3"></div>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', width: '1000px' }}>
                {currentProperties.map((row, index) => (
                  <PropertyCard key={index} row={row} style={{ marginRight: '10px', marginBottom: '10px' }} />
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
