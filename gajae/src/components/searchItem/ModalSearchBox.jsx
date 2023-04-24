import React from "react";
import { useState } from "react";
import { searchListDB } from "../../service/database";

const ModalSearchBox = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      const response = await searchListDB(search);
      setSearch(response.data);
    }
  };


  return (
    <>
      <input
        id="pac-input"
        className="controls"
        type="text"
        placeholder="Search Box"
        value={search}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        onKeyPress={handleKeyPress}
      />
    </>
  );
};

export default ModalSearchBox;
