import React from 'react';
import PageSection from './PageSection';

function RankedVotingScreen() {
    return (
        <PageSection className="text-left">
            <h1>Ranked Voting: Moving Beyond One Choice</h1>

            <p>
                Ranked Voting is precisely what it sounds like: a voting system that lets voters rank candidates in terms of preference.
                This additional information is then used to narrow down candidates in the event that none capture a unanimous majority.
                In addition to helping us with building tournaments, ranked ballots can help alleviate the Spoiler Effect and Tactical Voting trend we observed earlier.
            </p>
            <div className="row d-flex align-items-md-center">
                <div className="col-md-6">
                    <p>
                        In the context of building our 'tournament', these preferences determine who would win in 1-on-1 elections, providing the information we need to direct our edges.
                        Let's return to Examplandia to see how a Ranked Voting ballot could be used.
                    </p>

                    <p>
                        It's four years later, and the same three candidates - <span className="text-primary">Crimson Calista,</span> <span className="text-primary"> Ruby Rosie, </span> and <span className="text-secondary"> Blue Bennie </span> - are in the running again for president.
                        This time, however, the <span className="text-primary">Red Party's</span> legislators rallied to pass a Ranked Voting system.
                        With three candidates, there are six unique ranking that voters could express.
                        This means that every vote will match one of these orderings.
                        Provided are the results of this year's election.
                    </p>

                    <p>
                        With this additional information, we can say definitively who would win in each 1-on-1 election.
                        Consider <span className="text-primary">Calista</span> v. <span className="text-primary">Rosie</span>.
                        For each row in the table above, <span className="text-primary">Calista</span> gets the corresponding votes if C comes before R.
                        Similarly, <span className="text-primary">Rosie</span> gets that row's votes if R comes before C.
                        We can compare the total votes each candidate received across all preference combinations to determine our 1-on-1.
                        In the table below, we do this for all 1-on-1's matchups.
                    </p>
                </div>
                <div className="col-md-6">
                    <table className="table table-striped">
                        <caption>The Results of Examplandia's Election Using Ranked Voting </caption>
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
        </PageSection>
    );
}

export default RankedVotingScreen;
