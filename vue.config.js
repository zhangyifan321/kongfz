module.exports = {
    devServer: {
      proxy: {
        '/login': {
          target: 'http://127.0.0.1:3000',
          ws: true,
          changeOrigin: true
        }
      }
    },
  }