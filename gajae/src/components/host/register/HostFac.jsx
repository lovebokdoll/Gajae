import React, { useState } from 'react';
import { hostextraInsertDB, hostfacInsertDB } from '../../../service/hostLogic';

import { Accordion, Card, Form } from 'react-bootstrap';
import { HostTable, HostTableItem1, HostTableItem2, HostTableItem3, TableTitle } from '../../../style/HostStyle';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { R_CardGroup_hotel } from '../../../style/HostStyle';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HostFac = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const p_id = params.get('p_id');
  console.log(p_id);
  //URL로 받아온 p_id담기
  const [tempid, setTempid] = useState();
  //어떤 값 담기는지 확인하기 이전 hotel이랑 같은 p_id찍혀야 한다.
  const [tempidUpdate, setTempUpdate] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState({
    FAC_ROOM: '',
    FAC_RESTARUANT: '',
    FAC_SECURITY: '',
    FAC_BATHROOM: '',
    FAC_PARKING: '',
    FAC_LIVING: '',
    FAC_MEDIA: '',
    FAC_INTERNET: '',
    FAC_SERVICE: '',
    FAC_GENERAL: '',
    FAC_LANGUAGE: '',
    FAC_BED: '',
    FAC_KITCHEN: '',
    FAC_RECEPTION: '',
    P_EXTRA: '',
  });
  const Toast = Swal.mixin({
    toast: true,
    position: 'center-center',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  const handleFacRoom = (e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_ROOM: checked
        ? [...selectedRooms.FAC_ROOM, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_ROOM.filter((val) => val !== value),
    }));
  };

  const handleFacRestaruant = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_RESTARUANT: checked
        ? [...selectedRooms.FAC_RESTARUANT, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_RESTARUANT.filter((val) => val !== value),
    }));
  }, []);
  const handleFacSecurity = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_SECURITY: checked
        ? [...selectedRooms.FAC_SECURITY, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_SECURITY.filter((val) => val !== value),
    }));
  }, []);
  const handleFacBathroom = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_BATHROOM: checked
        ? [...selectedRooms.FAC_BATHROOM, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_BATHROOM.filter((val) => val !== value),
    }));
  }, []);
  const handleFacParking = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_PARKING: checked
        ? [...selectedRooms.FAC_PARKING, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_PARKING.filter((val) => val !== value),
    }));
  }, []);
  const handleFacBed = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_BED: checked
        ? [...selectedRooms.FAC_BED, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_BED.filter((val) => val !== value),
    }));
  }, []);
  const handleFacLiving = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_LIVING: checked
        ? [...selectedRooms.FAC_LIVING, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_LIVING.filter((val) => val !== value),
    }));
  }, []);
  const handleFacMedia = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_MEDIA: checked
        ? [...selectedRooms.FAC_MEDIA, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_MEDIA.filter((val) => val !== value),
    }));
  }, []);
  const handleFacInternet = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_INTERNET: checked
        ? [...selectedRooms.FAC_INTERNET, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_INTERNET.filter((val) => val !== value),
    }));
  }, []);
  const handleFacService = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_SERVICE: checked
        ? [...selectedRooms.FAC_SERVICE, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_SERVICE.filter((val) => val !== value),
    }));
  }, []);
  const handleFacGeneral = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_GENERAL: checked
        ? [...selectedRooms.FAC_GENERAL, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_GENERAL.filter((val) => val !== value),
    }));
  }, []);
  const handleFacLanguage = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_LANGUAGE: checked
        ? [...selectedRooms.FAC_LANGUAGE, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_LANGUAGE.filter((val) => val !== value),
    }));
  }, []);
  const handleFacKitchen = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_KITCHEN: checked
        ? [...selectedRooms.FAC_KITCHEN, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_KITCHEN.filter((val) => val !== value),
    }));
  }, []);
  const handleFacReception = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_RECEPTION: checked
        ? [...selectedRooms.FAC_RECEPTION, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_RECEPTION.filter((val) => val !== value),
    }));
  }, []);
  const handleFacExtras = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      P_EXTRA: checked
        ? [...selectedRooms.P_EXTRA, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.P_EXTRA.filter((val) => val !== value),
    }));
  }, []);
  const insertFacilities = async () => {
    if (tempidUpdate) {
      const facilities = {
        P_ID: tempid,
        FAC_ROOM: selectedRooms.FAC_ROOM.toString(),
        FAC_RESTARUANT: selectedRooms.FAC_RESTARUANT.toString(),
        FAC_SECURITY: selectedRooms.FAC_SECURITY.toString(),
        FAC_BATHROOM: selectedRooms.FAC_BATHROOM.toString(),
        FAC_PARKING: selectedRooms.FAC_PARKING.toString(),
        FAC_BED: selectedRooms.FAC_BED.toString(),
        FAC_LIVING: selectedRooms.FAC_LIVING.toString(),
        FAC_MEDIA: selectedRooms.FAC_MEDIA.toString(),
        FAC_INTERNET: selectedRooms.FAC_INTERNET.toString(),
        FAC_SERVICE: selectedRooms.FAC_SERVICE.toString(),
        FAC_GENERAL: selectedRooms.FAC_GENERAL.toString(),
        FAC_LANGUAGE: selectedRooms.FAC_LANGUAGE.toString(),
        FAC_KITCHEN: selectedRooms.FAC_KITCHEN.toString(),
        FAC_RECEPTION: selectedRooms.FAC_RECEPTION.toString(),
      };
      const extra = {
        P_ID: tempid,
        P_EXTRA: selectedRooms.P_EXTRA.toString(),
      };
      console.log(facilities);
      console.log(extra);
      //숙소시설insert
      await hostfacInsertDB(facilities);
      await hostextraInsertDB(extra);
      //navigate("/host/end");
      setTimeout(() => {
        navigate('/host/myhostpage');
      }, 1500);
    }
  };
  insertFacilities();
  useEffect(() => {
    console.log('선택된 체크박스:' + selectedRooms.FAC_ROOM);
    console.log('선택된 체크박스:' + selectedRooms.FAC_RESTARUANT);
    console.log('선택된 체크박스:' + selectedRooms.P_EXTRA);
  }, [selectedRooms]);
  const hostInsert = async () => {
    //적어도 하나를 선택해야 한다.
    const checked = Object.values(
      selectedRooms['FAC_ROOM'] &&
        selectedRooms['FAC_RESTARUANT'] &&
        selectedRooms['FAC_SECURITY'] &&
        selectedRooms['FAC_BATHROOM'] &&
        selectedRooms['FAC_PARKING'] &&
        selectedRooms['FAC_LIVING'] &&
        selectedRooms['FAC_MEDIA'] &&
        selectedRooms['FAC_INTERNET'] &&
        selectedRooms['FAC_SERVICE'] &&
        selectedRooms['FAC_GENERAL'] &&
        selectedRooms['FAC_LANGUAGE'] &&
        selectedRooms['FAC_BED'] &&
        selectedRooms['FAC_KITCHEN'] &&
        selectedRooms['FAC_RECEPTION'] &&
        selectedRooms['P_EXTRA']
    ).some((value) => value !== '');
    if (!checked) {
      Toast.fire({
        icon: 'warning', // Alert 타입
        title: '숙소정보 등록에 실패하였습니다. <br/>체크박스를 선택해주세요', // Alert 제목
        timer: 1000,
        timerProgressBar: false,
      });
      return;
    } else {
      Toast.fire({
        icon: 'success', // Alert 타입
        title: '숙소정보 등록에 성공하였습니다. <br/>마이호스트페이지로 이동합니다.', // Alert 제목
        timer: 1000,
        timerProgressBar: false,
      });
    }
    setTempid(p_id);
    setTempUpdate(true);
  };
  return (
    <div>
      <R_CardGroup_hotel>
        <Card style={{ width: '55rem', margin: ' 0' }}>
          <Card.Body>
            <Card.Title style={{ marginTop: '1em', marginLeft: '2.5em' }}>
              <i class="fa-solid fa-check"></i>이 호텔에는 어떤 시설/용품이 구비되어 있나요?
            </Card.Title>
            <hr style={{ border: '1px solid black' }} />

            <HostTable>
              <HostTableItem1>
                <TableTitle>
                  <FontAwesomeIcon icon="fa-solid fa-caret-right" style={{ marginRight: '0.7em' }} />
                  객실 내 시설
                </TableTitle>
                <Form>
                  {['침대 옆 콘센트', '방음 시설', '의류 건조대', '옷걸이', '스타일러'].map((type) => (
                    <div key={`FAC_ROOM-${type}`} className="mb-1">
                      <Form.Check
                        type="checkbox"
                        id={`${type}`}
                        label={type}
                        onClick={handleFacRoom}
                        style={{ marginLeft: '1.5em', padding: '0.1em' }}
                      />
                    </div>
                  ))}
                </Form>
              </HostTableItem1>
              <HostTableItem2>
                <TableTitle>
                  <FontAwesomeIcon icon="fa-solid fa-caret-right" style={{ marginRight: '0.7em' }} />
                  식음료
                </TableTitle>
                <Form>
                  {[
                    '과일(유료)',
                    '와인/샴페인(유료)',
                    '키즈밀(유료)',
                    '스낵 바',
                    '객실 내 조식 서비스',
                    '레스토랑',
                    '커피숍(숙소 부지 내)',
                    '전통 찻집',
                    'BBQ',
                  ].map((type) => (
                    <div key={`FAC_RESTARUANT-${type}`} className="mb-2">
                      <Form.Check
                        type="checkbox"
                        id={`${type}`}
                        label={type}
                        onClick={handleFacRestaruant}
                        style={{ marginLeft: '1.5em', padding: '0.1em' }}
                      />
                    </div>
                  ))}
                </Form>
              </HostTableItem2>
              <HostTableItem3>
                <TableTitle>
                  <FontAwesomeIcon icon="fa-solid fa-caret-right" style={{ marginRight: '0.7em' }} />
                  보안
                </TableTitle>

                <Form>
                  {['소화기', 'CCTV', '화염 경보', '보안 알람', '카드키 출입', '안전 금고', '숙소 외부 CCTV'].map((type) => (
                    <div key={`FAC_SECURITY-${type}`} className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id={`${type}`}
                        label={type}
                        onClick={handleFacSecurity}
                        style={{ marginLeft: '1.5em', padding: '0.1em' }}
                      />
                    </div>
                  ))}
                </Form>
              </HostTableItem3>
            </HostTable>
            <hr style={{ border: '1px solid gray' }} />

            <HostTable>
              <HostTableItem1>
                <TableTitle>
                  <FontAwesomeIcon icon="fa-solid fa-caret-right" style={{ marginRight: '0.7em' }} />
                  화장실
                </TableTitle>
                <Form>
                  {[
                    '화장지',
                    '타월',
                    '유료 수건/침대 시트',
                    '욕조 또는 샤워기',
                    '전용 욕실',
                    '슬리퍼',
                    '무료 세면도구',
                    '어매니티',
                    '비데',
                  ].map((type) => (
                    <div key={`FAC_BATHROOM-${type}`} className="mb-4">
                      <Form.Check type="checkbox" id={`${type}`} label={type} onClick={handleFacBathroom} />
                    </div>
                  ))}
                </Form>
              </HostTableItem1>
              <HostTableItem2>
                <TableTitle>
                  <FontAwesomeIcon icon="fa-solid fa-caret-right" style={{ marginRight: '0.7em' }} />
                  주차여부
                </TableTitle>
                <Form>
                  {[
                    '주차가 불가능합니다.',
                    '호텔 인근(사전 예약 불필요) 공영 주차장이 무료로 이용 가능합니다.',
                    '장애인 주차',
                    '호텔 인근 (사전 예약 불필요) 공영 주차장이 시간당 3000원으로 이용 가능합니다.',
                  ].map((type) => (
                    <div key={`FAC_PARKING-${type}`} className="mb-5">
                      <Form.Check type="checkbox" id={`${type}`} label={type} onClick={handleFacParking} />
                    </div>
                  ))}
                </Form>
              </HostTableItem2>
              <HostTableItem3>
                <TableTitle>
                  <FontAwesomeIcon icon="fa-solid fa-caret-right" style={{ marginRight: '0.7em' }} />
                  침실시설
                </TableTitle>
                <Form>
                  {['린넨', '알람 시계', '추가 침구류 제공(유료)', '트윈 침대'].map((type) => (
                    <div key={`FAC_BED-${type}`} className="mb-6">
                      <Form.Check
                        type="checkbox"
                        id={`${type}`}
                        label={type}
                        onClick={handleFacBed}
                        style={{ marginLeft: '1.5em', padding: '0.1em' }}
                      />
                    </div>
                  ))}
                </Form>
              </HostTableItem3>
            </HostTable>
            <hr style={{ border: '1px solid gray' }} />
            <HostTable>
              <HostTableItem1>
                <TableTitle>
                  <FontAwesomeIcon icon="fa-solid fa-caret-right" style={{ marginRight: '0.7em' }} />
                  거실시설
                </TableTitle>
                <Form>
                  {['업무용 책상', '스탠드'].map((type) => (
                    <div key={`FAC_LIVING-${type}`} className="mb-7">
                      <Form.Check
                        type="checkbox"
                        id={`${type}`}
                        label={type}
                        onClick={handleFacLiving}
                        style={{ marginLeft: '1.5em', padding: '0.1em' }}
                      />
                    </div>
                  ))}
                </Form>
              </HostTableItem1>
              <HostTableItem2>
                <TableTitle>
                  <FontAwesomeIcon icon="fa-solid fa-caret-right" style={{ marginRight: '0.7em' }} />
                  미디어
                </TableTitle>
                <Form>
                  {['평면TV', 'TV', '전화기', '넷플릭스', '노트북 대여', '위성채널', '케이블 채널'].map((type) => (
                    <div key={`FAC_MEDIA-${type}`} className="mb-8">
                      <Form.Check
                        type="checkbox"
                        id={`${type}`}
                        label={type}
                        onClick={handleFacMedia}
                        style={{ marginLeft: '1.5em', padding: '0.1em' }}
                      />
                    </div>
                  ))}
                </Form>
              </HostTableItem2>
              <HostTableItem3>
                <TableTitle>
                  <FontAwesomeIcon icon="fa-solid fa-caret-right" style={{ marginRight: '0.7em' }} />
                  인터넷
                </TableTitle>
                <Form>
                  {[
                    '유선 인터넷 호텔 객실 내에서 무료입니다.',
                    'Wi-Fi 호텔 객실 내에서 무료입니다.',
                    'Wi-Fi 호텔 전 구역에서 무료입니다.',
                  ].map((type) => (
                    <div key={`FAC_INTERNET-${type}`} className="mb-9">
                      <Form.Check
                        type="checkbox"
                        id={`${type}`}
                        label={type}
                        onClick={handleFacInternet}
                        style={{ marginLeft: '1.5em', padding: '0.1em' }}
                      />
                    </div>
                  ))}
                </Form>
              </HostTableItem3>
            </HostTable>
            <hr style={{ border: '1px solid gray' }} />
            <HostTable>
              <HostTableItem1>
                <TableTitle>
                  <FontAwesomeIcon icon="fa-solid fa-caret-right" style={{ marginRight: '0.7em' }} />
                  서비스
                </TableTitle>
                <Form>
                  {[
                    '하우스키핑 (매일)',
                    '팩스/복사',
                    '유료 렌터카 서비스',
                    '다림질 서비스',
                    '드라이클리닝',
                    '유료세탁',
                    '프런트 데스크',
                    '모닝콜 서비스',
                    ' 24시간 프런트 데스크',
                    '회의/연회 시설',
                  ].map((type) => (
                    <div key={`FAC_SERVICE-${type}`} className="mb-10">
                      <Form.Check
                        type="checkbox"
                        id={`${type}`}
                        label={type}
                        onClick={handleFacService}
                        style={{ marginLeft: '1.5em', padding: '0.1em' }}
                      />
                    </div>
                  ))}
                </Form>
              </HostTableItem1>
              <HostTableItem2>
                <TableTitle>
                  <FontAwesomeIcon icon="fa-solid fa-caret-right" style={{ marginRight: '0.7em' }} />
                  일반
                </TableTitle>
                <Form>
                  {[
                    '에어컨',
                    '전 구역 금연',
                    '난방 시설',
                    '엘리베이터',
                    '장애인 편의시설',
                    '가족 객실',
                    '미니마트(숙소 부지 내)',
                    '모기장',
                  ].map((type) => (
                    <div key={`FAC_GENERAL-${type}`} className="mb-11">
                      <Form.Check type="checkbox" id={`${type}`} label={type} onClick={handleFacGeneral} />
                    </div>
                  ))}
                </Form>
              </HostTableItem2>
              <HostTableItem3>
                <TableTitle>
                  <FontAwesomeIcon icon="fa-solid fa-caret-right" style={{ marginRight: '0.7em' }} />
                  언어
                </TableTitle>
                <Form>
                  {['한국어', '영어', '일본어', '중국어'].map((type) => (
                    <div key={`FAC_LANGUAGE-${type}`} className="mb-12">
                      <Form.Check
                        type="checkbox"
                        id={`${type}`}
                        label={type}
                        onClick={handleFacLanguage}
                        style={{ marginLeft: '1.5em', padding: '0.1em' }}
                      />
                    </div>
                  ))}
                </Form>
              </HostTableItem3>
            </HostTable>
            <hr style={{ border: '1px solid gray' }} />
            <HostTable>
              <HostTableItem1>
                <TableTitle>
                  <FontAwesomeIcon icon="fa-solid fa-caret-right" style={{ marginRight: '0.7em' }} />
                  부엌
                </TableTitle>
                <Form>
                  {['커피 포트', '냉장고', '식탁', '주방식기', '건조기', '전자레인지', '청소도구', '토스터'].map((type) => (
                    <div key={`FAC_KITCHEN-${type}`} className="mb-13">
                      <Form.Check
                        type="checkbox"
                        id={`${type}`}
                        label={type}
                        onClick={handleFacKitchen}
                        style={{ marginLeft: '1.5em', padding: '0.1em' }}
                      />
                    </div>
                  ))}
                </Form>
              </HostTableItem1>
              <HostTableItem2>
                <TableTitle>
                  <FontAwesomeIcon icon="fa-solid fa-caret-right" style={{ marginRight: '0.7em' }} />
                  리셉션
                </TableTitle>
                <Form>
                  {[
                    '사물함',
                    '컨시어지 서비스',
                    '수하물 보관소',
                    '24시간 프런트 데스크',
                    '익스프레스 체크인/체크아웃',
                    '청구서(인보이스) 제공 숙소',
                  ].map((type) => (
                    <div key={`FAC_RECEPTION-${type}`} className="mb-14">
                      <Form.Check
                        type="checkbox"
                        id={`${type}`}
                        label={type}
                        onClick={handleFacReception}
                        style={{ marginLeft: '1.5em', padding: '0.1em' }}
                      />
                    </div>
                  ))}
                </Form>
              </HostTableItem2>
            </HostTable>
          </Card.Body>
          <Card.Body>
            <Card.Title style={{ marginTop: '1em', marginLeft: '2.5em' }}>
              {' '}
              <i class="fa-solid fa-check"></i>이 호텔에는 어떤 부대시설이 있나요?
            </Card.Title>
            <hr style={{ border: '1px solid black' }} />
            <Form style={{ marginTop: '1em', marginLeft: '3.7em' }}>
              {[
                '바베큐장',
                '수영장',
                '족구장',
                '노래방',
                '세미나실',
                '배드민턴',
                '자전거대여',
                '야외탁자',
                '파라솔',
                '정원',
                '연못',
                '등산로',
                '야외수영장',
              ].map((type) => (
                <div key={`P_EXTRAS-${type}`} className="mb-15">
                  <Form.Check
                    type="checkbox"
                    id={`${type}`}
                    label={type}
                    onClick={handleFacExtras}
                    style={{ marginLeft: '1.5em', padding: '0.1em' }}
                  />
                </div>
              ))}
            </Form>
          </Card.Body>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-warning" type="button" onClick={hostInsert} style={{ marginBottom: '8%' }}>
              등록하기
            </button>
          </div>
        </Card>
      </R_CardGroup_hotel>
    </div>
  );
};

export default HostFac;
