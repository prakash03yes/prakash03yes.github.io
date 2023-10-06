import { store } from './store/index.ts';
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { Provider } from 'react-redux';
import './_styles/resets.css';
import './_styles/global.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider >
  </React.StrictMode>
)
