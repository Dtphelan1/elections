import React from 'react';
import PageSection from './PageSection';

function BlankPage() {
    return (
        <PageSection className="text-left">

            <h1>
                TODO: Remaining Sections
            </h1>
            <ul>
                <li>Finish the section on preferential ballots, linking back to tournaments and showing how the tournament will find us the head-to-head winner if there is one</li>
                <li>Introduce issues with paradoxes and the fact that there isn't always a winner in this space</li>
                <li>Broach the topic of Smith sets, Smith Effienceny, and discuss the trad</li>
                <li>Possibly: Introduce Smith Sets, and Smith Efficent systems; talk about tradeoffs between ideal criteria and practical criteria; introduce IRV as a middleground better than FPTP</li>
            </ul>
            <h1>
                TODO: Concluding Section
            </h1>
            <p>
                We've investigated the motivations behind elections and different ways of approaching voting theory.
                We've gone over the FPTP system used in the American Presidential election.
                We've demonstrated how FPTP systems can contribute to Tactical Voting, the Emergence of a Two Party System, and that FPTP does not guarantee the Condorcet Criterion.
                We've shown how alternative voting systems can improve on some of these voting criteria.
                The systems that undergird our electoral system have emergent effects on the outcomes we should expect from those systems.
                The systems that exist now should not be taken for granted.
                Check to see if there are any movements near you to propose alternative voting systems.
                If you're in MA, research Ranked Choice/Instant Runoff voting and
                Ranked Choice Voting is on the upcoming MA state ballot.
                These systems are of our own design.
                They should be questioned and we should use rigor and evidence to drive those inquiry.
                And when that inquiry leads you to unsatisfying conclusions, ones that leave you wanting more, exercise our civic duties and demand more from our elected officials.
            </p>

        </PageSection >
    )
}

export default BlankPage;