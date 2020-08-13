import React from 'react';
import PageSection from './PageSection';
import { ReactComponent as CompleteTournament } from './img/complete-tournament.svg';
import { ReactComponent as ParadoxicalTournament } from './img/paradoxical-tournament.svg';
import {FootnoteGenerator} from './FootnoteGenerator';

const RankingsAndTournamentsScreen = React.forwardRef((props, ref) => {
    return (
        <PageSection className="text-left">
            <h1>Complete Preferences, Complete Tournaments, <br className="d-md-none d-sm-none d-lg-inline" /> Incomplete Answers</h1>

            <div className="row d-flex align-items-center">
                <div className="col-md-7 col-12">
                    <p>
                        With the preferences above, we can finally complete our tournament.
                        In addition to the open question regarding <span className="text-primary">Calista</span> and <span className="text-primary">Rosie</span>, our ballots provide definitive information about how <span className="text-secondary">Bennie</span> fares against each <span className="text-primary">Red</span> party candidate.
                        This information lets us move beyond speculation and back into the realm of certainty.
                        <span className="text-primary"> Calista</span>, based on these preferences, would have beaten any candidate 1-on-1.
                        This makes her our Condorcet Winner, a strong reason for her to win the election.
                        And while the result may be worse for <span className="text-primary">Bennie</span>, the result better captures the people's preferences.
                    </p>
                    <p>
                        But will a tournament always produce a Condorcet Winner?
                    </p>
                    <p>
                        Sadly, no.
                    </p>
                </div>
                <figure className="col-md-5 col-12 d-flex flex-column align-items-center">
                    <CompleteTournament />
                    <figcaption className="text-center">Our Complete Tournament Graph<br />Shows Calista Is The Condorcet Winner</figcaption>
                </figure>
            </div>
            <p>
                Tournaments can be <b>'k-paradoxical'</b>, where 'k' is some integer number.
                <FootnoteGenerator
                    desc="More about k-paradoxes can be found below."
                    link="https://en.wikipedia.org/wiki/Tournament_(graph_theory)#Paradoxical_tournaments"
                    ref={ref} setFootnote={props.setFootnote}
                />
                In a 1-paradoxical tournament, every contestant in the tournament loses to some other contestant.
                In a 2-paradoxical tournament, every set of two contestants has some other contestant they both lose to.
                K-paradoxical tournaments are those in which, for every set of k-contestants, there is some other contestant that beats every member of the set.
                In the case of a 1-paradoxical tournament, there is no Condorcet Winner.
                While the term '1-paradoxical' is common in Graph Theory contexts, the term for this phenomenon is a voting theory context is the <b>Condorcet Paradox</b>.
            </p>
            <p>
                How could a paradox like this play out in Examplandia?
                Think back to the scenario we discussed earlier, where <span className="text-secondary">Bennie</span> beats <span className="text-primary">Calista</span>.
                If <span className="text-secondary">Bennie</span> began shifting her platform to be more like <span className="text-primary">Rosie's</span>, she might persuade enough of <span className="text-primary">Rosie's</span> voters to rank B above C.
                If enough votes shifted from preference 'R > C > B' to 'R > B > C', <span className="text-secondary">Bennie</span> actually beats <span className="text-primary">Calista</span> 1-on-1.
            </p>
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <table className="table table-striped">
                        <caption>A Preferential Election Where Bennie Beats Calista 1-on-1</caption>
                        <thead className="thead-dark">
                            <tr>
                                <th>Ordering</th>
                                <th>Ballots</th>
                                <th>Bennie vs. Calista</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">C > R > B</th>
                                <td>27</td>
                                <td>Calista - 27</td>
                            </tr>
                            <tr>
                                <th scope="row">C > B > R</th>
                                <td>7</td>
                                <td>Calista - 34 </td>
                            </tr>
                            <tr>
                                <th scope="row">R > C > B</th>
                                <td>11</td>
                                <td>Calista - 45</td>
                            </tr>
                            <tr className="font-weight-bold">
                                <th scope="row">R > B > C</th>
                                <td>20</td>
                                <td>Bennie - 20</td>
                            </tr>
                            <tr className="font-weight-bold">
                                <th scope="row">B > R > C</th>
                                <td>15</td>
                                <td>Bennie - 35</td>
                            </tr>
                            <tr className="font-weight-bold">
                                <th scope="row">B > C > R</th>
                                <td>20</td>
                                <td>Bennie - 55</td>
                            </tr>
                            <tr className="table-info font-weight-bold">
                                <th scope="row">Winner</th>
                                <td></td>
                                <td>Bennie - 55</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <figure className="col-md-6 d-flex flex-column align-items-center">
                    <ParadoxicalTournament />
                    <figcaption>Bennie's New Strategy Produces <br /> A Tournament With No Condorcet Winner</figcaption>
                </figure>
            </div>
            <p>
                The Condorcet Paradox has two important, if obvious, implications.
            </p>
            <p>
                1: It's too restrictive to say that elections <i>must</i> select a Condorcet Winner, because sometimes there is none.
                We want elections that will select such a winner <i>if one exists</i>.
                There's a property related to the Condorcet Winner in a graph, called the <b>Smith Set</b>.
                <FootnoteGenerator
                    desc="Named after mathematician John H Smith, detailed information on Smith Sets and Smith Efficiency can be found below."
                    link="https://en.wikipedia.org/wiki/Smith_set"
                    ref={ref} setFootnote={props.setFootnote}
                />
                The Smith Set is composed of the candidates that all beat one another, and is always well-defined for a tournament.
                When there's a Condorcet Winner, the Smith Set only has one member;
                in the paradoxical tournament above, the Smith Set contains all our candidates.
                And in examples where some candidates only get small fractions of the vote, they would likely be excluded from the Smith Set.
                Voting systems that always select members of the Smith Set are <b>Smith Efficient</b>.
                But we cannot expect voting systems to find a Condorcet winner if there is none.
            </p>
            <p>
                2: Just looking for a Condorcet Winner is not enough.
                A voting system needs a more in-depth strategy than just a) build a tournament and b) find a candidate who always wins their 1-on-1 matches.
                As we've discovered, sometimes there is no Condorcet Winner.
                There are many different approaches to using these rankings to select a candidate, each with different tradeoffs.
            </p>
        </PageSection>
    );
});

export default RankingsAndTournamentsScreen;
