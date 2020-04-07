import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native';

import '~/config/ReactotronConfig';

import { store, persistor } from '~/store';
import App from '~/App';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

YellowBox.ignoreWarnings([
  'Non-serializable values',
  'This synthetic',
  'permissionDialog',
  "The 'captureAudio'",
]);
