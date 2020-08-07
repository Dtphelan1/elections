import React from 'react';
// get our fontawesome imports
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './scss/Footer.scss';

function Footer() {
    return (
        <footer id="footer">
            <div className="container d-flex justify-content-center">
                <span>
                    Created by Dylan Phelan
                    | <a href='https://github.com/Dtphelan1?tab=repositories'><FontAwesomeIcon icon={faGithub} /> @dtphelan1 </a>
                    | <a href='https://twitter.com/Dtphelan1'><FontAwesomeIcon icon={faTwitter} /> @dtphelan1 </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;