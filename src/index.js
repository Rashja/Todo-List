import React from 'react';
import { render } from 'react-dom';
import './styles/_styles.scss';
import App from './components/App';
import Store from './store/store';

const Index=()=>(
  <Store>
    <App />
  </Store>
);

render(<Index />, document.getElementById('root'));
