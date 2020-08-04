import React, { useEffect } from 'react';
import BlankPage from './BlankPage'
import WelcomeScreen from './WelcomeScreen'
import FramingScreen from './FramingScreen';
import './scss/App.scss';
import ElectionScreen from './ElectionScreen';
import ExampleElectionScreen from './ExampleElectionScreen';
import TournamentScreen from './TournamentScreen';

function App() {
  const pages = [
    WelcomeScreen,
    FramingScreen,
    ElectionScreen,
    ExampleElectionScreen,
    TournamentScreen,
    // FirstPastThePostScreen,
    // CondorcetScreen,
  ];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      {pages.map((Page, i) => (
        <Page key={i} />
      ))}
    </div>
  );
}

export default App;
