import React, { useEffect } from 'react';
import WelcomeScreen from './WelcomeScreen'
import FramingScreen from './FramingScreen';
import IdealElectionScreen from './IdealElectionScreen';
import FirstPastThePostScreen from './FirstPastThePostScreen';
import TournamentScreen from './TournamentScreen';
import RankedVotingScreen from './RankedVotingScreen';
import RankingsAndTournamentsScreen from './RankingsAndTournamentsScreen';
import RankedSystemsScreen from './RankedSystemsScreen';
import NextStepsScreen from './NextStepsScreen';
import Footer from './Footer';

function App() {
  const pages = [
    WelcomeScreen,
    FramingScreen,
    IdealElectionScreen,
    FirstPastThePostScreen,
    TournamentScreen,
    RankedVotingScreen,
    RankingsAndTournamentsScreen,
    RankedSystemsScreen,
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
