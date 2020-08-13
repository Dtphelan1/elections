import React from 'react';
import PageSection from './PageSection';
import {FootnoteGenerator} from './FootnoteGenerator'

const NextStepsScreen = React.forwardRef((props, ref) => {
    return (
        <PageSection className="text-left">
            <h1>Beyond Examplandia: Deeper Theory and Practical Applications</h1>

            <p>
                We've discussed briefly the motivations behind democratic elections, and how those motivations are often at odds with political realities.
                Swiftly, we stepped away the muck and mire of real world constraints to discuss abstract properties of voting systems.
                In particular, we investigated two approaches to ballot structure - <b>First Past The Post systems, and Ranked Voting systems</b>.
            </p>
            <p>
                By looking to FPTP in Examplandia, we examined some of the ways these ballot structures can impact election results, developing a vocabulary for the unsatisfying outcomes we saw:
                The <b>Spoiler Effect</b> disadvantages candidates when similar ones run alongside them, especially in FPTP systems.
                <b> Tactical Voting</b> is the practice of voting for electable candidates, not preferred candidate, and makes it hard for new candidates to gain a foothold.
                And the fact that our winning candidate didn't beat any competitors 1-on-1 demonstrates a failure to satisfy the <b>Condorcet Criterion</b>.
            </p>
            <p>
                We've seen how Ranked Voting can alleviate these negative effects and, in some cases, guarantee the Condorcet Criterion is satisfied.
                Tournaments allowed us to visualize and analyze how candidates fare against one another based on voter preferences.
                When unanimous winner's cannot be found due to the <b>Condorcet Paradox</b>, we briefly discussed how the related concept of <b>Smith Efficiency</b> can be used as an extension of the Condorcet Criterion.
                And with each Ranked Voting method we discussed – <b>Copeland's, Kemeny–Young's, and Instant Runoff Voting</b> – we touched on both pros and cons.
                Overall, in looking towards Examplandia, we've discussed many shortcomings of the FPTP system, possible alternative systems, and the tradeoffs associated with each.
            </p>
            <p>
                This only scratches the surface.
            </p>
            <p>
                There are numerous other Condorcet and Smith Efficient Ranked Voting systems that we haven't had the time to explore here.
                Notably, the <b>"Schulze"</b> method meets both these criteria and has become the <i>de facto</i> voting standard for many organizations.
                <FootnoteGenerator
                    desc="Full details on the method, its satisfied criteria and its adoptee organizations are found below. Interestingly, many organizations who employ the Schulze method are large advocates of the open-source software movement. A few examples of note: Ubuntu, Debian, Haskell, The Gentoo Foundation. The list continues on the page below."
                    link="https://en.wikipedia.org/wiki/Schulze_method"
                    ref={ref} setFootnote={props.setFootnote}
                />
                Systems like Score Voting,
                <FootnoteGenerator
                    desc="More on Score Voting found below."
                    link="https://en.wikipedia.org/wiki/Score_voting"
                    ref={ref} setFootnote={props.setFootnote}
                />
                which allow voters to assign scores to candidates,
                and Approval Voting,
                <FootnoteGenerator
                    desc="More on Approval Voting found below"
                    link="https://en.wikipedia.org/wiki/Comparison_of_electoral_systems"
                    ref={ref} setFootnote={props.setFootnote}
                />
                which allow voters to select all candidates they approve of, offer alternative voting methods altogether with their own assortment of specific systems, successes and shortcomings.
                As far as criteria go, there are dozens of additional properties one can consider when evaluating a voting system.
                <FootnoteGenerator
                    desc="Seriously. Dozens upon dozens."
                    link="https://en.wikipedia.org/wiki/Comparison_of_electoral_systems"
                    ref={ref} setFootnote={props.setFootnote}
                />
                Traditionally, analysis has centered on <b>Mathematic Criteria</b> with which systems are evaluated through provable metrics, providing an attractive certainty.
                <b> Experimental Criteria</b>, on the other hand, use simulations to compare how different voting systems operate in practical cases.
                And in addition to these empirical evaluations of voting systems, there are <b>Soft Criteria</b> to consider with respect to a voting system being, at it's core, a political institution:
                How understandable is the system to the public?
                How much does the system cost to operate?
                How easy is the system to audit?
            </p>
            <p>
                Taking the practical dimension further, there are organizations active all over the US working to educate the public on different voting systems.
                Collectives and local ballot initiatives have emerged nationwide as grassroots organizers band together to demand more of their voting systems.
                Here in Massachusetts, the <a href="https://voterchoice2020.org/who-we-are/">"Yes on 2"</a> campaign has recently succeeded in securing a spot on the November ballot.
                In only a few months, MA residents will decide whether the state will use the Instant Runoff Voting system in future state elections.
            </p>
            <p>
                Ultimately, voting systems are systems of our own making -<i>"By the people, for the people"</i>.
                Undergirding our democratic process, they are of critical importance and demand of us due attention;
                their efficacy in reflecting the will of the people should not be taken for granted.
                Investigation of that efficacy needs to be rigorous, driven by practical concerns, and above all else grounded in demonstrable evidence.
                And when that inquiry yields unsatisfying conclusions, it's our civic duty to support the building of and voting for better systems.
                Continue learning more about voting systems, the mathematics that underpin them, and try to see how you can play a role in improving the voting systems around you.
            </p>
            <p>
                And please. Vote.
            </p>
        </PageSection>
    );
});

export default NextStepsScreen;