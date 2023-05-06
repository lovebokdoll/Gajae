import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-quill/dist/quill.snow.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore } from 'redux';
import App from './App';
import rootReducer from './redux/rootReducer';
import { setAuth } from './redux/userAuth/action';
import AuthLogic from './service/authLogic';
import firebaseApp from './service/firebase';
import ImageUploader from './service/imageUploader';

const imageUploader = new ImageUploader();
const authLogic = new AuthLogic(firebaseApp);
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(rootReducer);
store.dispatch(setAuth(authLogic.getUserAuth(), authLogic.getGoogleAuthProvider()));

root.render(
  <>
    {' '}
    <BrowserRouter>
      <Provider store={store}>
        <App imageUploader={imageUploader} />
      </Provider>
    </BrowserRouter>
  </>
);
