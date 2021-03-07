import React from "react";
import { AppWrapper, ContextProvider } from "../src/components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "dark",
  },
};

export const decorators = [
  (Story) => (
    <ContextProvider>
      <AppWrapper>
        <Story />
      </AppWrapper>
    </ContextProvider>
  ),
];
