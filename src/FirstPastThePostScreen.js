import React from 'react';
import PageSection from './PageSection'

function FirstPastThePostScreen() {
    return (
        <PageSection className="text-left">
            <h1>First: A "First Past The Post" Example</h1>
            <p>
                Examplandia is a nation with two relevant political parties – <span className="text-primary">The Reds</span> and <span className="text-secondary">The Blues</span> – and three presidential nominees:
                <span className="text-primary"> Crimson Calista,</span>
                <span className="text-primary"> Ruby Rosie, </span>
                and
                <span className="text-secondary"> Blue Bennie. </span>
                Nearly 2/3rds of Examplandians are <span className="text-primary">Red party</span> members, but a non-trivial number are members of the <span className="text-secondary">Blue party</span>.
                However, the Red party has two candidates running, with voters split down the middle between <span className="text-primary">Calista</span> and <span className="text-primary">Rosie</span>.
            </p>
            <p>
                When Election Day arrives <span className="text-secondary">Bennie</span> emerges victorious – and with only 35% of the vote.
                That's in part because Examplandia uses a <b>"First Past The Post"</b> (FPTP) voting system, the same used in the US presidential election.
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
                    The details of that election differ in a few important ways, but this real-world result illustrates that candidates can and do win FPTP elections with roughly one third of the vote.
                    So while Election Day was one of celebration for <span className="text-secondary">Bennie</span>, most citizens felt robbed.
                    Many people, perhaps even you, look at these results and say "This isn't fair. Something wrong has happened, the system has failed."
                </p>
                <p>
                    In this exploration, we will move beyond just recognizing an injustice.
                    We will begin to articulate, explicitly, <i>how</i> the system failed.
                    Characterizing why this outcome is unsettling in certain terms, not only can we devise alternative systems;
                    we can test those systems, rigorously and mathematically, to determine if they overcome the failures we see here.
                </p>
                <p>
                    So exactly how was this FPTP election unfair?
                </p>
                <p>
                    The first reason this seems unfair is that, even though there are more <span className="text-primary">Red</span> party members than <span className="text-secondary">Blue</span>, <span className="text-primary">Red</span> still lost.
                    Because <span className="text-primary">Red</span> party members were so closely split on two candidates, their divided majority was outnumbered by a unified <span className="text-secondary">Blue</span> party.
                    The term for vote-splitting across ideological or party lines is called <b>"The Spoiler Effect"</b>, and can have systemic issues that go beyond one election.
                </p>
                <p>
                    Another reason, closely related, is that these results encourage people to vote for who they think will win, not who they actually prefer.
                    This phenomenon, called <b>"Tactical Voting",</b> contributes to the stability of two party systems, where "safe" voting can be hard to shake.
                    If after seeing these results we asked Examplandians how they had wished they had voted, some <span className="text-primary">Rosie</span> voters might regret not casting their ballot for <span className="text-primary">Calista</span>, the Red frontrunner.
                    Even if one candidate doesn't provide exactly what a person wants, a disdain for alternative parties and ideologies can be reason enough to compromise on a preferred candidate and for a more likely one.
                    This mindset can prevent new parties or non-standard platforms from gaining traction after two parties establish themselves.
                </p>
                <p>
                    The last issue we'll touch on is slightly more involved.
                    We can observe that, in a <i>1-on-1</i> election between <span className="text-primary">Crimson Calista</span> and <span className="text-secondary">Blue Bennie</span>, we'd expect <span className="text-primary">Calista</span> to win.
                    The same can be said for <span className="text-primary">Ruby Rosie</span>.
                    This property we're getting at is known as <b>"The Condorcet Criterion"</b>;
                    we want the person we elect, we'll call our <b>Condorcet Winner</b>, to have been victorious in every 1-on-1 election.
                    To model these 1-on-1 rounds, we'll use the concept of a 'tournament'.
                </p>
            </div>
        </PageSection>
    );
}

export default FirstPastThePostScreen