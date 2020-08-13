import React from 'react';
import PageSection from './PageSection'
import {FootnoteGenerator} from './FootnoteGenerator'

const IdealElectionScreen = React.forwardRef((props, ref) => {
    return (
        <PageSection className="text-left">
            <h1>The Ideal(?) Democratic Election</h1>

            <p>
                Democratic elections have existed in some form for millennia.
                    <FootnoteGenerator
                        desc="While Democracy technically dates back to Ancient Greece & Rome, the form of Democracy we typically talk about is Representative Democracy, wherein elections decide the representatives that handle the actual running of the State. This system is more modern and dates more closely to the 17th century."
                        link="https://www.britannica.com/topic/election-political-science"
                        ref={ref} setFootnote={props.setFootnote}
                    />
                Conceptually, they are a mechanism by which the needs of a society can be voiced, aggregated and mobilized to either directly enact legislation or elect legislators into power.
                Historically, however, the electorate has excluded large portions of society, a restriction enforced by people in power typically in service of their interests or their biases.
                    <FootnoteGenerator
                        desc="The 19th Amendment for Women's suffrage remained in limbo for a full 40 years before being finally being passed by both the House of Representatives and the Senate. This passage wasn't 'Society's Inevitable Convergence Towards The Good'; it was due significantly to the indefatigable efforts of strong willed women, several of whom were imprisoned, neglected and tortured. People smarter than me have written far more informatively on the history here."
                        link="https://www.bookbrowse.com/reviews/index.cfm/book_number/3720/the-womans-hour"
                        ref={ref} setFootnote={props.setFootnote}
                    />
                    <FootnoteGenerator
                        desc="While people of color's right to vote is often discussed in the context of the 20th century, that right had already been amended into the constitution during the late 1800's reconstruction. The Voting Rights Act of 1965 (and the Civil Rights Act of 1964) fought back against the rampant practice of 'disenfranchisement by any other name' - poll taxes, segregation, literacy tests, voter intimidation, and the like. The success of the Act, as I understand, was in providing a firm legal basis for charging those guilty of disenfranchising others. Again, I'm no expert and will point to others with far more knowledge on the subject."
                        link="https://dp.la/primary-source-sets/voting-rights-act-of-1965/additional-resources"
                        ref={ref} setFootnote={props.setFootnote}
                    />
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
                <li>Ensure the candidate who wins a majority of the votes is elected
                    <FootnoteGenerator
                        desc="Just a subtle point: Elections that only elect people with ≥ 50% of the vote fall under the category of Majoritarianism. Pluralism, the practice of electing whoever gets the largest proportion of votes, will pick a majority candidate if there is one; but it will also settle for whoever got the most votes, setting a lower bar for a candidate's victory."
                        ref={ref} setFootnote={props.setFootnote}
                    />
                </li>
            </ul>

            <p>
                Hopefully, these suggestions do not seem controversial.
                Notably, however, the US presidential election fails to satisfy the first two criteria.
                This is, at least in part, due to the <b>Electoral College</b>.
            </p>

            <p>
                Electors, not direct votes, determine the outcome of the presidential election.
                The term "Faithless Elector" specifically designates Electors who decide not to vote for the candidate selected by the people.
                Additionally, the way Electors are apportioned to the states depends only somewhat, not entirely, on state population;
                each state gets 2 by default.
                The result is that in certain states votes "weigh" more than they would in others, in terms of how much they contribute to each member of the overall Electoral College.
                    <FootnoteGenerator
                        desc="Dale R. Durran does a fantastic job crafting an interactive exploration of 'vote weight'. Bastardizing his work here would only be an insult, so peruse the original thing instead."
                        link="Regarding Vote Weight: https://theconversation.com/whose-votes-count-the-least-in-the-electoral-college-74280"
                        ref={ref} setFootnote={props.setFootnote}
                    />
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
                Instead, we will ground our discussion of what we want from elections with an example.
                Ignoring the complications that the Electoral College presents, we will turn to Examplandia, a nation whose presidential election is similar to that of the US.
            </p>
        </PageSection>
    );
});

export default IdealElectionScreen