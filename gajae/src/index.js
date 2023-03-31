import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-quill/dist/quill.snow.css';
import App from './App';
import ImageUploader from './service/imageUploader';

const imageUploader = new ImageUploader();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      <App imageUploader={imageUploader} />
    </React.StrictMode>
  </>
);
