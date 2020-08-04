import React from 'react';
import Fade from 'react-reveal/Fade';

function PageSection(props) {
    return (
        <div className={`page-section ${props.className}`}>
            <div className="page-content mt-5 mb-5 container">
                <Fade>
                    {props.children}
                </Fade>
            </div>
        </div>
    );
}

export default PageSection;