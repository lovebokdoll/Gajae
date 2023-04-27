import React, { useEffect, useState } from 'react';
import '../mypage/mypage_css/userDeactivateModal.css';
import { deactivate, pwCheck } from '../../service/user/user';
import { useNavigate } from 'react-router-dom';

const UserDeactivateModal = ({ title, message, confirmText, onCancel, onConfirm, localID, createDate }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirm = async () => {
    const userInfo = {
      USER_ID: userId,
      USER_PW: password,
    };
    const passwordCheck = await pwCheck(userInfo);
    console.log(passwordCheck.data);

    if (passwordCheck.data > 0) {
      const response = await deactivate(userInfo);
      if (response.data > 0) {
        // 모달 닫기
        onCancel();
        navigate('/login');
      }
    }
  };
  useEffect(() => {
    setUserId(localID);
  }, []);
  console.log(userId);

  return (
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={onCancel}></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
            <div>
              <label htmlFor="userId-input">&nbsp;&nbsp;아이디&nbsp;&nbsp;:</label>
              <input id="userId-input" type="text" disabled={true} value={userId} onChange={handleUserIdChange} />
            </div>
            <div>
              <label htmlFor="password-input">비밀번호&nbsp;:</label>
              <input id="password-input" type="password" value={password} onChange={handlePasswordChange} />
            </div>
          </div>
          <div className="modal-footer">
            <span>회원가입 일자:&nbsp;{createDate.substr(0, 10)}</span>
            <button type="button" className="btn btn-primary" onClick={handleConfirm}>
              {confirmText}
            </button>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDeactivateModal;
