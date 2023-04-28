import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "@firebase/storage";
import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import { storage } from "../../service/firebase";
import { profileUploadDB } from "../../service/user/user";

const ProfileModal = (props) => {
  const { showModal, closeModal, localID, onProfileUploaded } = props;

  const [selectedImage, setSelectedImage] = useState(null); //이미지 선택
  const [isUploadComplete, setUploadComplete] = useState(false);

  const handleImageChange = async (event) => {
    event.preventDefault();
    const profile = event.target.files[0];
    // 이전 이미지 삭제
    if (selectedImage !== null) {
      const prevImageRef = ref(storage, `profiles/${profile.name}`);
      const prevImageSnapshot = await getDownloadURL(prevImageRef).catch(
        (error) => {
          console.log(error);
        }
      );
      if (prevImageSnapshot) {
        await deleteObject(prevImageRef);
      }
    }

    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const result = finishedEvent.currentTarget.result;
      setSelectedImage(result);
    };
    if (profile !== null) {
      reader.readAsDataURL(profile);
      handleImageUpload(profile);
    } else {
      setSelectedImage(null);
    }
  };

  const handleImageUpload = async (profile) => {
    try {
      console.log(profile);
      const imageRef = ref(storage, `profiles/${profile.name}`);
      await uploadBytes(imageRef, profile);
      const downloadURL = await getDownloadURL(imageRef);
      console.log("image uploaded successfully, Download URL:", downloadURL);
      console.log(downloadURL);
      setSelectedImage(downloadURL);
      /*호스트이미지 업로드 */
    } catch (error) {
      console.log("error uploading image", error);
    }
  };

  const profileUpload = async () => {
    console.log("profileUpload 호출");
    const profile = {
      USER_ID: localID,
      USER_PHOTO: selectedImage,
    };
    const res = await profileUploadDB(profile);
    console.log(res.data);
    setUploadComplete(true);

    if (props.onProfileUploaded) {
      props.onProfileUploaded(selectedImage);
    }
  };

  return (
    <>
      <>
        <Modal show={props.show} onHide={props.closeModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ProfileContainer>
              <div>
                <img
                  src={selectedImage ? selectedImage : "../images/default.png"}
                  style={{ height: "180px", borderRadius: "50%" }}
                />
              </div>
              <UploadWrapper>
                <div>업로드할 이미지를 선택해주세요</div>
                <input type="file" onChange={handleImageChange}></input>
              </UploadWrapper>
              <Btn onClick={() => profileUpload()}>저장</Btn>
              {isUploadComplete && (
                <div style={{ color: "#55ad7a" }}>업로드 완료!</div>
              )}{" "}
              {/* 업로드 완료 시 메시지를 띄움 */}
            </ProfileContainer>
          </Modal.Body>
        </Modal>
      </>
    </>
  );
};

export default ProfileModal;

const ProfileContainer = styled.div`
  display: flex
  alignItems: center;
  justify-content: space-between;
  margin: 0 30px 0 30px;
  position: relative;
  & img {
    height: auto;
    max-height: 180px;
    width: auto;
    width: 180px;
    border-radius: 50%;
  }
`;

const UploadWrapper = styled.div`
  margin-left: 40px;
`;

const Btn = styled.button`
  margin-left: auto;
  background-color: #007bff;
  position: absolute;
  bottom: 0;
  right: 0;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;
`;
