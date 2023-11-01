const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    proxy({
      target: "http://3.34.90.162:9999/", //api 요청을 보낼 서버 주소
      changeOrigin: true,
    })
  );
};
