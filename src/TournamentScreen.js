import React from 'react';
import PageSection from './PageSection';
import { ReactComponent as IncompleteTournament } from './tournaments/incomplete-tournament.svg';

function TournamentScreen() {
    return (
        <PageSection className="text-left">
            <h1>Tournaments: Modelling Head-to-Head Outcomes</h1>
            <p>
                Tournaments are a structure that comes from Graph Theory, and they represent all the outcomes of 1-on-1 matches between a bunch of competitors.
                Graph Theory is the same area of math used to model social networks, GPS directions, and your favorite competitive sports brackets.
                In order to understand tournaments, we need to first make sure we're fluent in what Graphs are.
                A Graph, generally speaking, is just a bunch of entities and some relationships between them.
                Each Node in a Graph represents an entity, and relationships are represented by Edges between Nodes.
            </p>

            <div className="row">
                <div className="col-md-7 col-12">
                    <p>
                        In this case, our entities are presidential candidates, and the relationship we're interested in is "Who beats the other, 1-on-1?".
                        To capture this relationship properly, we'll use a special kind of Edge called a "Directed Edge"
                        Directed Edges have a 'tail', the place they come from, and a 'head', the place they're pointing.
                    </p>
                    <p>
                        In our model, a directed edge from our Calista Node to our Bennie node means that, in a 1-on-1 election, Calista (the tail) would beat Bennie (the head).
                        Based on our election outcomes, here's what our Graph looks like so far.
                    </p>
                </div>
                <div className="col-md-5 col-12 d-flex flex-column align-items-center">
                    <IncompleteTournament />
                    <caption>Our Initial Graph</caption>
                </div>
            </div>
            <h1>
                TODO: In this section
            </h1>
            <p>
                Discuss how this is an incomplete tournament.
                Tournaments necessarily have outcomes between every pair of contestants.
                Our Condorcet Criteria wants a candidate who beats everyone in 1-on-1 pairings.
                Once we define the edge between our two candidates, we have a tournament.
                But how do we structure our election so that we can determine that answer from the ballots??
            </p>
            <h1>
                TODO: Remaining Section
            </h1>
            <ul>
                <li>Introduce a non-FPTP Voting system; one of the condorcet methods likely</li>
                <ul>
                    <li>Demonstrate how this system guarantee the selection of a condorcet winner</li>
                    <li>Return of the Tournaments - show that there isn't always a condorcet winner and that you can have a Condorcet paradox</li>
                    <li>Possibly: Introduce Smith Sets, and Smith Efficent systems; talk about tradeoffs between ideal criteria and practical criteria; introduce IRV as a middleground better than FPTP</li>
                </ul>
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

        </PageSection>
    );
}

export default TournamentScreen