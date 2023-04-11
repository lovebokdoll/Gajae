import React, { useState } from "react";
import { BButton, Img, Preview } from "../../style/FormStyle";

const ImageUpload = ({ handleImageUploade, imageUrl }) => {
  const [attachment, setAttachment] = useState();

  const onFileChange = async (event) => {
    const newImage = event.target.files[0];
    const imgURL = URL.createObjectURL(newImage);
    setAttachment(imgURL);
    await handleImageUploade(newImage);
  };

  const onClearAttachment = () => {
    setAttachment(null);
  };

  return (
    <>
      <div class="input-group mb-3">
        <input
          type="file"
          class="form-control"
          id="inputGroupFile02"
          onChange={onFileChange}
        />
        <label class="input-group-text" for="inputGroupFile02">
          Upload
        </label>
      </div>

      <Preview>
        <div id="file">
          <Img
            src={
              attachment ||
              imageUrl ||
              "https://img.icons8.com/pastel-glyph/2x/image-file.png"
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
