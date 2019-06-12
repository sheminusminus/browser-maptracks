import '@babel/polyfill';

import app from './app';


app();

if (module.hot) {
  module.hot.accept('./app.js', function() {
    console.log('Accepting the updated module!');
    app();
  })
}
