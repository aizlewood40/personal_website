const withSourceMaps = require("@zeit/next-source-maps")({
  devtool: "hidden-source-map",
});
const path = require("path");

module.exports = withSourceMaps({
  pageExtensions: ["tsx"],
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            babelrc: false,
            extends: path.resolve(__dirname, ".babelrc"),
          },
        },
        {
          loader: require("styled-jsx/webpack").loader,
          options: {
            type: "scoped",
          },
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: dev,
          },
        },
      ],
    });

    config.node = {
      fs: "empty",
    };
    return config;
  },
});
