import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { firebaseApp, auth, db } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ auth, db }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
