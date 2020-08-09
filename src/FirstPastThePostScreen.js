import React from 'react';
import PageSection from './PageSection'

const FirstPastThePostScreen = React.forwardRef((props, ref) => {
    return (
        <PageSection className="text-left">
            <h1>First: A "First Past The Post" Example</h1>
            <p>
                Examplandia is a nation with two relevant political parties – The <span className="text-primary">Red Party</span> and The <span className="text-secondary">Blue Party</span> – and three presidential nominees:
                <span className="text-primary"> Crimson Calista,</span>
                <span className="text-primary"> Ruby Rosie, </span>
                and
                <span className="text-secondary"> Blue Bennie. </span>
                Nearly 2/3rds of Examplandians are <span className="text-primary">Red Party</span> members, with the remaining 1/3 falling under the <span className="text-secondary">Blue Party</span>.
                However this election there are two <span className="text-primary">Red Party</span> candidates running, voters split down the middle between them.
            </p>
            <p>
                When Election Day arrives <span className="text-secondary">Bennie</span> emerges victorious – and with only 35% of the vote.
                That's because Examplandia uses a <b>"First Past The Post"</b> (FPTP) voting system, the same used in the US presidential election.
                Simply put, FPTP elects the candidate with the highest number of votes, even if they don't have a majority.
                Here's how the results broke down in <span className="text-secondary">Bennie's</span> favor.
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
                    If the problem above seems contrived, consider the Singapore presidential election of 2011:
                    Only 35.20% of voters actually voted for the winning candidate.
                    The details of that election differ in some important ways, but this real-world result shows candidates can and do win FPTP elections with about one third of votes.
                    While these results were a boon for <span className="text-secondary">Bennie</span> and the <span className="text-secondary">Blue Party</span>, most citizens felt robbed.
                    Many looked at these results and said, "This isn't fair. Something wrong has happened, the system has failed."
                </p>
                <p>
                    But to fix a failing system, we need to understand <i>how and why it fails</i>.
                    Characterizing The How and The Why does more than just help us improve our current system;
                    it enables us to devise alternative systems, comparing our alternatives rigorously and mathematically, and to demonstrate, with certainty, how these new systems overcome the failures of old ones.
                </p>
                <p>
                    So how exactly were these FPTP election results unfair?
                </p>
                <p>
                    The first reason they seems unfair is that, even though there are more <span className="text-primary">Red Party</span> members than <span className="text-secondary">Blue</span>, <span className="text-primary">Red</span> still lost.
                    Because the former were so closely split on two candidates, their divided majority was outnumbered by a unified <span className="text-secondary">Blue Party</span> minority.
                    The term for vote-splitting across ideological or party lines is called <b>"The Spoiler Effect"</b>, and it leads to systemic issues that go beyond any single election outcome.
                    That's because these results encourage people to vote for who they think will win, not who they actually prefer.
                </p>
                <p>
                    This second phenomenon is called <b>"Tactical Voting"</b>, and it contributes to the stability of two party systems.
                    If, after seeing these results, we asked Examplandians how they had wished they had voted, some <span className="text-primary">Rosie</span> voters would likely regret not casting their ballot for <span className="text-primary">Calista</span>, the <span className="text-primary">Red Party</span> frontrunner.
                    Even if one candidate doesn't provide exactly what a voter wants, disdain for alternative parties or ideologies can be reason enough to compromise on a preferred candidate for a popular one.
                    This mindset can prevent new parties and non-traditional ideologies from gaining traction once two parties establish themselves.
                </p>
                <p>
                    The last issue we'll touch on is slightly more involved.
                    We can observe that, in a <i>1-on-1</i> election between <span className="text-primary">Crimson Calista</span> and <span className="text-secondary">Blue Bennie</span>, we'd expect <span className="text-primary">Calista</span> to win.
                    The same can be said for <span className="text-primary">Ruby Rosie</span>.
                    The general term for what we're getting at is known as <b>"The Condorcet Criterion"</b>;
                    we want the person we elect, we'll call our <b>Condorcet Winner</b>, to have been victorious in every 1-on-1 election.
                    To model these 1-on-1 competitions, we'll use the concept of a 'tournament'.
                </p>
            </div>
        </PageSection>
    );
});

export default FirstPastThePostScreen