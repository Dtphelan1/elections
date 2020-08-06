import React from 'react';
import PageSection from './PageSection';
import { ReactComponent as CompleteTournament } from './tournaments/complete-tournament.svg';
import { ReactComponent as ParadoxicalTournament } from './tournaments/paradoxical-tournament.svg';

function PreferentialVotingScreen() {
    return (
        <PageSection className="text-left">
            <h1>Preferential Voting: Ballots That Capture Preferences</h1>

            <div className="row d-flex align-items-md-center">
                <div className="col-md-6">
                    <p>
                        Preferential voting is precisely what it sounds like: a system that lets voters rank candidates in terms of overall preference.
                        This additional information is then used to narrow down candidates in the event that none captures a unanimous majority.
                    </p>

                    <p>
                        In the context of our 'tournament' graph, these preferences can be used to determine who would win in 1-on-1 elections, providing us the information we need to finish drawing our edges.
                        Let's return to Examplandia to see how these kinds of ballots could be used.
                    </p>

                    <p>
                        It's four years later, and the same three candidates - <span className="text-primary"> Crimson Calista,</span> <span className="text-primary"> Ruby Rosie, </span> and <span className="text-secondary"> Blue Bennie </span> - are in the running for president again.
                        This time, however, the Red Party's legislators rallied to pass some a more representative voting system.
                        Since there are three candidates, there are six unique orderings the candidates can take on.
                        Here are the results for each of those orderings.
                    </p>

                    <p>
                        With this additional information, we can say definitively who would win in each 1-on-1 election.
                        Consider Calista v. Rosie.
                        For each row in the table above, Calista gets the corresponding votes if C comes before R.
                        Similarly, Rosie gets that row's votes if R comes before C.
                        Finally, we can compare the total votes each candidate received across all preference combinations.
                        In the table below, we do this for all 1-on-1's matchups.
                    </p>
                </div>
                <div className="col-md-6">
                    <table className="table table-striped">
                        <caption>The Results of our Preferential Election</caption>
                        <thead className="thead-dark">
                            <tr>
                                <th>Ordering</th>
                                <th>Ballots</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">C > R > B</th>
                                <td>27</td>
                            </tr>
                            <tr>
                                <th scope="row">C > B > R</th>
                                <td>7</td>
                            </tr>
                            <tr>
                                <th scope="row">R > C > B</th>
                                <td>26</td>
                            </tr>
                            <tr>
                                <th scope="row">R > B > C</th>
                                <td>5</td>
                            </tr>
                            <tr>
                                <th scope="row">B > R > C</th>
                                <td>15</td>
                            </tr>
                            <tr>
                                <th scope="row">B > C > R</th>
                                <td>20</td>
                            </tr>
                            <tr className="table-info">
                                <th scope="row">Overall</th>
                                <td>100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <table className="table table-striped table-responsive-sm">
                <caption>All 1-on-1 Election Results, Based on Preferences</caption>
                <thead className="thead-dark">
                    <tr>
                        <th>Ordering</th>
                        <th>Ballots</th>
                        <th>Calista or Rosie?</th>
                        <th>Rosie or Bennie?</th>
                        <th>Bennie or Calista?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">C > R > B</th>
                        <td>27</td>
                        <td>Calista - 27</td>
                        <td>Rosie - 27 </td>
                        <td>Calista - 27 </td>
                    </tr>
                    <tr>
                        <th scope="row">C > B > R</th>
                        <td>7</td>
                        <td>Calista - 34 </td>
                        <td>Bennie - 7 </td>
                        <td>Calista - 34 </td>
                    </tr>
                    <tr>
                        <th scope="row">R > C > B</th>
                        <td>26</td>
                        <td>Rosie - 26 </td>
                        <td>Rosie - 53 </td>
                        <td>Calista - 60 </td>
                    </tr>
                    <tr>
                        <th scope="row">R > B > C</th>
                        <td>5</td>
                        <td>Rosie - 31 </td>
                        <td>Rosie - 58 </td>
                        <td>Bennie - 5 </td>
                    </tr>
                    <tr>
                        <th scope="row">B > R > C</th>
                        <td>15</td>
                        <td>Rosie - 46 </td>
                        <td>Bennie - 22 </td>
                        <td>Bennie - 20 </td>
                    </tr>
                    <tr>
                        <th scope="row">B > C > R</th>
                        <td>20</td>
                        <td>Calista - 54 </td>
                        <td>Bennie - 42 </td>
                        <td>Bennie - 40 </td>
                    </tr>
                    <tr className="table-info font-weight-bold">
                        <th scope="row">Overall Winner</th>
                        <td></td>
                        <td>Calista - 54</td>
                        <td>Rosie - 58 </td>
                        <td>Calista - 60 </td>
                    </tr>
                </tbody>
            </table>

            <div className="row d-flex align-items-center">
                <div className="col-md-7 col-12">
                    <p>
                        With the table above, we can finally complete our 'tournament'.
                        In addition to the open question regarding Calista and Rosie, our ballots provide definitive information about how Bennie fares against each Red party candidate.
                        This information lets us move beyond speculation and back into the realm of certainty.
                        Calista, in this election, would have beaten any candidate one on one, making her our <b>Condorcet winner</b>.
                        That's a strong reason for her to be elected.
                        And while the result may be worse for Bennie, the result better captures the people's preferences.
                    </p>
                    <p>
                        One might wonder, however, will a tournament always highlight a Condorcet winner?
                        Sadly, no.
                    </p>
                    <p>
                        'Tournaments' can be <b>'k-paradoxical'</b>, where 'k' is some integer number.
                        In a 1-paradoxical tournament, every contestant in the tournament loses some other contestant.
                        In a 2-paradoxical tournament, every set of two contestants has some other contestant they both lose to.
                        k-paradoxical tournaments are those in which, for every set of k-contestants, there is some other contestant that beats every set
                        In the case of a 1-paradoxical tournament, there is no Condorcet winner.
                        While '1-paradoxical' is common in Graph Theory contexts, the term for this in the context of elections is a <b>Condorcet Paradox</b>
                    </p>
                </div>
                <figure className="col-md-5 col-12 d-flex flex-column align-items-center">
                    <CompleteTournament />
                    <figcaption className="text-center">Our Complete Tournament Graph<br />Shows Calista Is The Condorcet Winner</figcaption>
                </figure>
            </div>

            <p>
                How could this play out in Examplandia?
                If Bennie began shifting her platform to be more like Calista's, she might be able to persuade enough of Calista's voters to rank B above R.
                If enough votes shifted from preference 'C > R > B' to 'C > B > R', Bennie could actually beat Rosie 1-on-1.
            </p>
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <table className="table table-striped">
                        <caption>A Preferential Election Where Bennie Beats Rosie 1-on-1</caption>
                        <thead className="thead-dark">
                            <tr>
                                <th>Ordering</th>
                                <th>Ballots</th>
                                <th>Bennie vs. Rosie</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">C > R > B</th>
                                <td>10</td>
                                <td>Rosie - 10</td>
                            </tr>
                            <tr className="font-weight-bold">
                                <th scope="row">C > B > R</th>
                                <td>24 </td>
                                <td>Bennie - 24 </td>
                            </tr>
                            <tr>
                                <th scope="row">R > C > B</th>
                                <td>26</td>
                                <td>Rosie - 36</td>
                            </tr>
                            <tr>
                                <th scope="row">R > B > C</th>
                                <td>5</td>
                                <td>Rosie - 41</td>
                            </tr>
                            <tr className="font-weight-bold">
                                <th scope="row">B > R > C</th>
                                <td>7</td>
                                <td>Bennie - 31</td>
                            </tr>
                            <tr className="font-weight-bold">
                                <th scope="row">B > C > R</th>
                                <td>28</td>
                                <td>Bennie - 59</td>
                            </tr>
                            <tr className="table-info font-weight-bold">
                                <th scope="row">Winner</th>
                                <td></td>
                                <td>Bennie - 59</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <figure>
                        <ParadoxicalTournament />
                        <figcaption>The Resulting Tournament <br /> Has No Condorcet Winner</figcaption>
                    </figure>
                </div>
            </div>

        </PageSection>
    );
}

export default PreferentialVotingScreen;
