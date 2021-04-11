import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageLayout from './components/pageLayout';
import Navigation from './navigation';
// import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <PageLayout>
      <Navigation />
    </PageLayout>
  </React.StrictMode>,
  document.getElementById('root')
);