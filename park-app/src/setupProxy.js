
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api/auth/signup',
    createProxyMiddleware({
      target: 'http://serverapp:9000',
      changeOrigin: true
    })
  );
};
