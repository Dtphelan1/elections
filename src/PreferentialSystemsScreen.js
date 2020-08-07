import React from 'react';
import PageSection from './PageSection';

function PreferentialSystemsScreen() {
    return (
        <PageSection className="text-left">
            <h1>Ranked Voting Systems: Tradeoffs and Options Abound</h1>

            <p>
                There are an entire class of preferential voting systems - Condorcet methods - that satisfy the Condorcet criterion.
                <b> "Copeland's method"</b>, for example, calculates the pairwise victories and pairwise defeats for each candidate.
                Using these values, each candidate receives a score corresponding their victories minus their defeats.
                The candidate with the highest score wins.
                While Copeland's method satisfies both the Condorcet and Smith criteria, it often produce a tie when there are three-way Smith cycles.
                This poses a practical concerns for this technique.
            </p>
            <p>
                <b>"Kemeny–Young's method"</b> is another Condorcet method, one that assigns scores to each possible sequence of preferences that voters could provide.
                Those scores are then compared, and the sequence with the highest possible score is chosen.
                The most-preferred candidate in that sequence is then chosen as the overall winner.
                This method, in addition to being less intuitive than previous approaches, is algorithmically NP-hard.
                It's unlikely that there is a polynomial-time algorithm to find a victor for an arbitrary election with 'n' candidates.
            </p>
            <p>
                We've only scratched the surface of different Condorcet methods, as the research diving into every one is significant.
                Beyond these, there are some preferential voting systems that don't even satisfy the Condorcet criterion.
                Arguably one of the most popular preferential systems, <b>"Instant Runoff Voting"/"Ranked Choice Voting"</b>, fails in this regard.
                But what it lacks in that regard, it gains in intuitive simplicity.
                The algorithm is as follows:
            </p>
            <ol>
                <li>If there is a majority candidate, select them.</li>
                <li>Else, remove the candidate in last place and reallocate each ballot to their next-in-line preference.</li>
                <li>Repeat 1-2 until a candidate is selected.</li>
            </ol>
            <div className="row d-flex align-items-center">
                <div className="col-lg-4 d-flex justify-content-center">
                    <p>
                        The concern with IRV, however, is that the elimination of an outlier can result in a temporary boost of a suboptimal candidate.
                        This lead to the overall front-runner being knocked into last place for long enough that they're removed from the race.
                        That's how IRV can fail the Condorcet criterion.
                        Here is an example where, after the arrival of Sapphire Sally and a shifting of the political landscape, Calista loses to Rosie, who she could have beaten 1-on-1 thanks to Bennie's.
                        This permutation on the spoiler effect is not just mathematically possible, but much like the Singapore example from earlier has happened in recent history, specifically in Burlington, Vermont's 2009 mayoral election.
                    </p>
                </div>
                <div className="col-lg-8">
                    <table className="table table-striped table-responsive-lg">
                        <caption>Sally Shifts The IRV Election; Calista, Our Condorcet Winner, Loses</caption>
                        <thead className="thead-dark">
                            <tr>
                                <th>Candidates</th>
                                <th>Original Tally</th>
                                <th>1st Change</th>
                                <th>New Tally</th>
                                <th>2nd Change</th>
                                <th>New Tally</th>
                                <th>Winner</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Rosie</th>
                                <td>24</td>
                                <td>+8</td>
                                <td>32</td>
                                <td>+31</td>
                                <td>63</td>
                                <td className="font-weight-bold">Rosie</td>
                            </tr>
                            <tr>
                                <th scope="row">Bennie</th>
                                <td>30</td>
                                <td>+7</td>
                                <td>37</td>
                                <td>0</td>
                                <td>37</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Calista</th>
                                <td>31</td>
                                <td>0</td>
                                <td className="font-weight-bold">31</td>
                                <td>-31</td>
                                <td>0</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Sally</th>
                                <td className="font-weight-bold">15</td>
                                <td>-15</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p>
                But let's back up a second - why are we even discussing methods that don't meet our Condorcet criteria?
                As we recognized when we began this exploration, it's critical that our analysis of voting systems be grounded in certainty.
                Precise analysis permits objective, nonpartisan discussions about different voting algorithms, their pros, and their cons.
            </p>
            <p>
                But that analysis doesn't tell us which tradeoffs to make.
            </p>
        </PageSection>
    );
}

export default PreferentialSystemsScreen;
