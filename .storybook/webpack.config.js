module.exports = async ({ config }) => {
  config.resolve.alias = {
    "react-native$": "react-native-web",
  };
  config.resolve.extensions = [
    ".web.tsx",
    ".web.ts",
    ".web.jsx",
    ".web.js",
    ".tsx",
    ".ts",
    ".jsx",
    ".js",
  ];
  return config;
};
