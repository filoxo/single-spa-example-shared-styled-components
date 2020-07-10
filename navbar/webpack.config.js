const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const config = singleSpaDefaults({
    orgName: "filoxo",
    projectName: "navbar",
    webpackConfigEnv,
  });

  // Override rule for handling css to enable CSS Modules
  config.module.rules.forEach((rule, ruleIndex) => {
    if (rule.test && rule.test.toString() === /\.css$/i.toString()) {
      rule.use.forEach((use, useIndex) => {
        if (use.loader.includes("css-loader")) {
          config.module.rules[ruleIndex].use[useIndex].options.modules = true;
        }
      });
    }
  });

  return config;
};
