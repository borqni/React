import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './navigation';
import PageLayout from './components/pageLayout';
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