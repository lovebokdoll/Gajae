import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-quill/dist/quill.snow.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore } from 'redux';
import App from './App';
import rootReducer from './redux/rootReducer';
import AuthLogic from './service/authLogic';
import firebaseApp from './service/firebase';
import ImageUploader from './service/imageUploader';

const root = ReactDOM.createRoot(document.getElementById('root'));
const authLogic = new AuthLogic(firebaseApp);
const imageUploader = new ImageUploader();

const store = legacy_createStore(rootReducer);
console.log(store.getState());

root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <App authLogic={authLogic} imageUploader={imageUploader} />
      </BrowserRouter>{' '}
    </Provider>
  </>
);
