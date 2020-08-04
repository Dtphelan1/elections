import React from 'react';
import PageSection from './PageSection'

function ElectionScreen() {
    return (
        <PageSection className="text-left">
            <h1>The Ideal(?) Democratic Election</h1>

            <p>
                Democratic elections have existed in some form for millennia.
                Conceptually, they are a mechanism by which the needs of a society can be voiced, aggregated and mobilized to directly enact legislation or to elect legislators into power.
                Historically, however, the electorate has excluded large portions of society, a restriction enforced by people in power typically in service to their interests or their biases.
            </p>

            <p>
                For simplicity, we will put aside the question of who the electorate is so we can focus on voting systems themselves.
                Let's start with a simple question:
                "What does the ideal, democratic election look like?"
                Here are some straightforward features we can start with.
            </p>

            <p className="pb-0 mb-0 font-weight-bold">
                Elections Should...
            </p>
            <ul>
                <li>Only use votes to determine the victor</li>
                <li>Give everyone an equal voice</li>
                <li>Limit each voter to one ballot</li>
                <li>Ensure the candidate with the least votes isn't elected</li>
                <li>Ensure the candidate who wins a majority of the votes is elected</li>
            </ul>

            <p>
                These suggestions might not seem controversial at first glance, but take a closer look.
                The American Presidential election fails to meet the first two criteria, in part due to the electoral college.
                Delegates, not direct votes, determine the outcome of the presidential election.
                The term "faithless elector" specifically designates delegates who vote for someone other than the candidate they're delegated for.
                Additionally, the way delegates are apportioned to the states depends somewhat, but not entirely, on state population.
                The result is that votes in some states "weigh" more than votes in others.
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
                And so our simple question has a simple, albeit unsatisfying, answer:
                <i>There is no one ideal election</i>.
                There are, however, plenty of criteria by which we can judge an election.
                Like with all social constructs, it falls to us to decide what we value and how we judge a systems against those values.
            </p>
            <p>
                But weighing abstract values in a vacuum can get disorienting fast.
                To guide our analysis of what we want in a voting system, let's ground our discussion and our intuitions with an example.
            </p>
        </PageSection>
    );
}

export default ElectionScreen