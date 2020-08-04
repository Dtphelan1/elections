import React from 'react';
import Fade from 'react-reveal/Fade';
import Citation from './Citation';

import './scss/WelcomeScreen.scss';

function WelcomeScreen() {
    return (
        <div className="page-section" style={{ background: `url(${process.env.PUBLIC_URL}/img/voting-day.jpg)`, backgroundSize: 'cover', position: "relative", minHeight: "90vh" }}>
            <div className="page-content pt-5 pb-5 container">
                <Fade>
                    <div id="welcome-screen" className="jumbotron">
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