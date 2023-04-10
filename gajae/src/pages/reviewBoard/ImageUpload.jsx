import React, { useState } from "react";
import { BButton, Img, Preview } from "../../style/FormStyle";
import { imageInsertDB } from "../../service/reviewboardLogic";
import { storage } from "../../service/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const ImageUpload = () => {
  const [attachment, setAttachment] = useState(null);
  const [image, setImage] = useState([]);

  /* Firebase Storage 이미지 업로드 함수 */
  const imageChange = (event) => {
    const image = event.target.files;
    const theImage = image[0];

    const reader = new FileReader();

    reader.onloadend = (finishedEvent) => {
      const result = finishedEvent.currentTarget.result;
      setAttachment(result);
    };
    reader.readAsDataURL(theImage);

    handleImageUpload(theImage);
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();
    const imageRef = ref(storage, `images/${setAttachment}`);
    const uploadTask = uploadBytes(imageRef, setAttachment);

    uploadTask.then(snpa);
    const response = await imageInsertDB(file);
    console.log(response);
  };

  /* 이미지 삭제  */
  const onClearAttachment = () => {
    setAttachment(null);
  };

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="file"
          accept="image/*"
          class="form-control"
          id="inputGroupFile02"
          onChange={imageChange}
        />
        <label class="input-group-text" htmlFor="inputGroupFile02">
          Upload
        </label>
      </div>
      <Preview>
        <div id="file">
          <Img
            src={
              attachment
                ? attachment
                : "https://img.icons8.com/pastel-glyph/2x/image-file.png"
            }
            alt="파일 아이콘"
          />
        </div>
      </Preview>
      <BButton onClick={onClearAttachment}>Clear</BButton>
    </>
  );
};
export default ImageUpload;
