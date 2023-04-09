export const textRegEx = (event) => {
  const name = event.target.value; //input onChange
  const kor = /^[가-힣]+$/;
  const eng = /^[a-zA-Z]+$/;

  if (name.length === 0) {
    return ' '; // 공백 있음
  } else if (kor.test(name) || eng.test(name)) {
    return '';
  } else {
    return '부서명은 영어 또는 한글로만 가능합니다.';
  }
};
