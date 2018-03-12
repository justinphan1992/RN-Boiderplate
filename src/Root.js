
import React from 'react';
import { Provider } from 'react-redux';
import createReactNavigationPlugin from '@rematch/react-navigation';
import Routes from './routes/route';
import { createStore } from './store/store';

// add react navigation with redux
const { Navigator, reactNavigationPlugin } = createReactNavigationPlugin({
  Routes,
  initialScreen: 'Login',
});

const store = createStore(reactNavigationPlugin);

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
