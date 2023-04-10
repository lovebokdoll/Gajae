SELECT * FROM PROPERTIES  order by p_id asc
SELECT * FROM  ROOM_TYPES   order by p_id asc

DELETE FROM PROPERTIES WHERE p_title IS NULL;
ALTER TABLE PROPERTIES DROP COLUMN p_roomtype;
--------------------------------------------숙소별 P_ROOMTYPE 뽑기---------------------------------------------------
SELECT P.P_ID
     ,LTRIM( REGEXP_SUBSTR(P.P_ROOMTYPE,'[^,\/]+', 1, b.lv)) AS R_ROOMTYPE_NM
  FROM PROPERTIES  P
     , (SELECT LEVEL AS lv 
          FROM dual 
       CONNECT BY LEVEL <= 20) b --구분자(,) 최대 개수 10개
 WHERE REGEXP_SUBSTR(P.P_ROOMTYPE, '[^,\/]+', 1, b.lv) IS NOT NULL
 ORDER BY P_ID, R_ROOMTYPE_NM
  -------------------------------------------------------------------------------------------------------------------
-- 새로운 테이블 생성
CREATE TABLE ROOM_TYPES (
  P_ID NUMBER,
  R_ROOMTYPE_NM VARCHAR2(50)
);

-- REGEXP_SUBSTR 함수를 사용하여 데이터 추출하고 ROOM_TYPES 테이블에 저장
INSERT INTO ROOM_TYPES (P_ID, R_ROOMTYPE_NM)
SELECT P.P_ID
     , LTRIM(REGEXP_SUBSTR(P.P_ROOMTYPE,'[^,\/]+', 1, b.lv)) AS R_ROOMTYPE_NM
  FROM PROPERTIES  P
     , (SELECT LEVEL AS lv 
          FROM dual 
       CONNECT BY LEVEL <= 20) b --구분자(,) 최대 개수 10개
 WHERE REGEXP_SUBSTR(P.P_ROOMTYPE, '[^,\/]+', 1, b.lv) IS NOT NULL
 ORDER BY P_ID, R_ROOMTYPE_NM;
 --------------------------------------------숙소 정보 들고오기(숙소)--------------------------------------------------     SELECT P_ID,
  SELECT  
  P_TITLE,
    P_POSTAL,
    P_ADDRESS,
    P_TEL,
    P_MAPY,
    P_MAPX,
    P_OVERVIEW,
    P_SCALE,
    P_MAXPEOPLE,
    P_ROOMCOUNT,
    P_PARKING,
    P_KITCHEN,
    P_CHECKIN,
    P_CHECKOUT,
    P_GUIDE,
    P_HOMEPAGE,
    P_RESTAURANT,
    P_EXTRA,
    P_DETAIL,
    P_REFUND
    FROM MBLOG.PROPERTIES

    ORDER BY  P_ID ASC
    --------------------------------------------id에 맞는 정보 들고오기(숙소)--------------------------------------------------
SELECT 
R.P_ID,
P.P_PRICE,
P.P_REFUND,
P.P_MAPY,
P.P_MAPX,
P.P_ROOMCOUNT,
P.P_TITLE,
P.P_ADDRESS,
P.P_OVERVIEW,
P.P_PARKING,
P.P_SCALE,
P.P_MAXPEOPLE,
P.P_CHECKIN,
P.P_CHECKOUT,
P.P_PARKING,
P.P_KITCHEN,
P.P_EXTRA,
P.P_DETAIL,
R.R_ROOMTYPE_NM
    FROM PROPERTIES P,ROOM_TYPES R
    WHERE P.P_ID = R.P_ID
  AND R.P_ID=1
    
    
   SELECT R_ROOMTYPE_NM
   FROM ROOM_TYPES 
   WHERE P_ID=:x
   
   SELECT * FROM ROOM_TYPES ORDER BY P_ID ASC