import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BButton } from '../../style/FormStyle';
import MyFilter from './MyFilter';

const SearchBar = () => {
  const [content, setContent] = useState('');
  const [types] = useState(['제목', '내용', '작성자']);

  const location = useLocation();
  const search = decodeURIComponent(location.search);
  console.log(search);
  const navigate = useNavigate();

  const [tTitle, setTTitle] = useState('제목');

  const handleTTitle = useCallback((e) => {
    setTTitle(e);
  }, []);

  useEffect(() => {
    search.split('&').forEach((item) => {
      console.log(item);
      if (item.match('condition')) {
        setTTitle(item.split('=')[1]);
      }
    });
  }, [search, setTTitle]); //의존성 배열에 search를 사용했고 상태훅을 선택했으니 그 정보가 변경될때마다 호출

  const setPath = () => {
    console.log(tTitle, content);
    console.log('search ===>', search);
    let path;
    // 앞에서 조회한 적이 있을 때 기존의 쿼리스트링 삭제 후 다시 쿼리스트링 만들어야 한다.
    if (search.match('condition')) {
      console.log('search.match(condition) ===>', search.match('condition'));
      path =
        location.pathname +
        search
          .replace(
            `&${search.split('&').filter((item) => {
              return item.match('page');
            })}&${search.split('&').filter((item) => {
              return item.match('content');
            })}`,
            `&condition=${tTitle}&content=${content}`
          )
          .replace(
            `&${search.split('&').filter((item) => {
              return item.match('page');
            })}`,
            '&page=1&'
          );
    } else {
      path = location.pathname + search + `?condition=${tTitle}&content=${content}`;
    }
    console.log('path ===>', path); ///qna/list?condition=제목&page=1
    return path;
  };

  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      <MyFilter types={types} title={tTitle} id={'condition'} handleTitle={handleTTitle} />
      <input
        type="text"
        value={content}
        style={{
          maxWidth: '600px',
          width: '40%',
          height: '40px',
          margin: '0px 10px 0px 10px',
          border: '1px solid lightgray',
          borderRadius: '10px',
        }}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <BButton
        style={{ width: '70px', height: '40px', marginRight: '10px' }}
        onClick={() => {
          navigate(setPath());
        }}
      >
        검색
      </BButton>
      <BButton
        style={{ width: '100px', height: '40px' }}
        onClick={() => {
          navigate(`/qna/list?page=1`);
          setContent('');
        }}
      >
        초기화
      </BButton>
    </div>
  );
};

export default SearchBar;
