import React from 'react';
import PageSection from './PageSection';
import { ReactComponent as IncompleteTournament } from './tournaments/incomplete-tournament.svg';

function TournamentScreen() {
    return (
        <PageSection className="text-left">
            <h1>Tournaments: Modelling 1-on-1 Outcomes</h1>

            <p>
                As is often the case in modelling and mathematics, we want to talk precisely about a term we use colloquially.
                The word 'tournament' here is being used as a formal term, one that comes from Graph Theory.
                It is a graphical representation of all 1-on-1 matches between our set of competitors.
                Finding the Condorcet Winner is simple if you have a 'tournament' - just find the competitor that beats everyone they face.
                While they share similarities with colloquial tournaments, there are some formal properties that we are interested in.
                And to understand 'tournaments', we need to first be fluent in 'graphs'.
            </p>

            <p>
                'Graphs' are tools for modelling some set of entities and relationships between pairs of them.
                Every 'graph' is made up of 'nodes' and 'edges'.
                Each 'node' corresponds to an entity, and a relationship between two nodes is represented by an 'edge'.
            </p>

            <div className="row d-flex align-items-center">
                <div className="col-md-7">
                    <p>
                        In the case of our tournament graph, we are modelling 1-on-1 election outcomes.
                        Our entities are presidential candidates, and the relationship we're interested in is "Who beats the other, 1-on-1?".
                        To capture this relationship, we'll use a special kind of edge called a 'directed edge'.
                        Directed edges have a 'tail' (the place they come from) and a 'head' (the place they're pointing).
                        What the 'tail' and 'head' of an edge means depends on the model's interpretation.
                    </p>

                    <p>
                        In this model, we'll say a head node is the loser of the 1-on-1 election, and a tail node is the winner.
                        That means a directed edge from <span className="text-primary">Calista</span> to <span className="text-secondary">Bennie</span> means that, in a 1-on-1 election, <span className="text-primary">Calista</span> (the tail) would beat out <span className="text-secondary">Bennie</span> (the head).
                        Based on our election outcomes above and the model we've constructed, here's what our graph might look like.
                    </p>

                    <p>
                        One last thing about tournaments.
                        They have to express <i>all</i> 1-on-1 outcomes.
                        This criterion here is where the shortcoming of First Past The Post elections become apparent.
                    </p>
                </div>
                <figure className="col-md-5 d-flex flex-column align-items-center">
                    <IncompleteTournament />
                    <figcaption className="text-center">Our Initial Graph<br />An Incomplete Tournament</figcaption>
                </figure>
            </div>

            <p>
                With the table above, we have no way of knowing how <span className="text-secondary">Blue</span> voters would swing.
                In fact, the outcomes we have modelled so far are just guesses based on incomplete information.
                It is possible that, despite party lines,
                    <span className="text-primary"> Ruby Rosie</span> voters resonate with
                    <span className="text-secondary"> Blue Bennie's</span> campaign enough that would vote
                    <span className="text-secondary"> Bennie</span> instead of
                    <span className="text-primary"> Crimson Calista</span>.
                <b> To build our tournament, we need more information than our FPTP ballots provide. </b>
                We need to a different balloting system all together.
                Specifically, we need one that tells us voter preferences.
            </p >
        </PageSection >
    );
}

export default TournamentScreen