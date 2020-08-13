import React from 'react';
import Fade from 'react-reveal/Fade';
import Citation from './Citation';
import './scss/WelcomeScreen.scss';

const WelcomeScreen = React.forwardRef((props, ref) => {
    return (
        <div id="welcome-page" className="page-section">
            <div className="page-content container">
                <Fade>
                    <div id="welcome-text-jumbo" className="jumbotron">
                        <h1>Democratic Elections In Examplandia</h1>
                        <h2>
                            How Voting Systems Can Fail
                            <br />
                            And How We Can Fix Them
                        </h2>
                    </div>
                </Fade>
                <Citation>
                    Photo by Element5 Digital from Pexels
                </Citation>
            </div>
        </div>
    );
});

export default WelcomeScreen;