import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import NavigationBar from './navbar';
import LogInModal from './modal';


import * as serviceWorker from './serviceWorker';
//const h1 = $('h1');
//console.log(h1);
ReactDOM.render(
  <React.StrictMode>
    <NavigationBar ref={(compRef) => {window.navBarRef = compRef;console.log('NavigationBar render : global ref = '+compRef)}}/>
  </React.StrictMode>,
  document.getElementById('navbarRoot')
);

ReactDOM.render(
  <React.StrictMode>
    <LogInModal />
  </React.StrictMode>,
  document.getElementById('modalRoot')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
