package com.gajae.demo.logic;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gajae.demo.dao.HostDAO;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class HostLogic {

	@Autowired
	private HostDAO hostDAO;

	public int hostSignup(Map<String, Object> map) {
		int result = hostDAO.hostSignup(map);

		return result;

	}

	public List<Map<String, Object>> overlapCheck(Map<String, Object> map) {
		log.info("map = {}", map);
		List<Map<String, Object>> hostList = hostDAO.overlapCheck(map);
		return hostList;

	}

	public List<Map<String, Object>> login(Map<String, Object> map) {
		log.info("map = {}", map);
		List<Map<String, Object>> hostList = hostDAO.login(map);

		return hostList;
	}

//호텔등록 로직
	public int propertyInsert(Map<String, Object> map) {
		log.info("map={}", map);
		log.info(map.get("room_id"));
		
		//Object pids[] = map.keySet().toArray();
		
		ArrayList<String> arrayList = (ArrayList<String>) map.get("room_id");
		String[] roomtypes = arrayList.toArray(new String[0]);
		
		
		int[] rids = new int[roomtypes.length];
		for(String s: roomtypes) {
			System.out.println(s);
		}
		for(int i=0;i<rids.length;i++) {
			log.info(roomtypes[i]);
			rids[i] = Integer.parseInt(roomtypes[i]);
		}
		ArrayList<Map<String,Object>> list = new ArrayList<>();
		Map<String,Object> pMap = null;
		int p_id = 0;
		p_id = hostDAO.getPid();
		for(int i=0;i<rids.length;i++) {
			pMap = new HashMap<>();
			pMap.put("p_id", p_id);
			pMap.put("r_id", rids[i]);
			pMap.put("p_title", map.get("p_title"));
			pMap.put("p_overview", map.get("p_overview"));
			pMap.put("p_tel", map.get("p_tel"));
			pMap.put("p_postal", map.get("p_postal"));
			pMap.put("p_address", map.get("p_address"));
			pMap.put("p_refund", map.get("p_refund"));
			pMap.put("p_scale", map.get("p_scale"));
			pMap.put("p_checkin", map.get("p_checkin"));
			pMap.put("p_checkout", map.get("p_checkout"));
			pMap.put("p_star", map.get("p_star"));
			pMap.put("p_photo", map.get("p_photo"));
			pMap.put("host_business_num", map.get("host_business_num"));
			log.info(rids[i]);
			//log.info("before : ", map);
			//map.put("r_id", rids[i]);
			//log.info("after : ", map);
			list.add(pMap);
		}
		log.info("rList={}", list);
		
		/*
		int is[] = new int[pids.length];
		for(int i=0;i<pids.length;i++) {
			is[i] = Integer.parseInt(map.get(pids[i]).toString());
		}
		for(int x: is) {
			System.out.println(x);
		}
		*/
		// result는 성공유무를 나타내는 숫자가 아니라 호텔등록시에 채번된 시퀀스를 돌려받는 값이여야 한다.
		int result = 0;
		result = hostDAO.propertyInsert(list);
		log.info("result={}",result+"건 등록되었습니다.");
		// for문 돌려서 1건만 가지고 insert하기
		//List<Map<String, Object>> rList = new ArrayList<>();
		//ArrayList<String> arrayList = (ArrayList<String>) map.get("room_id");
		//String[] roomtypes = arrayList.toArray(new String[0]);
		//HashMap<String, Object> roomIdList = null;
		//for (int i = 0; i < is.length; i++) {
			//roomIdList = new HashMap<String, Object>();
			//roomIdList.put("room_id", roomtypes[i]);
			//map.put("room_id", is[i]);
			//rList.add(map);
//			log.info("roomIdList={}", roomIdList);
		//}
//		// 리스트에서 room_id의[0]번째 방의 값을 꺼냄
//		String room_id = rList.get(0).get("room_id").toString();
//		log.info("room_id={}", room_id);
//		// 다시 map에 담아준다.
//		map.put("room_id", room_id);
		//result = hostDAO.propertyInsert(rList);
		// 위에서 돌려받은 시퀀스를 pmap에 담아줌
		//map.put("p_id", result);
		// 입력된 값이 있니
		// if (map.get("room_id") != null) {
		// 작성자가 선택하는 룸타입의 갯수가 다르다.
		// 3개인 경우 3개에 대한 insert가 3번 일어나야 한다.
		// List<Map<String, Object>> rList = roomList(map);
		// log.info("rList={}", rList);

//			for (Map<String, Object> room : rList) {
//				room.put("p_id", result);
//				room.put("p_title", map.get("p_title"));
//				room.put("p_overview",  map.get("p_overview"));
//				room.put("p_tel",  map.get("p_tel"));
//				room.put("p_postal",  map.get("p_postal"));
//				room.put("p_address",  map.get("p_address"));
//				room.put("p_refund",  map.get("p_refund"));
//				room.put("p_scale",  map.get("p_scale"));
//				room.put("p_star",  map.get("p_star"));
//				room.put("p_checkin",  map.get("p_checkin"));
//				room.put("p_checkout",  map.get("p_checkout"));
//				room.put("host_business_num",  map.get("host_business_num"));
//				result = hostDAO.propertyInsert(map);
//				log.info("result={}", result);
//			}

		// }
		return p_id;

	}

	// 룸타입 등록
	private List<Map<String, Object>> roomList(Map<String, Object> map) {
		log.info("room_id = {}", map.get("room_id"));
		// List타입의 rList변수 생성
		List<Map<String, Object>> rList = new ArrayList<>();
		// Object obj = map.get("room_id");

		// room_id 키에 저장된 값을 String[]타입으로 캐스팅하고 이 배열을 roomType변수에 저장한다.
		// String[] roomtypes = (String[]) map.get("room_id");
		ArrayList<String> arrayList = (ArrayList<String>) map.get("room_id");
		String[] roomtypes = arrayList.toArray(new String[0]);

		HashMap<String, Object> roomIdList = null;
		// roomtype배열에 저장된 각각의 문자열에 대해 반복적으로 실행.
		// 내부에서는 HashMap<String, Object>타입의 변수 rMap을 새로 생성하고 현재 문자열을 저장하고
		// rMap을 rList에 저장한다.
		for (int i = 0; i < roomtypes.length; i++) {
			roomIdList = new HashMap<String, Object>();
			roomIdList.put("room_id", roomtypes[i]);
			roomIdList.put("p_id", map.get("p_id"));
			rList.add(roomIdList);
		}
		log.info("rList={}", rList);
		return rList;
	}

	public int hostfacInsert(Map<String, Object> map) {
		int result = 0;
		result = hostDAO.hostfacInsert(map);
		return result;
	}


	public int hostextraInsert(Map<String, Object> map) {
		log.info("map={}", map);
		int result = 0;
		//ArrayList<String> arrayList = (ArrayList<String>) map.get("P_EXTRA");
		//String[] extratypes = new String[] { (String) map.get("P_EXTRA") };
		  String[] extratypes = ((String) map.get("P_EXTRA")).split(",");
		log.info("P_EXTRA={}", extratypes);
		
		ArrayList<Map<String,Object>> list = new ArrayList<>();
		Map<String,Object> pMap = null;
		for(int i=0;i<extratypes.length;i++) {
			pMap = new HashMap<>();
			pMap.put("P_ID", map.get("P_ID"));
			pMap.put("P_EXTRA_SEQ", String.valueOf(i+1));
			pMap.put("P_EXTRA", extratypes[i].trim());
			log.info(extratypes[i]);
			list.add(pMap);
		}
		log.info("rList={}", list);
		result = hostDAO.hostextraInsert(list);
		return result;
	}

}
