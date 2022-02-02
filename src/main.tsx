import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/bounce.scss';
import '../styles/fancy.scss';
import '../styles/SwiperSize.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
