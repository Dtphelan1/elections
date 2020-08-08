import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
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

// Google Analytics Setup
const gaTag = "UA-174946812-1"
ReactGA.initialize(gaTag);
if (window.location.hostname !== "localhost") {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

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
