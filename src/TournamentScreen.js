import React from 'react';
import PageSection from './PageSection';
import { ReactComponent as IncompleteTournament } from './tournaments/incomplete-tournament.svg';

function TournamentScreen() {
    return (
        <PageSection className="text-left">
            <h1>Tournaments: Modelling Head-to-Head Outcomes</h1>

            <p>
                As is often the case in math, we want to talk precisely about something we usually discuss informally.
                'Tournament' here, for example, is a formal term that comes from Graph Theory, representing all the outcomes of 1-on-1 matches between a some set of competitors.
                Finding the <b>Condorcet winner</b> of a tournament is simple - just find the competitor that beats everyone they face.
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
                        In the case of our graph, we are modelling 1-on-1 election outcomes.
                        Our entities are presidential candidates, and the relationship we're interested in is "Who beats the other, 1-on-1?".
                        To capture this relationship, we'll use a special kind of edge called a 'directed edge'.
                        Directed edges have a 'tail' (the place they come from) and a 'head' (the place they're pointing).
                        But what being a 'tail' or a 'head' means is dependent on the model's interpretation.
                    </p>

                    <p>
                        In our model we'll say a 'head' node is the loser of the 1-on-1 election, and a 'tail' node is the winner.
                        That means a directed edge from <span className="text-primary">Calista</span> to <span className="text-secondary">Bennie</span> means that, in a 1-on-1 election, <span className="text-primary">Calista</span> (the tail) would beat out <span className="text-secondary">Bennie</span> (the head).
                        Based on our election outcomes above and the model we've constructed, here's what our graph might look like.
                    </p>

                    <p>
                        One last thing about 'tournaments'.
                        They have to express <i>all</i> 1-on-1 outcomes.
                        And this criteria here is where FPTP elections as a system truly fall short.
                    </p>
                </div>
                <figure className="col-md-5 d-flex flex-column align-items-center">
                    <IncompleteTournament />
                    <figcaption className="text-center">Our Initial Graph<br />An Incomplete Tournament</figcaption>
                </figure>
            </div>

            <p>
                At present, we cannot know which way Blue party voters would swing.
                In fact, the outcomes we've modelled so far are just guesses based on incomplete information.
                What if, despite party lines,
                    <span className="text-primary"> Rosie</span> voters resonated so much with
                    <span className="text-secondary"> Bennie Blue's</span> campaign so much that they would betray their party allegiance to vote
                    <span className="text-secondary"> Bennie</span> against
                    <span className="text-primary"> Calista</span>?
                To build our tournament, we need more information than our FPTP ballots provide.
                We need to change our voting system all together.
                Specifically, we need to know voter preferences.
            </p >
        </PageSection >
    );
}

export default TournamentScreen