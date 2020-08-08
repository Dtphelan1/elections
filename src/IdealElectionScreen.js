import React from 'react';
import PageSection from './PageSection'

function IdealElectionScreen() {
    return (
        <PageSection className="text-left">
            <h1>The Ideal(?) Democratic Election</h1>

            <p>
                Democratic elections have existed in some form for millennia.
                Conceptually, they are a mechanism by which the needs of a society can be voiced, aggregated and mobilized to either directly enact legislation or elect legislators into power.
                Historically, however, the electorate has excluded large portions of society, a restriction enforced by people in power typically in service to their interests or their biases.
                These exclusions are nothing short of a failure of democracy, and deserve dedicated analysis in their own right.
            </p>

            <p>
                That said, this discussion will focus solely on the mechanics of voting systems - what information is captured on ballots, and how is that information interpreted to select a winner.
            </p>

            <p>
                Let's begin our exploration with a simple question:
                "What does the ideal, democratic election look like?"
                Here are some straightforward features we can start with.
            </p>

            <p className="pb-0 mb-0 font-weight-bold">
                Elections Should...
            </p>
            <ul>
                <li>Only use people's votes to determine the victor</li>
                <li>Give everyone an equal voice</li>
                <li>Limit each voter to one ballot</li>
                <li>Ensure the candidate with the least votes isn't elected</li>
                <li>Ensure the candidate who wins a majority of the votes is elected</li>
            </ul>

            <p>
                Hopefully, these suggestions do not seem controversial.
                Notably, however, the US presidential election fails to satisfy the first two criteria.
                This is, at least in part, due to the <b>Electoral College</b>.
            </p>

            <p>
                Electors, not direct votes, determine the outcome of the presidential election.
                The term "faithless elector" specifically designates Electors who vote for someone other than the candidate they're delegated for.
                Additionally, the way Electors are apportioned to the states depends only somewhat, not entirely, on state population;
                each state gets 2  by default.
                The result is that in certain states, votes can "weigh" more than other votes in terms of how much they contribute to each member of the overall Electoral College.
                Things only get more contentious from here.
            </p>

            <p className="pb-0 mb-0 font-weight-bold">
                Should Elections...
            </p>

            <ul>
                <li>Only elect a candidate if they get a majority (≥ 50%) of the votes?</li>
                <li>Take place over one or multiple rounds?</li>
                <li>Only let voters cast their ballot for one candidate?</li>
            </ul>

            <p>
                Quickly it should become obvious that our simple question has a simple, albeit unsatisfying, answer:
                <b> There is no one ideal election</b>.
            </p>

            <p>
                There are, however, plenty of criteria by which we can judge an election.
                Like with all social constructs, it falls on us to decide what we value and how to build systems that manifest those values.
                That said, weighing abstract ideas in a conceptual vacuum can get disorienting fast.
                To guide our analysis of what we want in a voting system, let's ground our discussion and intuitions with a simple example.
                Ignoring the complications that the Electoral College presents, we will turn to Examplandia, a nation whose presidential election is similar in structure to the US'.
            </p>
        </PageSection>
    );
}

export default IdealElectionScreen