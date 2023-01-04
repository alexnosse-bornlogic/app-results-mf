const webpack = require("webpack");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

require("dotenv").config({ path: "./.env" });

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "bornlogic",
    projectName: "app-results-mf",
    webpackConfigEnv,
    argv,
    orgPackagesAsExternal: false,
  });

  return merge(defaultConfig, {
    plugins: [
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ],
    externals: {
      react: "react",
      "react-dom": "react-dom",
      "@bornlogic/util-auth-mf": "@bornlogic/util-auth-mf",
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
