import React from 'react';
import PageSection from './PageSection'

function FirstPastThePostScreen() {
    return (
        <PageSection className="text-left">
            <h1>First: A "First Past The Post" Example</h1>
            <p>
                Examplandia is a nation with two relevant political parties – The Reds and The Blues – and three presidential nominees:
                <span className="text-primary"> Crimson Calista,</span>
                <span className="text-primary"> Ruby Rosie, </span>
                and
                <span className="text-secondary"> Blue Bennie. </span>
                The Red party is split almost down the middle between Calista and Rosie, but Bennie has the Blue party cornered.
            </p>
            <p>
                So even though the Red party makes up 65% of Examplandia's population, when Election Day arrives Bennie emerges victorious – with only 35% of the vote.
                That's because Examplandia uses a <b>"First Past The Post"</b> (FPTP) voting system, the same used in the US presidential election.
                Simply put, FPTP elects the candidate with the highest number of votes is elected - even if they don't have a majority.
                Here's how the results broke down for this election.
            </p>
            <div>
                <table className="table table-striped">
                    <caption>Bennie Wins With 35% And That Feels Unfair</caption>
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
                    Most people looking at the results of this election feel that something wrong has happened, that the system has failed.
                </p>
                <p>
                    But <i>why</i> does this strike us as unfair?
                    By explicitly characterizing what about this outcome is unsettling, not only can we devise alternative systems;
                    we can test those systems, rigorously and mathematically, to determine how they overcome the failures we see here.
                </p>
                <p>
                    The first reason this seems unfair is the simple fact that there are more Red party people than Blue party people, but Blue still one.
                    Since Red party members were so closely split on two candidates, preventing their overall majority from being heard as a collective.
                    The term for vote-splitting across ideological or party lines is called <b>"The Spoiler Effect"</b>, and can have systemic issues that go beyond one election.
                </p>
                <p>
                    Another reason, closely related, is that these results encourage people to vote for who they think will win, not who they prefer.
                    This phenomenon, called <b>"Tactical Voting",</b> contributes to two party systems and "safe" voting that can be hard to shake.
                    If after seeing these results we asked Examplandians how they had wished they had voted, it's likely some Rosie voters might regret not casting their ballot for Calista, the Red frontrunner.
                    Even if one candidate isn't providing exactly what a person wants, disdain for alternative parties or ideologies can be reason enough to compromise and vote for the most likely candidate.
                    The same mindset makes it very hard for new parties to gain traction after two parties establish themselves.
                </p>
                <p>
                    The last issues we'll touch on with this outcome is slightly more involved.
                    We can observe that, in a <i>head-to-head</i> election between Crimson Calista and Blue Bennie, we have reason to believe Calista would have one.
                    The same goes for Ruby Rosie.
                    What this last reason is teasing out is <b>"The Condorcet Criterion"</b>; we want someone who would win in every head-to-head election.
                    To model these head-to-head elections, we'll use a concept referred to as a 'tournament'.
                </p>
            </div>
        </PageSection>
    );
}

export default FirstPastThePostScreen