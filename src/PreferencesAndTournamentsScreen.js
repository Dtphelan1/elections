import React from 'react';
import PageSection from './PageSection';
import { ReactComponent as CompleteTournament } from './tournaments/complete-tournament.svg';
import { ReactComponent as ParadoxicalTournament } from './tournaments/paradoxical-tournament.svg';

function PreferencesAndTournamentsScreen() {
    return (
        <PageSection className="text-left">
            <h1>Complete Preferences, Complete Tournaments, <br className="d-md-none d-sm-none d-lg-inline" /> Incomplete Answers</h1>


            <div className="row d-flex align-items-center">
                <div className="col-md-7 col-12">
                    <p>
                        With the preferences above, we can finally complete our 'tournament'.
                        In addition to the open question regarding Calista and Rosie, our ballots provide definitive information about how Bennie fares against each Red party candidate.
                        This information lets us move beyond speculation and back into the realm of certainty.
                        Calista, in this election, would have beaten any candidate one on one, making her our Condorcet winner.
                        That's a strong reason for her to be elected.
                        And while the result may be worse for Bennie, the result better captures the people's preferences.
                    </p>
                    <p>
                        But will a tournament always produce a Condorcet winner?
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
                'Tournaments' can be <b>'k-paradoxical'</b>, where 'k' is some integer number.
                In a 1-paradoxical tournament, every contestant in the tournament loses some other contestant.
                In a 2-paradoxical tournament, every set of two contestants has some other contestant they both lose to.
                k-paradoxical tournaments are those in which, for every set of k-contestants, there is some other contestant that beats every set
                In the case of a 1-paradoxical tournament, there is no Condorcet winner.
                While '1-paradoxical' is common in Graph Theory contexts, the term for this in the context of elections is a <b>Condorcet Paradox</b>
            </p>
            <p>
                How would a paradox like this play out in Examplandia?
                Think back to the scenario we discussed earlier, where <span className="text-secondary">Bennie</span> beats <span className="text-primary">Calista</span>.
                If <span className="text-secondary">Bennie</span> began shifting her platform to be more like <span className="text-primary">Rosie's</span>, she might be able to persuade enough of <span className="text-primary">Rosie's</span> voters to rank B above C.
                If enough votes shifted from preference 'R > C > B' to 'R > B > C', <span className="text-secondary">Bennie</span> could actually beat <span className="text-primary">Calista</span> 1-on-1.
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
                    <figcaption>Bennie's New Strategy Results In <br /> A Tournament With No Condorcet Winner</figcaption>
                </figure>
            </div>
            <p>
                The Condorcet Paradox has two important, if obvious, implications.
            </p>
            <p>
                One: It's too restrictive to say that elections <i>must</i> select a Condorcet winner, because sometimes there is none.
                We want elections that will select such a winner <i>if one exists</i>.
                There's a related property of 'tournaments', called "Smith sets", that do always exist.
                The Smith set is composed of the candidates that all beat one another.
                When there's a Condorcet winner, the Smith set only has member;
                in the paradoxical tournament above, the Smith set contains all our candidates.
                In another example, where some candidates only got small fractions of the vote, they would likely be excluded from our Smith set.
                Voting systems that always select members of the Smith set are <b>"Smith Efficient"</b>.
            </p>
            <p>
                Two: Just looking for a Condorcet winner is not enough.
                A voting system needs a more involved strategy than just a) build a tournament and b) find someone who always wins in 1-on-1 matchups, since we know we cannot always find someone like that.
                While there are different approaches to using these preferences to select candidate, they each have different tradeoffs.
            </p>
        </PageSection>
    );
}

export default PreferencesAndTournamentsScreen;
