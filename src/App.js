import React from 'react';
import './App.css';
import PositionWiget from './components/wiget/position'
import AppearanceWiget from './components/wiget/appearance'
import TextWiget from './components/wiget/text'

function App() {
  return (
    <div className="App container p-6">
      <TextWiget />
      <PositionWiget />
      <AppearanceWiget />
    </div>
  );
}

export default App;
