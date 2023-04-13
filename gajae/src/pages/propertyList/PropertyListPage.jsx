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

/**
 * 사용자가 마이페이지에서 여행지, 체크인&체크아웃 날짜, 인원 수&객실 수를 선택한 데이터를 기준하여 화면을 렌더링한다.
 *
 * @returns 검색 결과 페이지 (Search Result)
 */
const PropertyListPage = () => {
  console.log("PropertyListPage")
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log(location.search)

  const [property, setProperty] = useState([]);

  //사용자가 입력하는 값
  const params = {
    P_ADDRESS: searchParams.get('P_ADDRESS'),
  };
  console.log(params.P_ADDRESS)

  useEffect(() => {
    const propertyList = async () => {
      const response = await searchListDB(params);
      setProperty(response.data);
    };
    propertyList();
  }, [params]);
  console.log(params)

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
                  <BButton type="mapbotton" style={{ height: '50px', width: '80px', float: '' }} onClick={{}}>
                    지도에서 보기
                  </BButton>
                  <DropdownButton title="정렬순서" style={{ width: '400px' }}>
                    <Dropdown.Item>추천순</Dropdown.Item>
                    <Dropdown.Item>리뷰많은순</Dropdown.Item>
                    <Dropdown.Item>평점높은순</Dropdown.Item>
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
