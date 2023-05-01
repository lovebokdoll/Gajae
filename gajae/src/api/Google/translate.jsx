import React, { useState } from 'react';
import { google } from 'googleapis';

const translator = google.translate({
  version: 'v2',
  auth: 'YOUR_API_KEY_HERE',
});

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const translateText = async () => {
    const res = await translator.translations.list({
      q: inputText,
      source: 'en',
      target: 'ko',
    });

    setOutputText(res.data.translations[0].translatedText);
  };

  return (
    <div>
      <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={translateText}>Translate</button>
      <p>{outputText}</p>
    </div>
  );
}

export default App;
