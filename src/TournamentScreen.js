import React from 'react';
import PageSection from './PageSection';
import { ReactComponent as IncompleteTournament } from './tournaments/incomplete-tournament.svg';

function TournamentScreen() {
    return (
        <PageSection className="text-left">
            <h1>Tournaments: Modelling Head-to-Head Outcomes</h1>

            <p>
                As is often the case in math, we want to talk precisely about something we usually talk about informally.
                'Tournaments', for example, are a structure that comes from Graph Theory, and they represent all the outcomes of 1-on-1 matches between a bunch of competitors.
                While they share similarities with typical tournaments, they have a few formal properties that we are interested in.
                But order to understand 'tournaments', we need to first make sure we're fluent in what a 'graph' is.
            </p>

            <p>
                'Graphs' are tools for representing a bunch of entities and relationships between pairs of entities them.
                Every 'graph' is made up of 'nodes' and 'edges'.
                Each 'node' corresponds to an entity, and a relationship between two nodes is represented by an 'edge'.
            </p>

            <div className="row d-flex align-items-center">
                <div className="col-md-7">
                    <p>
                        In the case of our graph, our entities are presidential candidates, and the relationship we're interested in is "Who beats the other, 1-on-1?".
                        To capture this relationship properly, we'll use a special kind of Edge called a "directed edge"
                        Directed edges have a 'tail' (the place they come from) and a 'head' (the place they're pointing).
                        But what it means to be a 'tail' or a 'head' depends entirely on the model.
                    </p>

                    <p>
                        In our model, we'll interpret a 'head' node to be the loser in a 1-on-1 election, and a 'tail' node to be the winner.
                        So a directed edge from Calista to Bennie means that, in a 1-on-1 election, Calista (the tail) would beat out Bennie (the head).
                        Based on our election outcomes, here's what we might expect our Graph to look like.
                    </p>

                    <p>
                        For a 'tournament' in the land of Graph Theory to be complete, it has to express <i>all</i> 1-on-1 outcomes.
                        And this is where our current FPTP election structure falls short.
                    </p>
                </div>
                <figure className="col-md-5 d-flex flex-column align-items-center">
                    <IncompleteTournament />
                    <figcaption className="text-center">Our Initial Graph<br />An Incomplete Tournament</figcaption>
                </figure>
            </div>

            <p>
                At present, we don't have a principled way of knowing which way Blue party voters would swing.
                In fact, the outcomes we've modelled so far are based on incomplete information too.
                What if, despite party loyalty, Bennie Blue's campaign resonated Rosie's core base enough for them to cross the line?
                We need more information than our FPTP ballots provide.
                To complete our 'tournament', we need another voting system all together.
                Specifically, we need ballots that capture voter preferences.
            </p>
        </PageSection>
    );
}

export default TournamentScreen