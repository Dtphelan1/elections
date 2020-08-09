import React, { useRef, useEffect } from 'react';
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
import { Footnote } from './FootnoteGenerator';
import Footer from './Footer';

// Google Analytics Setup
const gaTag = "UA-174946812-1"

function App() {
  const pages = [
    WelcomeScreen,
    FramingScreen,
    IdealElectionScreen,
    // FirstPastThePostScreen,
    // TournamentScreen,
    // RankedVotingScreen,
    // RankingsAndTournamentsScreen,
    // RankedSystemsScreen,
    // NextStepsScreen,
  ];

  /*
   * Code for changing footnotes
   */
  // Ref for changing the footnote component
  const ref = useRef(null);

  const closeFootnote = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      ref.current.style.opacity = 0;
      ref.current.style.visibility = "hidden";
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.initialize(gaTag);
    if (window.location.hostname !== "localhost") {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
    document.addEventListener('click', closeFootnote, true);
    return () => {
      document.removeEventListener('click', closeFootnote, true);
    };
  }, []);

  return (
    <>
      <div className="App">
        {pages.map((Page, i) => (
          <Page key={i} ref={ref} />
        ))}
        <Footnote ref={ref} />
        <Footer />
      </div>
    </>
  );
}

export default App;
