import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';
import Notifications from './components/Notifications';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <Notifications />
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
