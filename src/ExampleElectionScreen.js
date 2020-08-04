import React from 'react';
import PageSection from './PageSection'

function ExampleElectionScreen() {
    return (
        <PageSection className="text-left">
            <h1>First: A "First Past The Post" Example</h1>
            <p>
                Examplandia is a nation with two relevant political parties – The Reds and The Blues – and three presidential nominees:
                <span className="text-primary"> Crimson Calista,</span>
                <span className="text-primary"> Ruby Rosie, </span>
                and
                <span className="text-secondary"> Blue Bennie. </span>
                The Red Party is split almost down the middle between Calista and Rosie, but Bennie has the Blue Party cornered.
            </p>
            <p>
                So even though the Red party makes up 65% of Examplandia's population, when Election Day arrives Bennie emerges victorious – with only 35% of the vote.
                That's because Examplandia uses a "First Past The Post" (FPTP) voting system, the same used in the US presidential election.
                Simply put, FPTP elects the candidate with the highest number of votes is elected - even if they don't have a majority.
                Here's how the results broke down for this election.
            </p>
            <div>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Candidate</th>
                            <th>Percent Vote</th>
                            <th>Votes For Their Party</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Crimson Calista</th>
                            <td>34%</td>
                            <td>65%</td>
                        </tr>
                        <tr>
                            <th scope="row">Ruby Rosie</th>
                            <td>31%</td>
                            <td>65%</td>
                        </tr>
                        <tr className="table-info table-bold">
                            <th scope="row">Blue Bennie - Winner</th>
                            <td>35%</td>
                            <td>35%</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    If the problem above seems contrived, consider the Singapore presidential election of 2011 in which the victor only secured 35.20% of votes.
                    The details of that election differ in a few important ways, but the results illustrate the mathematical possibility of winning with about a third of the vote.
                </p>
                <p>
                    Why does this strike us as unfair?
                    One reason is that the results encourage people to vote for who they think will win, not who they think would be best.
                    This phenomenon, called "Tactical Voting", can lead to the emergence of two party systems that are hard to shake.
                    Even if one party isn't providing exactly what a person wants, disdain for the alternative can be reason enough to compromise and vote for the most likely candidate.
                </p>
                <p>
                    Another reason this seems unfair is that in a <i>head-to-head</i> election between Crimson Calista and Blue Bennie we can be confident that Calista would have one.
                    The same goes for Ruby Rosie.
                    What we're getting at is formally called <b>"The Condorcet Criterion"</b>; we want someone who would win in every head-to-head election.
                    To model these head-to-head elections, we'll use something called a Tournament.
                </p>
            </div>
        </PageSection>
    );
}

export default ExampleElectionScreen