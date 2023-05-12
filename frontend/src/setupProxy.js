const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://9klnwopt8e.apigw.ntruss.com",
      changeOrigin: true,
    })
  );
};
