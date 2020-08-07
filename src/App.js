import React, { useEffect } from 'react';
import WelcomeScreen from './WelcomeScreen'
import FramingScreen from './FramingScreen';
import IdealElectionScreen from './IdealElectionScreen';
import FirstPastThePostScreen from './FirstPastThePostScreen';
import TournamentScreen from './TournamentScreen';
import PreferentialVotingScreen from './PreferentialVotingScreen';
import PreferencesAndTournamentsScreen from './PreferencesAndTournamentsScreen';
import PreferentialSystemsScreen from './PreferentialSystemsScreen';
import NextStepsScreen from './NextStepsScreen';
import Footer from './Footer';

function App() {
  const pages = [
    WelcomeScreen,
    FramingScreen,
    IdealElectionScreen,
    FirstPastThePostScreen,
    TournamentScreen,
    PreferentialVotingScreen,
    PreferencesAndTournamentsScreen,
    PreferentialSystemsScreen,
    NextStepsScreen,
  ];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="App">
        {pages.map((Page, i) => (
          <Page key={i} />
        ))}
        <Footer />
      </div>
    </>
  );
}

export default App;
