import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import FilterSidebar from '../../components/searchItem/FilterSidebar';
/* import PropertyCard from '../../components/searchItem/PropertyCard'; */
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import PropertyCard from '../../components/searchItem/PropertyCard';
import SearchBox from '../../components/searchItem/SearchBox';
import { searchListDB } from '../../service/database';
import { BButton } from '../../style/FormStyle';
import './propertyList.css';
import axios from 'axios';
import Cookies from 'js-cookie';

/**
 * 사용자가 마이페이지에서 여행지, 체크인&체크아웃 날짜, 인원 수&객실 수를 선택한 데이터를 기준하여 화면을 렌더링한다.
 *
 * @returns 검색 결과 페이지 (Search Result)
 */
const PropertyListPage = () => {
  //URL 검색어 잘라서 가져오기
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log(location.search)

  // 정렬 순서
  const [orderBy, setOrderBy] = useState('');
  const [address, setAddress] = useState('');

  // 검색 결과
  const [property, setProperty] = useState([]);
  console.log(property)

  //사용자가 입력하는 값
  const params = {
    P_ADDRESS: searchParams.get('P_ADDRESS'),
  };
  console.log(params.P_ADDRESS)

  //사용자가 검색한 결과에 대한 배열
  useEffect(() => {
    const propertyList = async () => {
      const response = await searchListDB(params);
      setProperty(response.data);
    };
    propertyList();
  }, []);
  console.log(params)

  //쿠키에 지역정보 저장
  Cookies.set('P_ADDRESS',params.P_ADDRESS)

  //정렬조건
  const handleOrder = (orderBy) => {
    setOrderBy(orderBy);
  };

  //쿠키 값 빼서 스프링으로 같이 넘겨주기
  const P_ADDRESS = Cookies.get('P_ADDRESS')

  //사용자가 정렬조건 선택 시 스프링으로 요청
  useEffect(() => {
    if (orderBy === '가격 낮은순') {
      axios.post('http://localhost:9999/search/list', { orderBy: 'priceLow', P_ADDRESS})
        .then(response => {
          setProperty(response.data);
        }) 
        .catch(error => {
          console.error(error);
        });
    } else if (orderBy === '가격 높은순'){
      axios.post('http://localhost:9999/search/list', { orderBy: 'priceHigh', P_ADDRESS })
      .then(response => {
        setProperty(response.data);
      }) 
      .catch(error => {
        console.error(error);
      });
    }
  }, [orderBy]);
  console.log(orderBy)


  return (
    <>
      <div>
        <HeaderNav1 />
        <HeaderNav2></HeaderNav2>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <SearchBox />
              <FilterSidebar />
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="row align-items-center mb-3">
                <div className="col-md-6">
                  <h3 className="search-hotel">검색된 숙소 {property.length}개</h3>
                </div>
                <div className="col-md-6 text-right">
                <BButton className='btn' type="mapbotton" style={{ height: '60px', width: '100px', float: '' }} onClick={() => {}}>
                  지도에서 보기
                </BButton>
                <DropdownButton className='dropdown-btn' title={orderBy ? orderBy : '정렬 순서'} style={{ width: '400px' }}>
                  <Dropdown.Item onClick={() => handleOrder('가격 낮은순')}>가격 낮은순</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleOrder('가격 높은순')}>가격 높은순</Dropdown.Item>
                </DropdownButton>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {property.map((row, index) => (
                  <PropertyCard key={index} row={row} style={{ marginRight: '10px', marginBottom: '10px' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default PropertyListPage;
