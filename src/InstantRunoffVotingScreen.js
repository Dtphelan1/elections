import React from 'react';
import PageSection from './PageSection';

function PreferentialVotingScreen() {
    return (
        <PageSection className="text-left">
            <h1>Preferential Voting: Ballots That Capture Preferences</h1>

            <div className="row d-flex align-items-md-center align-items-lg-start">
                <div className="col-md-6">
                    <p>
                        Preferential voting is precisely what it sounds like: a system that lets voters rank candidates in terms of overall preference.
                        This additional information is then used to narrow down candidates in the event that none captures a unanimous majority.
                        In the context of our 'tournament' graph, these preferences can be used to determine who would win in 1-on-1 elections, providing us the information we need to finish drawing our edges.
                        Let's return to Examplandia to see how these kinds of ballots could be used.
                    </p>

                    <p>
                        It's four years later, and the same three candidates - <span className="text-primary"> Crimson Calista,</span> <span className="text-primary"> Ruby Rosie, </span> and <span className="text-secondary"> Blue Bennie </span> - are in the running for president again.
                        This time, however, the Red Party's legislators rallied to pass some a more representative voting system.
                        Since there are three candidates, there are six unique orderings the candidates can take on.
                        Here are the results for each of those orderings.
                    </p>
                </div>
                <div className="col-md-6">
                    <table className="table table-striped">
                        <caption>The Results of our Preferential Election</caption>
                        <thead className="thead-dark">
                            <tr>
                                <th>Ordering</th>
                                <th>Ballots #</th>
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
                        </tbody>
                    </table>

                </div>
            </div>

            <p>
                Now that we have this additional information, we can say definitively who would win in each 1-on-1 election.
                Let's consider Calista v. Rosie.
                For each row in the table above, Calista gets the corresponding votes if C comes before R.
                Similarly, Rosie gets that row's votes if R comes before C.
            </p>
            <table className="table table-striped">
                <caption>Calista v. Rosie, Based on Captured Preferences</caption>
                <thead className="thead-dark">
                    <tr>
                        <th>Ordering</th>
                        <th>Ballots #</th>
                        <th>Calista or Rosie?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="font-weight-bold">
                        <th scope="row">C > R > B</th>
                        <td>27</td>
                        <td>Calista</td>
                    </tr>
                    <tr className="font-weight-bold">
                        <th scope="row">C > B > R</th>
                        <td>7</td>
                        <td>Calista</td>
                    </tr>
                    <tr>
                        <th scope="row">R > C > B</th>
                        <td>26</td>
                        <td>Rosie</td>
                    </tr>
                    <tr>
                        <th scope="row">R > B > C</th>
                        <td>5</td>
                        <td>Rosie</td>
                    </tr>
                    <tr>
                        <th scope="row">B > R > C</th>
                        <td>15</td>
                        <td>Rosie</td>
                    </tr>
                    <tr className="font-weight-bold">
                        <th scope="row">B > C > R</th>
                        <td>20</td>
                        <td>Calista</td>
                    </tr>
                    <tr className="table-info font-weight-bold">
                        <th scope="row">Overall Winner</th>
                        <td>54</td>
                        <td>Calista</td>
                    </tr>
                </tbody>
            </table>

        </PageSection>
    );
}

export default PreferentialVotingScreen;