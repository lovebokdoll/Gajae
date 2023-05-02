export const regexEmail = (event) => {
  const regex = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)\.(com|net)$/;
  const email = event.target.value;
  if (email === "") {
    return "이메일을 입력하세요";
  } else if (!regex.test(email)) {
    return "이메일 형식이 아닙니다.";
  } else {
    return "올바른 이메일입니다.";
  }
};

export const regexID = (event) => {
  console.log("event ===>", event);
  const regex = /^[a-z]+[a-z0-9]{5,15}$/g;
  const id = event.target.value;
  if (id === "") {
    return "아이디를 입력하세요";
  } else if (!regex.test(id)) {
    return "영어 또는 숫자 6~15자리를 입력해주세요.";
  } else {
    return "멋진 아이디네요!";
  }
};

export const regexPassword = (event) => {
  console.log("event ===>", event);
  const password = event.target.value;
  const num = password.search(/[0-9]/g);
  const eng = password.search(/[a-z]/gi);
  const special = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  const hangulcheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  if (password.length === 0) {
    return "비밀번호를 입력해주세요";
  } else if (!/^\S*$/.test(password)) {
    return "비밀번호는 공백 없이 입력해주세요.";
  } else if (hangulcheck.test(password)) {
    return "비밀번호에 한글을 사용 할 수 없습니다.";
  } else if (password.length < 8 || password.length > 15) {
    return "8자리 ~ 15자리 이내로 입력해주세요.";
  } else if (num < 0 || eng < 0 || special < 0) {
    return "영문, 숫자, 특수문자를 혼합하여 입력해주세요.";
  } else {
    return "올바른 비밀번호 입니다.";
  }
};

export const checkPassword = (password, password2) => {
  console.log(password, password2);
  if (password2) {
    if (password === password2) {
      return "비밀번호가 일치합니다.";
    } else {
      return "비밀번호가 일치하지 않습니다.";
    }
  } else {
    return "";
  }
};

export const regexName = (event) => {
  console.log("event ===>", event);
  const name = event.target.value;
  const kor = /^[가-힣]+$/;
  const eng = /^[a-zA-Z]+$/;
  if (name.length === 0) {
    return " ";
  } else if (kor.test(name) || eng.test(name)) {
    return "";
  } else {
    return "이름은 영어또는 한글로만 가능합니다.";
  }
};

export const regexBirthday = (event) => {
  console.log("event ===>", event);
  const birthday = event.target.value;
  const day =
    /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
  if (birthday.length === 0) {
    return " ";
  } else if (day.test(birthday) && birthday.length === 8) {
    return "";
  } else {
    return "생년월일은 YYYYMMDD형식으로 적어주세요.";
  }
};

export const regexMobile = (event) => {
  console.log("event ===>", event);
  const mobile = event.target.value;

  const regex = /^01([0|1|6|7|8|9]?)([0-9]{4})([0-9]{4})$/;

  if (mobile.length === 0) {
    return " ";
  } else if (!regex.test(mobile)) {
    return "'-'를 제외한 번호를 적어주세요.";
  } else {
    return "";
  }
};

export const regexBusinessNum = (event) => {
  console.log("event ===>", event);
  const regex = /^[0-9]{3}-[0-9]{2}-[0-9]{5}$/;
  const businessNum = event.target.value;
  const hangulcheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  if (businessNum.length === 0) {
    return " ";
  } else if (hangulcheck.test(businessNum)) {
    return "사업자번호에 한글을 사용 할 수 없습니다.";
  } else if (!regex.test(businessNum)) {
    return "3자리-2자리-5자리 형식으로 입력해주세요.";
  } else {
    return "사업자번호 입력 성공";
  }
};

export const regexNickname = (event) => {
  console.log("event ===>", event);
  const nickname = event.target.value;
  const check = /^[가-힣a-zA-Z0-9]+$/;

  if (nickname.length === 0) {
    return " ";
  } else if (nickname.length < 2 || nickname.length > 10) {
    return "2자리 ~ 10자리 이내로 입력해주세요.";
  } else if (nickname.search(/\s/) !== -1) {
    return "닉네임은 공백 없이 입력해주세요.";
  } else if (check.test(nickname)) {
    return "멋진 닉네임이네요!";
  } else {
    return "해당 닉네임은 사용할 수 없습니다.";
  }
};
