export const convertStartDate = (resStartDate) => {
  const receivedStartDate = new Date(resStartDate);
  // 년, 월, 일 추출
  const startYear = receivedStartDate.getFullYear();
  const startMonth = receivedStartDate.getMonth() + 1;
  const startDay = receivedStartDate.getDate();

  // 월은 1~9월까지는 'M'으로, 10~12월까지는 'MM'으로 포맷팅
  const formattedStartMonth = startMonth < 10 ? `${startMonth}` : `${startMonth}`;

  // 일은 항상 'DD'로 포맷팅
  const formattedStartDay = `${startDay}`;

  // 최종 문자열 포맷팅
  const formattedStartDate = `${startYear}년 ${formattedStartMonth}월 ${formattedStartDay}일`;
  console.log(formattedStartDate);
  return formattedStartDate;
};

export const convertEndDate = (resEndDate) => {
  const receivedEndDate = new Date(resEndDate);
  // 년, 월, 일 추출
  const EndYear = receivedEndDate.getFullYear();
  const EndMonth = receivedEndDate.getMonth() + 1;
  const EndDay = receivedEndDate.getDate();

  // 월은 1~9월까지는 'M'으로, 10~12월까지는 'MM'으로 포맷팅
  const formattedEndMonth = EndMonth < 10 ? `${EndMonth}` : `${EndMonth}`;

  // 일은 항상 'DD'로 포맷팅
  const formattedEndDay = `${EndDay}`;

  // 최종 문자열 포맷팅
  const formattedEndDate = `${EndYear}년 ${formattedEndMonth}월 ${formattedEndDay}일`;
  console.log(formattedEndDate);
  return formattedEndDate;
};

export const countNights = (receivedStartDate, receivedEndDate) => {
  // 하루를 밀리초 단위로 계산
  const oneDay = 1000 * 60 * 60 * 24;

  // 체크인 날짜와 체크아웃 날짜의 시간 차이를 계산하여 일 수로 변환
  const diffTime = Math.abs(receivedEndDate.getTime() - receivedStartDate.getTime());
  const diffDays = Math.ceil(diffTime / oneDay);

  return diffDays;
};

export const dayOfWeek = (receivedStartDate, receivedEndDate) => {
  // 요일을 가져오기 위한 배열
  const dayOfWeekList = ['일', '월', '화', '수', '목', '금', '토'];

  // 요일 추출
  const startDayOfWeek = dayOfWeekList[receivedStartDate.getDay()];
  const endDayOfWeek = dayOfWeekList[receivedEndDate.getDay()];
  
  return [startDayOfWeek, endDayOfWeek];
};
