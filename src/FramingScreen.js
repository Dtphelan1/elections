import React from 'react';
import PageSection from './PageSection'
import Citation from './Citation';
import { FootnoteGenerator } from './FootnoteGenerator.js'
import voting from './img/black-voting-box.jpg'
const FramingScreen = React.forwardRef((props, ref) => {
    return (
        <PageSection className="text-left">
            <h1>Why Talk About Elections?</h1>

            <div className="row d-flex mb-3">
                <div className="col-sm-12 col-md-6">
                    <p>
                        2020 is a major election year here in the US.
                        In November, we as a country will decide our next President, a decision that will greatly impact the following 1460 days.
                        As of writing, it has been over 200 days since the COVID-19 pandemic hit our nation.
                            <FootnoteGenerator
                                desc="Based on articles from the NIH."
                                link="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7158585/"
                                ref={ref} setFootnote={props.setFootnote}
                            />
                        We are still navigating the fallout of record breaking unemployment numbers.
                            <FootnoteGenerator
                                desc="These catastrophic numbers have been widely reported, but NYT's visualizations are jawdropping."
                                link="https://www.nytimes.com/interactive/2020/05/08/business/economy/april-jobs-report.html"
                                ref={ref} setFootnote={props.setFootnote}
                            />
                        Nationwide protests, calling for accountability in law enforcement, have been answered by the deployment of armed, federal forces.
                            <FootnoteGenerator
                                desc="As of writing federal troops had been deployed in Portland Oregon, with deployments other cities being considered by administration officials."
                                link="https://www.france24.com/en/20200729-troops-to-deploy-in-three-more-us-cities-as-federal-forces-begin-portland-withdrawal"
                                ref={ref} setFootnote={props.setFootnote}
                            />
                        One thousand American lives are lost daily to the virus.
                            <FootnoteGenerator
                                desc="The numbers fluctuate, but as of writing (Aug 8, 2020) this was the reality."
                                link="https://www.theguardian.com/world/2020/jul/26/us-coronavirus-deaths-1000-day-republicans-trump-golf-relief-bill"
                                ref={ref} setFootnote={props.setFootnote} />
                        Chaos abounds.
                        Leadership and hope, for many, feel scarce.
                    </p>
                    <p className="mb-md-0">
                        Now more than ever, Americans are looking for stability.
                        Certainty.
                    </p>
                </div>
                <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                    <div className="position-relative">
                        <img src={voting} alt="" style={{ objectFit: "cover", height: "100%", maxHeight: "215px" }} />
                        <Citation>
                            Photo by Element5 Digital from Pexels
                        </Citation>
                    </div>
                </div>
            </div>

            <p>
                It is in pursuit of that certainty that we will turn our attention to the mathematics of democratic elections.
                Specifically,
                we'll discuss how the American presidential voting system fundamentally works,
                how we would like voting systems to work in general,
                the chasm between those two concepts,
                and how alternative voting systems can help us bridge parts of this gap.
            </p>
        </PageSection>
    );
});

export default FramingScreen;