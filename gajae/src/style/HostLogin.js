import styled from "styled-components";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 450px;
  width: 30%;
  min-width: 350px;
  padding: 80px 30px 80px 30px;
  border-radius: 30px;
  margin: 150px 0px 150px 0px;
  //  border: 2px solid lightgrey;
`;

export const SignupForm = styled(LoginForm)`
  padding: 40px 40px 80px 40px;
  max-width: 800px;
  min-width: 300px;
  width: 100%;
  height: 100vh;
`;

export const MyH1 = styled.div`
  padding-top: 80px;
  font-size: 30px;
  margin-bottom: 50px;
  font-weight: 15px;
  position: absolute;
  text-align: center; /* 가운데 정렬 */
`;

/* 3번의 하위태그에 대한 설정 */
export const MyP = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const PwEye = styled.i`
  //border: 1px solid black;
  position: absolute;
  margin-left: 250px;
  margin-top: -34px;
  cursor: pointer;
  align-items: center;
  &:hover {
    color: #808080;
  }
`;

export const MyLabel = styled.label`
  align-items: center;
  font-size: 14px;
  color: #414149;
  display: block;
  margin-bottom: 40px;
  width: 350;
`;

export const MyLabelAb = styled(MyLabel)`
  position: absolute;
  color: #85858b;
  font-size: 11px;
`;

export const MyInput = styled.input`
  width: 300px;
  display: block;
  height: 50px;
  border: none;
  border-bottom: 1px solid #dddddd;
  font-size: 15px;
  &:focus,
  &:hover {
    border-bottom: 2px solid #004fff;
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder {
    color: lightgray;
    font-size: 13px;
    text-align: center;
  }
`;

// export const MyH1 = styled.div`
//   padding-top: 60px;
//   font-size: 30px;
//   margin-bottom: 60px;
//   margin-top: 15px;
//   font-weight: 15px;
//   position: absolute;
//   text-align: center; /* 가운데 정렬 */
// `;

export const MyForm = styled.div`
  width: 100%;
  align-item: center;
  position: relative;
  top: 200px;
  left: 39%;
  //transform: translate(-20%, 70%);
`;

export const SubmitButton = styled.button`
  width: 300px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 24px;
  margin-bottom: 100px;
  border: 1.5px solid rgb(105, 175, 245);
  color: white;
  cursor: pointer;
`;

export const WarningButton = styled(SubmitButton)`
  border: none;
  background-color: rgb(241, 80, 42);
  color: white;
  &:hover {
    background-color: rgb(200, 34, 18);
  }
`;

export const GoogleButton = styled(SubmitButton)`
  margin-top: 0px;
  background-color: white;
  font-weight: bold;
  border: 1px solid #dddddd;
  color: black;
  &:hover {
    background-color: lightgray;
  }
`;

export const MyButton = styled.button`
  margin-top: 42px;
  margin-bottom: 42px;
  background-color: white;
  margin-left: 1px;
  color: black;
  border-radius: 10px;
  font-size: 14px;
  border: 1px solid lightgray;
  width: 75px;
  height: 25px;
  // &:hover {
  //  background-color: rgb(50, 130, 225);
  //}
`;

/* submit버튼에 float를 주면 밀리는데 clear:both로 해결 */
export const DividerDiv = styled.div`
  position: relative;
  clear: both;
  text-align: center;
  margin-bottom: 20px;
`;

export const DividerDiv2 = styled.div`
  position: relative;
  clear: both;
  text-align: center;
  margin-bottom: 50px;
`;

export const DividerHr = styled.hr`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 1px;
  border: none;
  background-color: #535353;
`;

export const DividerSpan = styled.span`
  position: relative;
  display: inline-block;
  margin-top: 5px;
  padding: 0 10px;
  color: #4b4b4b;
  background-color: none;
`;

export const BButton = styled.button`
  border-radius: 10px;
  border: 1px solid white;
  background-color: rgb(105, 175, 245);
  color: white;
  width: 80px;
  height: 38px;
  font-weight: bold;
  &:hover {
    background-color: rgb(58, 129, 200);
  }
`;

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  //font-family: "KOTRA_GOTHIC";
  width: 100%;
  margin-bottom: 50px;
  align-items: center;
  background-color: #f5f5f5;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border-radius: 20px;
  padding: 10px;
  max-width: 1200px;
  min-height: 650px;
  justify-content: space-between;
`;

export const HeaderDiv = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  margin-top: 25px;
  justify-content: center;
  margin-bottom: 10px;
`;

export const QnACommentArea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 5px;
`;

export const PayForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  padding: 20px;
  width: 100%;
  margin: 40px 10px 40px 10px;
  border: 1px solid lightgray;
  border-radius: 30px;
`;

export const SpanA = styled.span`
  cursor: pointer;
  font-weight: bold;
  color: rgb(105, 175, 245);
  &:hover {
    color: rgb(58, 129, 200);
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 2em;
  font-size: 1.2rem;
  border-radius: 1.2rem;
  background-color: transparent;
  cursor: pointer;
  border: 0.2rem solid #9e7676;
  outline: 0;
  &:hover {
    background-color: #b0daff;
  }
`;

export const Preview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 추가 */
  width: 100%;
  height: 350px;
  border: dotted lightgray;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  display: flex;
  margins: 5px 5px 5px 5px;
  box-shadow: 2px 2px 5px grey;
`;

/* 게시판 버튼 */
export const Custom_btn = styled.button`
background-color: #fff;
color: #0d6efd;
height: 30px;
border: 1px solid #0d6efd;
border-radius: 5px;
padding: 5px 10px;
font-size: 16px;
cursor: pointer;
display: inline-flex; /* 수정된 부분 */
align-items: center; /* 수정된 부분 */
&:hover {
  background-color: #007bff;
  color: #fff;
`;

export const Hr = styled.hr`
  border-top: 1px solid black;
  height: 1px;
  background-color: black;
`;
export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  marginleft: "10px";
`;

export const WholeForm = styled.div`
  background-color: #f5f5f5;
  height: 800px;
`;
