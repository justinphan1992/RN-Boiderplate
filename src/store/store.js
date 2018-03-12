import { init } from '@rematch/core';
import * as models from '../models/';

export default function createStore(reactNavigationPlugin) {
  const store = init({
    models,
    plugins: [reactNavigationPlugin],
  });
  return store;
}
