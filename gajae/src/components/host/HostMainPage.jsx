import {
  Content,
  MainBackground,
  R_CardGroup,
  Title,
} from "../../style/HostStyle";
import { useState } from "react";
import { useEffect } from "react";

const HostMainPage = () => {
  const [hostId, setHostId] = useState();
  useEffect(() => {
    setHostId(window.localStorage.getItem("hostId"));
  }, []);
  return (
    <>
      <MainBackground>
        <Title>
          Gajae.com에
          <br /> 숙소 <br />
          등록하기
          <Content>
            15분이면 별도의 비용 없이 숙소 등록 끝! - 지금 바로 시작하세요
          </Content>
        </Title>
        <R_CardGroup>
          <div
            class="card text-center"
            style={{ width: "22em", height: "20em" }}
          >
            <div class="card-body">
              <h5
                class="card-title"
                style={{ fontSize: "30px", margin: "10%" }}
              >
                숙소 새로 등록하기
              </h5>
              {hostId ? (
                <p
                  class="card-text"
                  style={{ fontSize: "16px", padding: "5%" }}
                >
                  호텔 등록을 시작하세요!
                </p>
              ) : (
                <p
                  class="card-text"
                  style={{ fontSize: "16px", padding: "5%" }}
                >
                  등록을 시작하려면 파트너로
                  <br /> 로그인을 해주세요.
                </p>
              )}
              {hostId ? (
                <a
                  href="/host/registerHotel"
                  class="btn btn-warning"
                  style={{
                    fontSize: "20px",
                    margin: "15%",
                  }}
                >
                  시작하기
                </a>
              ) : (
                <a
                  href="/host/signup"
                  class="btn btn-warning"
                  style={{
                    fontSize: "20px",
                    margin: "15%",
                  }}
                >
                  시작하기
                </a>
              )}
            </div>
          </div>
        </R_CardGroup>
      </MainBackground>
      <div className="myhostpageAbsoluteDiv" style={{ height: "200px" }} />
    </>
  );
};

export default HostMainPage;
