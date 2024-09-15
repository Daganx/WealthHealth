import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Extracted function to initialize and render the root component
const initializeApp = () => {
  const rootElement = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElement);

  root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
  );

  reportWebVitals();
};

// Initialize the application
initializeApp();