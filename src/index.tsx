import React from 'react';
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import 'index.scss';
import App from 'App';

import {store} from 'store/store'

const rootElement = document.getElementById('root') as HTMLDivElement;

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
