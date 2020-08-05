import React, { useEffect } from 'react';
import BlankPage from './BlankPage'
import WelcomeScreen from './WelcomeScreen'
import FramingScreen from './FramingScreen';
import './scss/App.scss';
import ElectionScreen from './ElectionScreen';
import FirstPastThePostScreen from './FirstPastThePostScreen';
import TournamentScreen from './TournamentScreen';
import InstantRunoffVotingScreen from './InstantRunoffVotingScreen';

function App() {
  const pages = [
    WelcomeScreen,
    FramingScreen,
    ElectionScreen,
    FirstPastThePostScreen,
    TournamentScreen,
    InstantRunoffVotingScreen,
    BlankPage,
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
