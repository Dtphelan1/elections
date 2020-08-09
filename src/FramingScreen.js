import React from 'react';
import PageSection from './PageSection'
import Citation from './Citation';
import { FootnoteGenerator } from './FootnoteGenerator.js'
const FramingScreen = React.forwardRef((props, ref) => {
    return (
        <PageSection className="text-left">
            <h1>Why Talk About Elections?</h1>

            <div className="row d-flex mb-3">
                <div className="col-sm-12 col-md-6">
                    <p>
                        2020 is a major election year in the US.
                        In November, the country will deicide who will be our President for the next 1460 days.
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
                        <img src={`${process.env.PUBLIC_URL}/img/black-voting-box.jpg`} alt="" style={{ objectFit: "cover", height: "100%", maxHeight: "215px" }} />
                        <Citation>
                            Photo by Element5 Digital from Pexels
                        </Citation>
                    </div>
                </div>
            </div>

            <p>
                It is in pursuit of that certainty that we will turn our attention to the mathematics of democratic elections.
                Specifically, we'll explore what kind of voting system the American presidential election uses, what kind of information that system misses, common pitfalls inherent to that system's structure, and how alternative systems can avoid those pitfalls.
                By the end of this exploration, hopefully readers will have learned about how different voting systems work, how we would like those systems to work, the chasm between those two concepts, and how we different voting systems can help us bridge that chasm.
            </p>
        </PageSection>
    );
});

export default FramingScreen;