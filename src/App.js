import React, { useRef, useEffect, useState } from 'react';
import ReactGA, { set } from 'react-ga';
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
    FirstPastThePostScreen,
    TournamentScreen,
    RankedVotingScreen,
    RankingsAndTournamentsScreen,
    RankedSystemsScreen,
    NextStepsScreen,
  ];

  /*
   * Code for changing footnotes
   */
  // Ref for changing the footnote component
  const footnoteRef = useRef(null);
  const [footnoteNum, setFootnoteNum] = useState(null)
  const [footnoteLink, setFootnoteLink] = useState(null)
  const [footnoteDesc, setFootnoteDesc] = useState(null)
  function setFootnote(num, link, desc) {
    setFootnoteNum(num)
    setFootnoteLink(link)
    setFootnoteDesc(desc)
  }
  // Function for closing the footnote on clicks outside the div proper
  const closeFootnote = (event) => {
    if (footnoteRef.current && !footnoteRef.current.contains(event.target)) {
      footnoteRef.current.style.opacity = 0;
      footnoteRef.current.style.visibility = "hidden";
    }
  }

  useEffect(() => {
    // GA functionality
    ReactGA.initialize(gaTag);
    if (window.location.hostname !== "localhost") {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
    // Needed for footnote management
    document.addEventListener('click', closeFootnote, true);
    return () => {
      document.removeEventListener('click', closeFootnote, true);
    };
  }, []);

  return (
    <>
      <div className="App">
        {pages.map((Page, i) => (
          <Page key={i} ref={footnoteRef} setFootnote={setFootnote}/>
        ))}
        <Footnote
          ref={footnoteRef}
          footnoteNum={footnoteNum}
          footnoteLink={footnoteLink}
          footnoteDesc={footnoteDesc}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
