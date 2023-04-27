import React, { useState, useEffect } from 'react';

const NextTripCard = ({ userName }) => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const letters = ['호텔을', '리조트를', '빌라를', '홀리데이 홈을', '아파트를'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLetterIndex((currentLetterIndex) => (currentLetterIndex + 1) % letters.length);
    }, 2500);
    return () => clearTimeout(timer);
  }, [currentLetterIndex, letters.length]);

  const rotationLetter = letters[currentLetterIndex];

  return (
    <>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <div
          className="nextTrip1098"
          style={{
            width: '1098px',
            height: '285.47px',
            border: '1px solid lightgrey',
            padding: '16px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            className="blueCircleDiv"
            style={{
              width: '564.81px',
              height: '453.47px',
              position: 'absolute',
              top: '49.5%',
              left: '50%',
              transform: 'translate(-80%, -50%)',
              zIndex: -1,
            }}
          >
            <div
              className="blueCircle"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: '#0077CC',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div className="nextTripLetters" style={{ width: '320.75px', height: '96px', marginBottom: '80px' }}>
                <div style={{ width: '320.75px', height: '64px', position: 'relative' }}>
                  <span style={{ width: '300.97px', height: '32px', color: 'white', fontSize: '1.6em' }}>
                    {' '}
                    {userName && `${userName}님, `} 다음 여행을 위한
                  </span>
                  <br />
                  <li
                    className="rotationLetters"
                    style={{
                      listStyle: 'none',
                      color: 'white',
                      borderBottom: '2px solid yellow',
                      fontSize: '1.6em',
                      display: 'inline',
                    }}
                  >
                    {rotationLetter}
                  </li>
                  <br />
                  <span style={{ width: '120px', height: '32px', color: 'white', fontSize: '1.6em' }}>찾아보세요</span>
                  <div style={{ marginTop: '20px' }}>
                    <span
                      style={{
                        width: '320.75px',
                        height: '36px',
                        margin: '16px 64px 0px 0px',
                        color: '#0077cc', // set to a lighter shade of blue, if desired
                        background: 'white',
                        fontSize: '1.6em',
                        border: '1px solid white',
                      }}
                    >
                      홈 찾아보기
                    </span>
                  </div>{' '}
                </div>
              </div>
            </div>
          </div>
          <div
            className="bearPhoto"
            style={{
              flex: 1,
              height: '237.47px',
              margin: '0px 32px 0px 0px',
              padding: '0px 0px 0px 32px',
              display: 'flex',
              justifyContent: 'flex-end',
              transform: 'translateY(5px)',
            }}
          >
            <img src="/images/mainpage/bh_aw_cpg_main_image.b4347622.png" alt="nexttrip_곰사진" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NextTripCard;
