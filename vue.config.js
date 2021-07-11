module.exports = {
  devServer: {
    proxy: {
      "/products": {
        target: "http://localhost:5000/",
        changeOrigin: true,
        pathRewrite: {
          "^/products": "",
        },
      },
    },
  },
};
