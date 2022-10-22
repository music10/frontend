import React, { FC, PropsWithChildren } from 'react';
import { Platform } from 'react-native';
import BugsnagPluginReact from '@bugsnag/plugin-react';

import { ErrorMessage } from './components';
import { Bugsnag, BUGSNAG_KEY } from './utils';

if (Platform.OS === 'web' && BUGSNAG_KEY) {
  Bugsnag.start({
    // @ts-expect-error multi platform
    apiKey: BUGSNAG_KEY,
    plugins: [new BugsnagPluginReact()],
  });
}

const PlainComponent: FC<PropsWithChildren> = ({ children }) => <>{children}</>;
const ErrorBoundary =
  Bugsnag.getPlugin('react')?.createErrorBoundary(React) ?? PlainComponent;

const ErrorView = () => (
  <ErrorMessage>
    Произошла ошибка. Мы уже о ней знаем и примем меры. Попробуйте перезагрузить
    приложение
  </ErrorMessage>
);

export const BugsnagWrapper: FC<PropsWithChildren> = ({ children }) => (
  <ErrorBoundary FallbackComponent={ErrorView}>{children}</ErrorBoundary>
);
