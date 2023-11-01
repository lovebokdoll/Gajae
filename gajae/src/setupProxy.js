const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    proxy({
      target: "http://13.124.212.51:9999/", //api 요청을 보낼 서버 주소
      changeOrigin: true,
    })
  );
};
