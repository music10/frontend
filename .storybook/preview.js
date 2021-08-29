import React from "react";
import { AppWrapper, ContextProvider } from "../src/components";
import { theme } from "../src/themes";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'bg',
    values: [
      { name: 'bg', value: theme.colors.bg },
    ],
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
