// proxy table
//

// ventor server
const ventorServer = 'http://localhost:8082';

const proxyMapper = {
  '/api': {
    changeOrigin: true,
    target: ventorServer,
    pathRewrite: {
      '^/api/': '/'
    }
  }
}

module.exports = exports = proxyMapper;
