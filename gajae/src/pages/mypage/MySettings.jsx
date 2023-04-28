/* global daum*/
import { faComment, faCreditCard, faHeart, faHistory, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React, useEffect, useState } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import UserDeactivateModal from '../../components/mypage/UserDeactivateModal';
import { setToastMessage } from '../../redux/toastStatus/action';
import { nicknameCheck, userUpdateDB } from '../../service/user/user';
import {
  MSCLeftDIV,
  MSCRightDIV,
  MSContainer,
  MSPTComment,
  MSPTTitle,
  MyPageLinkMove,
  MySettingsFlexByRow,
  MySettingsPageTitle,
  MySettingsRow,
  MySettingsRowLayout,
  ProfileImage,
  ProfileUploadButton,
  SignOutButton
} from './styled-mypage';
 
import ProfileModal from "../../components/mypage/ProfileModal";

const MySettings = () => {

  const handleUserDeactivate = () => {
    setShowModal(true);
  };

  const handleConfirmDeactivate = () => {
    setShowModal(false);
  };

  const [isNickNameCheck, setIsNickNameCheck] = useState(false);
  const checkNickname = async () => {
    if (user.USER_NICKNAME === "") {
      dispatch(setToastMessage("닉네임을 입력해주세요."));
      return;
    } else {
      const response = await nicknameCheck(user);
      if (response.data === 0) {
        dispatch(setToastMessage("사용 가능한 닉네임 입니다."));
        setIsNickNameCheck(true);
      } else if (response.data === 1) {
        dispatch(setToastMessage("이미 사용중인 닉네임 입니다."));
      }
    }
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkboxLable = ["남자", "여자"];

  const [localName, setLocalName] = useState('');
  const [localNickName, setLocalNickName] = useState('');
  const [localBirth, setLocalBitrh] = useState('');
  const [localEmail, setLocalEmail] = useState('');
  const [localMobile, setLocalMobile] = useState('');
  const [localID, setLocalId] = useState('');
  const [createDate, setCreateDate] = useState('');
  const [localPhoto, setLocalPhoto] = useState();

  useEffect(() => {
    const tempID = window.localStorage.getItem("userId");
    if (tempID === null) {
      navigate("/");
    }
    setUser({ USER_ID: tempID });
    setLocalId(window.localStorage.getItem('userId'));
    setLocalName(window.localStorage.getItem('userName'));
    setLocalNickName(window.localStorage.getItem('userNickname'));
    setLocalEmail(window.localStorage.getItem('userEmail'));
    setLocalBitrh(window.localStorage.getItem('userBirth'));
    setLocalMobile(window.localStorage.getItem('userMobile'));
    setCreateDate(window.localStorage.getItem('userCreateDate'));
    setLocalPhoto(window.localStorage.getItem("userPhoto"));
  }, []);
  console.log(localNickName);

  const [user, setUser] = useState({
    USER_ID: "",
    USER_NAME: "",
    USER_NICKNAME: "",
    USER_EMAIL: "",
    USER_MOBILE: "",
    USER_BIRTH: "",
    USER_ADDRESS: "",
    USER_GENDER: "",
  });

  const [isNameChange, setIsNameChange] = useState(false);
  const [isNickNameChange, setIsNickNameChange] = useState(false);
  const [isEmailChange, setIsEmailChange] = useState(false);
  const [isMobileChange, setIsMobileChange] = useState(false);
  const [isGenderChange, setIsGenderChange] = useState(false);
  const [isAddressChange, setIsAddressChange] = useState(false);
  const [isBirthChange, setIsBirthChange] = useState(false);

  const setIsChange = (stateName, value) => {
    console.log("stateName ==>", stateName, "false ==>", value);
    if (value) {
      setIsNameChange(false);
      setIsNickNameChange(false);
      setIsEmailChange(false);
      setIsMobileChange(false);
      setIsGenderChange(false);
      setIsAddressChange(false);
      setIsBirthChange(false);
    }
    switch (stateName) {
      case "isNameChange":
        setIsNameChange(value);
        break;
      case "isNickNameChange":
        setIsNickNameChange(value);
        break;
      case "isEmailChange":
        setIsEmailChange(value);
        break;
      case "isMobileChange":
        setIsMobileChange(value);
        break;
      case "isGenderChange":
        setIsGenderChange(value);
        break;
      case "isAddressChange":
        setIsAddressChange(value);
        break;
      case "isBirthChange":
        setIsBirthChange(value);
        break;
      default:
        break;
    }
  };

  const Checkbox = checkboxLable.map((item, index) => (
    <Form.Check
      inline
      label={item}
      value={item}
      name="group1"
      type="radio"
      checked={user.USER_GENDER === item ? true : false}
      readOnly
      id={`inline-radio-${item}`}
      key={index}
      onClick={(e) => {
        setUser({ ...user, USER_GENDER: e.target.value });
        console.log(user);
      }}
    />
  ));

  const searchAddress = (event) => {
    console.log(user);
    event.preventDefault();
    new daum.Postcode({
      oncomplete: function (data) {
        let searchedAddress = "";
        if (data.userSelectedType === "R") {
          searchedAddress = data.roadAddress; //도로명
        } else {
          searchedAddress = data.jibunAddress; //지번
        }
        console.log(data);
        console.log(searchedAddress);
        document.querySelector("#user_address").value = searchedAddress;

        setUser({ ...user, USER_ADDRESS: searchedAddress });
      },
    }).open();
  };

  const handleName = (event) => {
    setUser({ ...user, USER_NAME: event });
  };
  const handleNickname = (event) => {
    console.log(event);
    setUser({ ...user, USER_NICKNAME: event });
  };
  const handleAddress = (event) => {
    setUser({ ...user, USER_ADDRESS: event });
  };

  const handleMobile = (event) => {
    setUser({ ...user, USER_MOBILE: event });
  };

  const handleEmail = (event) => {
    setUser({ ...user, USER_EMAIL: event });
  };

  const handleBirth = (event) => {
    const b = event;
    let birthday = "";
    if (b !== "") {
      birthday = b.slice(0, 4) + "-" + b.slice(4, 6) + "-" + b.slice(6, 8);
    }
    setUser({ ...user, USER_BIRTH: birthday });
    console.log(user);
  };

  const updateAddress = async () => {
    const response = await userUpdateDB(user);

    console.log(response.data);
    if (response.data != null) {
      dispatch(setToastMessage('회원 정보가 수정되었습니다.'));
      window.location.reload();
    } else {
      dispatch(setToastMessage('죄송합니다. 저희 쪽에 문제가 있는 것 같습니다.'));
    }
  };

  const updateName = async () => {
    const response = await userUpdateDB(user);
    console.log(response.data);

    if (response.data != null) {
      dispatch(setToastMessage('회원 정보가 수정되었습니다.'));
      window.localStorage.setItem('userName', response.data[0].USER_NAME);
      window.location.reload();
    } else {
      dispatch(setToastMessage('죄송합니다. 저희 쪽에 문제가 있는 것 같습니다.'));
    }
  };

  const updateGender = async () => {
    const response = await userUpdateDB(user);

    console.log(response.data);
    if (response.data != null) {
      dispatch(setToastMessage('회원 정보가 수정되었습니다.'));
      window.location.reload();
    } else {
      dispatch(setToastMessage('죄송합니다. 저희 쪽에 문제가 있는 것 같습니다.'));
    }
  };

  const updateBirth = async () => {
    const response = await userUpdateDB(user);

    console.log(response.data);
    if (response.data != null) {
      dispatch(setToastMessage('회원 정보가 수정되었습니다.'));
      window.localStorage.setItem('userBirth', response.data[0].USER_BIRTH);
      window.location.reload();
    } else {
      dispatch(setToastMessage('죄송합니다. 저희 쪽에 문제가 있는 것 같습니다.'));
    }
  };

  const updateMobile = async () => {
    const response = await userUpdateDB(user);

    console.log(response.data);
    if (response.data != null) {
      dispatch(setToastMessage('회원 정보가 수정되었습니다.'));
      window.localStorage.setItem('userMobile', response.data[0].USER_MOBILE);
      window.location.reload();
    } else {
      dispatch(setToastMessage('죄송합니다. 저희 쪽에 문제가 있는 것 같습니다.'));
    }
  };

  const updateNickname = async () => {
    if (isNickNameCheck) {
      const response = await userUpdateDB(user);

      console.log(response.data);
      if (response.data != null) {
        dispatch(setToastMessage('회원 정보가 수정되었습니다.'));
        window.localStorage.setItem('userNickname', response.data[0].USER_NICKNAME);
        window.location.reload();
      } else {
        dispatch(setToastMessage('죄송합니다. 저희 쪽에 문제가 있는 것 같습니다.'));
      }
    } else {
      setIsChange("isNickNameChange", true);
      dispatch(setToastMessage("닉네임 중복체크를 해주세요."));
    }
  };

  const updateEmail = async () => {
    const response = await userUpdateDB(user);

    console.log(response.data);
    if (response.data != null) {
      dispatch(setToastMessage('회원 정보가 수정되었습니다.'));
      window.localStorage.setItem('userEmail', response.data[0].USER_EMAIL);
      window.location.reload();
    } else {
      dispatch(setToastMessage('죄송합니다. 저희 쪽에 문제가 있는 것 같습니다.'));
    }
  };

  const renderInput = (id, name, placeholder, onChange) => {
    return (
      <input
        type="text"
        id={id}
        name={name}
        style={{ width: "370px" }}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  };

  const renderInputLength = (id, name, placeholder, maxLength, onChange) => {
    return (
      <input
        type="text"
        id={id}
        name={name}
        maxLength={maxLength}
        style={{ width: "370px" }}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  };
  /* 프로필 업로드 모달창 */
  const [showModal, setShowModal] = useState(false);
  const [profileImage, setProfileImage] = useState("/images/default.png");
  console.log(profileImage);
  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const onProfileUploaded = (imageUrl) => {
    setProfileImage(imageUrl);
    localStorage.setItem("userPhoto", imageUrl);
    setLocalPhoto(imageUrl);
  };

  return (
    <>
      <HeaderNav1 />
      <MSContainer>
        <MSCLeftDIV>
          {" "}
          <Nav defaultActiveKey="/home" className="flex-column">
            <MyPageLinkMove to="/mypage/settings">
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              개인 정보
            </MyPageLinkMove>
            <MyPageLinkMove to="/mypage/reservations">
              <span>
                <FontAwesomeIcon icon={faHistory} />
              </span>
              예약내역
            </MyPageLinkMove>
            <MyPageLinkMove to="/mypage/review">
              <span>
                <FontAwesomeIcon icon={faComment} />
              </span>
              이용후기
            </MyPageLinkMove>
            <MyPageLinkMove to="/mypage/payment">
              <span>
                <FontAwesomeIcon icon={faCreditCard} />
              </span>
              결제정보
            </MyPageLinkMove>
            <MyPageLinkMove to="/mypage/wishlist">
              <span>
                <FontAwesomeIcon icon={faHeart} />
              </span>
              위시리스트
            </MyPageLinkMove>
            <SignOutButton>
              <span>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </span>
              로그아웃
            </SignOutButton>
          </Nav>
        </MSCLeftDIV>
        <MSCRightDIV>
          <MySettingsFlexByRow>
            <MySettingsPageTitle>
              <MSPTTitle>개인정보</MSPTTitle>
              <MSPTComment>
                정보를 업데이트하고 각 정보가 어떻게 활용되는지 알아보세요.
              </MSPTComment>
            </MySettingsPageTitle>
            <ProfileUploadButton onClick={openModal}>
              <ProfileImage
                src={localPhoto ? localPhoto : profileImage}
                alt="이미지"
              />
            </ProfileUploadButton>
            <ProfileModal
              show={showModal}
              closeModal={closeModal}
              localID={localID}
              onProfileUploaded={onProfileUploaded}
            ></ProfileModal>
          </MySettingsFlexByRow>
          <MySettingsRow>
            <MySettingsRowLayout>
              {!isNameChange && (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ display: "inline-block", width: "50px" }}>
                    이름
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      textAlign: "left",
                      paddingLeft: "100px",
                      marginRight: "auto",
                    }}
                  >
                    {localName}
                  </span>
                  <Button onClick={() => setIsChange("isNameChange", true)}>
                    수정
                  </Button>
                </div>
              )}
              {isNameChange && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ width: "90px", marginRight: "10px" }}>
                    이름
                  </span>
                  {renderInput(
                    "user_name",
                    "user_name",
                    "이름을 입력해주세요",
                    (event) => handleName(event.target.value)
                  )}
                  <Button
                    style={{ marginLeft: "15px" }}
                    onClick={() => {
                      updateName();
                      setIsChange("isNameChange", false);
                    }}
                  >
                    수정
                  </Button>
                  <Button
                    style={{ marginLeft: "15px" }}
                    onClick={() => {
                      setIsChange("isNameChange", false);
                    }}
                  >
                    취소
                  </Button>
                </div>
              )}
            </MySettingsRowLayout>
          </MySettingsRow>
          <MySettingsRow>
            {" "}
            {!isNickNameChange && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ width: "50px" }}>닉네임</span>
                <span
                  style={{
                    marginLeft: "10px",
                    paddingLeft: "89px",
                    marginRight: "auto",
                  }}
                >
                  다른 사람에게 공개할 닉네임을 입력해주세요
                </span>
                <Button onClick={() => setIsChange("isNickNameChange", true)}>
                  수정
                </Button>
              </div>
            )}
            {isNickNameChange && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ width: '90px', marginRight: '10px' }}>닉네임</span>
                {renderInput('user_nickname', 'user_nickname', localNickName, (event) => handleNickname(event.target.value))}
                <Button
                  style={{ marginLeft: "15px" }}
                  onClick={() => {
                    checkNickname();
                  }}
                >
                  중복확인
                </Button>
                <Button
                  style={{ marginLeft: "15px" }}
                  onClick={() => {
                    updateNickname();
                    setIsChange("isNickNameChange", false);
                  }}
                >
                  수정
                </Button>
                <Button
                  style={{ marginLeft: "15px" }}
                  onClick={() => {
                    setIsChange("isNickNameChange", false);
                  }}
                >
                  취소
                </Button>
              </div>
            )}
          </MySettingsRow>
          <MySettingsRow>
            {" "}
            {!isEmailChange && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "10px" }}>이메일</span>
                <span style={{ paddingLeft: "92px", marginRight: "auto" }}>
                  예약 확정 이메일이 이곳으로 전송됩니다.
                </span>
                <div style={{ marginLeft: "auto" }}>
                  <Button onClick={() => setIsChange("isEmailChange", true)}>
                    수정
                  </Button>
                </div>
              </div>
            )}
            {isEmailChange && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ width: "90px", marginRight: "10px" }}>
                  이메일
                </span>
                {renderInput("user_email", "user_email", localEmail, (event) =>
                  handleEmail(event.target.value)
                )}
                <Button
                  style={{ marginLeft: "15px" }}
                  onClick={() => {
                    updateEmail();
                    setIsChange("isEmailChange", false);
                  }}
                >
                  수정
                </Button>
                <Button
                  style={{ marginLeft: "15px" }}
                  onClick={() => {
                    setIsChange("isEmailChange", false);
                  }}
                >
                  취소
                </Button>
              </div>
            )}
          </MySettingsRow>
          <MySettingsRow>
            {" "}
            {!isMobileChange && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>전화번호</span>
                <div style={{ marginLeft: "auto" }}>
                  <Button onClick={() => setIsChange("isMobileChange", true)}>
                    수정
                  </Button>
                </div>
              </div>
            )}
            {isMobileChange && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ width: '90px', marginRight: '10px' }}>전화번호</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {renderInput('user_mobile', 'user_mobile', localMobile, (event) => handleMobile(event.target.value))}
                  <Button
                    style={{ marginLeft: "15px" }}
                    onClick={() => {
                      updateMobile();
                      setIsChange("isMobileChange", false);
                    }}
                  >
                    수정
                  </Button>
                  <Button
                    style={{ marginLeft: "15px" }}
                    onClick={() => {
                      setIsChange("isMobileChange", false);
                    }}
                  >
                    취소
                  </Button>
                </div>
              </div>
            )}
          </MySettingsRow>
          <MySettingsRow>
            {" "}
            {!isBirthChange && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>생년월일</span>
                <Button
                  style={{ marginLeft: "auto" }}
                  onClick={() => setIsChange("isBirthChange", true)}
                >
                  수정
                </Button>
              </div>
            )}
            {isBirthChange && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ width: "90px", marginRight: "10px" }}>
                  생년월일
                </span>
                {renderInputLength(
                  "user_birth",
                  "user_birth",
                  localBirth,
                  8,
                  (event) => handleBirth(event.target.value)
                )}
                <Button
                  style={{ marginLeft: "15px" }}
                  onClick={() => {
                    updateBirth();
                    setIsChange("isBirthChange", false);
                  }}
                >
                  수정
                </Button>
                <Button
                  style={{ marginLeft: "15px" }}
                  onClick={() => {
                    setIsChange("isBirthChange", false);
                  }}
                >
                  취소
                </Button>
              </div>
            )}
          </MySettingsRow>
          <MySettingsRow>
            {" "}
            {!isGenderChange && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>성별</span>
                <Button
                  style={{ marginLeft: "auto" }}
                  onClick={() => setIsChange("isGenderChange", true)}
                >
                  수정
                </Button>
              </div>
            )}
            {isGenderChange && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <label style={{ margin: 0, marginRight: "70px" }}>성별</label>
                <div
                  style={{ marginTop: 10 }}
                  key={`inline-radio`}
                  className="mb-3"
                >
                  {Checkbox}
                </div>
                <Button
                  style={{ marginLeft: "15px" }}
                  onClick={() => {
                    updateGender();
                    setIsChange("isGenderChange", false);
                  }}
                >
                  수정
                </Button>
                <Button
                  style={{ marginLeft: "15px" }}
                  onClick={() => {
                    setIsChange("isGenderChange", false);
                  }}
                >
                  취소
                </Button>
              </div>
            )}
          </MySettingsRow>
          <MySettingsRow>
            {" "}
            {!isAddressChange && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>주소</span>
                <Button
                  style={{ marginLeft: "auto" }}
                  onClick={() => setIsChange("isAddressChange", true)}
                >
                  수정
                </Button>
              </div>
            )}
            {isAddressChange && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "20px",
                }}
              >
                <span style={{ width: "90px", marginRight: "10px" }}>주소</span>
                <div style={{ marginRight: "10px" }}>
                  {renderInput(
                    "user_address",
                    "user_address",
                    "주소를 입력해주세요",
                    (event) => handleAddress(event.target.value)
                  )}
                </div>
                <div style={{ marginRight: "15px" }}>
                  <Button onClick={searchAddress}>검색</Button>
                </div>
                <div style={{ marginRight: "15px" }}>
                  <Button
                    onClick={() => {
                      updateAddress();
                      setIsChange("isAddressChange", false);
                    }}
                  >
                    수정
                  </Button>
                </div>
                <Button onClick={() => setIsChange("isAddressChange", false)}>
                  취소
                </Button>
              </div>
            )}{" "}
          </MySettingsRow>
          <MySettingsRow>
            <div
              style={{ display: "flex", alignItems: "center", height: "20px" }}
            >
              <span>회원탈퇴</span>
              <Button style={{ marginLeft: 'auto' }} onClick={handleUserDeactivate}>
                회원탈퇴
              </Button>
              {showModal && (
                <UserDeactivateModal
                  title="회원탈퇴"
                  message="정말로 탈퇴하시겠습니까?"
                  confirmText="회원탈퇴"
                  onCancel={() => setShowModal(false)}
                  onConfirm={handleConfirmDeactivate}
                  localID={localID}
                  createDate={createDate}
                />
              )}
            </div>
          </MySettingsRow>
        </MSCRightDIV>
      </MSContainer>
      <Footer />
    </>
  );
};

export default MySettings;
