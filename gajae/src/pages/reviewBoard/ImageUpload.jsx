import React, { useEffect, useState } from "react";
import firebaseApp from "../../service/firebase.js";
import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";

const ImageUpload = () => {
  const [imageURL, setImageURL] = useState < string > "";

  return (
    <>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={upload}>업로드</button>
      {imageList.map((el) => {
        return <img key={el} src={el} />;
      })}
    </>
  );
};
export default ImageUpload;
