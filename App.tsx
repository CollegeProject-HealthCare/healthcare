import React from 'react';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './src/Navigation/Index';

import store from './src/redux/App/store';
import { persistor } from './src/redux/App/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
