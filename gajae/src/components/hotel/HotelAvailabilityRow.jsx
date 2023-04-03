import { useState } from "react";

const HotelAvailabilityRow = ({ item }) => {
  console.log(item);
  // const [roomType, setRoomType] = useState();
  const [roomPrice, setRppmPrice] = useState();

  return (
    <>
      <tr>
        <td>{item.item}</td>
      </tr>
      {/* <div>{item.hotel}</div> */}
    </>
  );
};

export default HotelAvailabilityRow;
