import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Popup = ({ imageUrl, onClose }) => {
  const [showPopup, setShowPopup] = useState(true);
  const [hideForDay, setHideForDay] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const popupRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const isClosed = localStorage.getItem('popupClosed');
    if (isClosed === 'true') {
      setShowPopup(false);
    }
  }, []);

  const handleMouseDown = (e) => {
    const startX = e.pageX - popupRef.current.offsetLeft;
    const startY = e.pageY - popupRef.current.offsetTop;

    const handleMouseMove = (e) => {
      const newPosX = e.pageX - startX;
      const newPosY = e.pageY - startY;
      setPosition({ x: newPosX, y: newPosY });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };



  const handleClose = () => {
    setShowPopup(false);
    if (hideForDay) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      localStorage.setItem('popupClosed', 'true');
      localStorage.setItem('hideUntil', tomorrow.toISOString());
    }
    onClose();
  };

  const handleCheckboxChange = (e) => {
    setHideForDay(e.target.checked);
  };

  if (localStorage.getItem('hideUntil')) {
    const hideUntil = new Date(localStorage.getItem('hideUntil'));
    if (hideUntil > new Date()) {
      return null;
    }
  }

  return (
    <>
      {showPopup && (
        <div
        ref={popupRef}
          style={{
            position: 'fixed',
            top: position.y,
            left: position.x,
            transform: 'translate(-50%, -50%)',
            zIndex: '999',
            width: '700px',
            height: '700px',
            backgroundColor: '#ffffff',
            border: '2px solid black',
            borderRadius: '20px',
          }}
          onMouseDown={handleMouseDown}
        >
          <img
            src={"/images/eventPopup.png"}
            alt="Popup Image"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
            }}
          >
            <label style={{ marginRight: '10px' }}>
              <input type="checkbox" checked={hideForDay} onChange={handleCheckboxChange} />
              하루동안 보지 않기
            </label>
            <button
              type="button"
              onClick={handleClose}
              style={{
                cursor: 'pointer',
                backgroundColor: '#ffffff',
                border: 'none',
                outline: 'none',
                fontSize: '1.5rem',
              }}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Popup.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;
