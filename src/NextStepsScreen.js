import React from 'react';
import PageSection from './PageSection';

function NextStepsScreen() {
    return (
        <PageSection className="text-left">
            <h1>Beyond Examplandia: Deeper Theory and Practical Applications</h1>

            <p>
                We've discussed briefly the motivations behind democratic elections, and how those motivations are often at odds with political realities.
                Swiftly, we stepped away the muck and mire of real world constraints to discuss abstract properties of voting systems.
                In particular, we highlighted two approaches to ballot structure - <b>First Past The Post systems, and Ranked Voting systems</b>.
            </p>
            <p>
                By looking to Examplandia, we examined some of the ways these ballot structures can impact election results.
                In doing so, we developed a vocabulary for describing how those outcome were unsatisfying:
                The <b>Spoiler Effect</b> disadvantages candidates when similar ones run along side them, especially in FPTP systems.
                <b>Tactical Voting</b> makes it hard for novel candidates to gain a foothold, emerges when
                And the fact that our winning candidate didn't beat any competitors one on one demonstrates a grave failure to meet the <b>Condorcet criteria</b>.
            </p>
            <p>
                We've seen how Ranked Voting systems can alleviate these negative effects and, in some cases, guarantee that the Condorcet criteria.
                Through `tournaments`, we visualized and analyzed how candidates fare against one another based on candidate rankings.
                And when unanimous winner's cannot be found due to the <b>Condorcet paradox</b>, we introduced briefly the concept of the <b>Smith set</b> and Smith efficiency.
                But those systems also carry with them tradeoffs of their own.
                In looking towards Examplandia, we've learned much about shortcomings of the FPTP system, possible alternative systems, and some tradeoffs associated with each.
            </p>
            <p>
                We've only scratched the surface
            </p>
            <p>
                There are numerous other Condorcet and Smith Efficient, Ranked Voting systems that we haven't had the time to explore here.
                Notably, the <b>"Shulze"</b> method meets both these criteria and has become the defacto standard for digital coalitions.
                As far as criteria go, there are dozens of additional properties one can consider in implementing a voting system.
                Traditional analysis has centered on mathematic criteria, which one can provably demonstrate hold for a given system.
                <b>Experimental criteria</b>, on the other hand, use simulations to compare how different voting systems operate in practical cases.
                And in addition to these empirical qualities of elections, there are <b>"soft" criteria</b> to consider with respect to this being a policy:
                understandability by the public, cost in implementing, auditability, and others.
                Taking the practical dimension further, there are organizations active all over the US working to educate the public on different voting systems.
                Local ballot initiatives constantly arise as grassroots organizers band together to demand more of their voting systems.
                This year (2020) in Massachusetts, the <a href="https://voterchoice2020.org/who-we-are/">"Yes on 2"</a> campaign has recently succeeded in securing a spot on the November ballot.
                In only a few months, MA residents will decide if the state will use the IRV system in state elections moving forward.
            </p>
            <p>
                Ultimately, voting systems are simply systems of our own making.
                Their critical importance in upholding democracy demands that we pay them due attention.
                Their efficacy in reflecting the voice of the people is something we should use rigor and evidence to drive those inquiry.
                And when that inquiry produces unsatisfying conclusions, it's our duty to exercise our civic liberties and demand more from the systems we've built.
                Continue learning more about voting systems, the mathematics that underpin them, and see how you improve the voting systems you participate in at the local, state and even federal level.
                Vote.
            </p>
        </PageSection>
    );
}

export default NextStepsScreen;
