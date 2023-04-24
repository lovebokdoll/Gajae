public List<Map<String, Object>> hotelUpdate(Map<String, Object> map) {
  // ...
  List<Map<String, Object>> existingRoomTypes = hostDAO.getRoomTypes(map.get("P_ID"));
  for (Map<String, Object> roomType : list) {
      boolean roomTypeExists = false;
      for (Map<String, Object> existingRoomType : existingRoomTypes) {
          if (roomType.get("ROOM_ID").equals(existingRoomType.get("ROOM_ID"))) {
              roomTypeExists = true;
              break;
          }
      }
      if (roomTypeExists) {
          hostDAO.updateRoomType(roomType);
      } else {
          hostDAO.insertRoomType(roomType);
      }
  }
  for (Map<String, Object> existingRoomType : existingRoomTypes) {
      boolean roomTypeExists = false;
      for (Map<String, Object> roomType : list) {
          if (roomType.get("ROOM_ID").equals(existingRoomType.get("ROOM_ID"))) {
              roomTypeExists = true;
              break;
          }
      }
      if (!roomTypeExists) {
          hostDAO.deleteRoomType(existingRoomType.get("ROOM_ID"));
      }
  }
  // ...
}
