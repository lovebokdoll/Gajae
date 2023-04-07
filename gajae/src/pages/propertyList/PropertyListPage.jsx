import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import HeaderNav1 from "../../components/header/HeaderNav1";
import HeaderNav2 from "../../components/header/HeaderNav2";
import FilterSidebar from "../../components/searchItem/FilterSidebar";
import PropertyCard from "../../components/searchItem/PropertyCard";
import SearchBox from "../../components/searchItem/SearchBox";
import { propertyListDB } from "../../service/database";

/**
 * 사용자가 마이페이지에서 여행지, 체크인&체크아웃 날짜, 인원 수&객실 수를 선택한 데이터를 기준하여 화면을 렌더링한다.
 *
 * @returns 검색 결과 페이지 (Search Result)
 */
const PropertyListPage = () => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    const propertyList = async () => {
      const propertys = {
        P_ID: 1,
      };
      const response = await propertyListDB(propertys);

      setProperty(response.data);
    };
    propertyList();
  }, []);
  console.log(property);

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2></HeaderNav2>
      <SearchBox />
      <FilterSidebar />
      {property.map((row, index) => (
        <PropertyCard key={index} row={row} />
      ))}
      <Footer />
    </>
  );
};

export default PropertyListPage;
