import React from 'react';
import Fade from 'react-reveal/Fade';
import Citation from './Citation';

import './scss/WelcomeScreen.scss';

function WelcomeScreen() {
    return (
        <div id="welcome-page" className="page-section" style={{ background: `url(${process.env.PUBLIC_URL}/img/voting-day.jpg)`, backgroundSize: 'cover', position: "relative", minHeight: "90vh" }}>
            <div className="page-content container">
                <Fade>
                    <div id="welcome-text" className="jumbotron">
                        <h1>Democratic Elections and Voting Theory</h1>
                        <h2>
                            How Voting Systems Fail
                            <br />
                            And How We Can Improve Them
                        </h2>
                    </div>
                </Fade>
                <Citation>
                    <span>
                        Photo by Element5 Digital from Pexels
                    </span>
                </Citation>
            </div>
        </div>
    );
}

export default WelcomeScreen;