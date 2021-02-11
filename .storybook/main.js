module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stor(y|ies).@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
};
