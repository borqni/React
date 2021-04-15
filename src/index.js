import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageLayout from './components/pageLayout';
import Navigation from './navigation';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App>
      <PageLayout>
        <Navigation />
      </PageLayout>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
)