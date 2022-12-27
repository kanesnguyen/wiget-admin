import React from 'react';
import './App.css';
import {Frame, ContextualSaveBar, Box} from '@shopify/polaris';
import PositionWiget from './components/wiget/position'
import AppearanceWiget from './components/wiget/appearance'
import TextWiget from './components/wiget/text'
import { useSelector } from 'react-redux';

function App() {
  const allState = useSelector(state => state);
  return (
    <div className="App container p-6 pt-20">
      <Frame
        logo={{
          contextualSaveBarSource:
            './logo.png',
        }}
      >
        <ContextualSaveBar
          message=""
          saveAction={{
            onAction: () => console.log(allState),
            loading: false,
            disabled: ![...Array(Object.keys(allState).length).keys()].map((e) => allState[Object.keys(allState)[e]].updated).includes(true),
          }}
          discardAction={{
            onAction: () => console.log('Not saved changed'),
          }}
        />
        <Box as="div" className="container">
      <PositionWiget />
      <AppearanceWiget />
      <TextWiget />
        </Box>
      </Frame>
    </div>
  );
}

export default App;
