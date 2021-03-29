const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      // define what is call a loader
      {
        // first loader is babel
        test: /\.m?js$/, //every file ended with mjs or js must been process by babel
        exclude: /node_modules/, // do not try to run babel outside node module directory
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"], // preset-react means is gonna process all jsx fine / preset-env means is gonna process ES6 syntax
            plugins: ["@babel/plugin-transform-runtime"], //add additional code to enable some features
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
