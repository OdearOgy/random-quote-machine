import React from 'react';
import './styles/app.css';

import { Quote } from './components/quote';

function App() {
  return (
    <div className="App">
      <h1 className="AppTitle">Click the Button to get Awesome Quotes</h1>
      <Quote />
    </div>
  );
}

export default App;
