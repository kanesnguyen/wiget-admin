import React, { useEffect, useState } from 'react';
import './App.css';
import {Frame, ContextualSaveBar, Box} from '@shopify/polaris';
import PositionWiget from './components/wiget/position'
import AppearanceWiget from './components/wiget/appearance'
import TextWiget from './components/wiget/text'
import { useSelector } from 'react-redux';

function App() {
  const allState = useSelector(state => state);
  const [disabled, setDisable] = useState(true);
  const cobra = allState;
  useEffect(() => {
    console.log(JSON.stringify(cobra) === JSON.stringify(allState))
    // [...Array(Object.keys(allState).length).keys()].map((e) => {
    //   const wigetValue  = allState[Object.keys(allState)[e]].updated
    //   if (wigetValue === 1) {
    //     console.log("CHANGED")
    //     setDisable(false)
    //     return false;
    //   }
    //   else {
    //     console.log("NOT CHANGED")
    //     setDisable(true)
    //     return false;
    //   }
    // })
  },[allState])
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
            onAction: () => console.log('add form submit logic'),
            loading: false,
            disabled,
          }}
          discardAction={{
            onAction: () => console.log('add clear form logic'),
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
