import React, { useState } from "react";
import { Custom_btn, Img, Preview } from "../../style/FormStyle";
import { storage } from "../../service/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Accordion } from "react-bootstrap";

const ImageUpload = ({ getImage }) => {
  const [attachment, setAttachment] = useState(null);

  const imageChange = (event) => {
    const image = event.target.files;
    const theImage = image;
    console.log(image);
    console.log(theImage);
    const reader = new FileReader();

    reader.onloadend = (finishedEvent) => {
      const result = finishedEvent.currentTarget.result;
      setAttachment(result);
    };
    if (image) {
      reader.readAsDataURL(image[0]);
      handleImageUpload(image);
    } else {
      setAttachment(null);
    }
  };

  /* Firebase Storage 이미지 업로드 함수 */
  const handleImageUpload = async (image, callback) => {
    try {
      const imageRef = ref(storage, `images/${image[0].name}`);
      console.log(image[0].name);
      await uploadBytes(imageRef, image);
      const downloadURL = await getDownloadURL(imageRef);
      console.log("image uploaded successfully, Download URL:", downloadURL);
      getImage(downloadURL);
    } catch (error) {
      console.log("error uploading image", error);
    }
  };
  /* 이미지 삭제  */
  const onClearAttachment = () => {
    setAttachment(null);
  };

  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Uploaded Image</Accordion.Header>
          <Accordion.Body>
            <div className="input-group mb-3">
              <input
                type="file"
                accept="image/*"
                className="form-control"
                id="inputGroupFile02"
                onChange={imageChange}
              />
              <label className="input-group-text" htmlFor="inputGroupFile02">
                Upload
              </label>
            </div>
            <Preview>
              <div id="file">
                <img
                  src={
                    attachment
                      ? attachment
                      : "https://img.icons8.com/pastel-glyph/2x/image-file.png"
                  }
                  alt="파일 아이콘"
                  style={{
                    width: "300px",
                    height: "300px",
                    display: "flex",
                    margin: "5px",
                    boxShadow: "2px 2px 5px grey",
                  }}
                />
              </div>
            </Preview>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Custom_btn type="button" onClick={onClearAttachment}>
                Clear
              </Custom_btn>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
export default ImageUpload;
