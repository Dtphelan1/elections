import React from 'react';
import PageSection from './PageSection'
import Citation from './Citation';

function FramingScreen() {
    return (
        <PageSection className="text-left">
            <h1>Why Talk About Elections?</h1>

            <div className="row d-flex mb-3">
                <div className="col-sm-12 col-md-6">
                    <p>
                        2020 is a major election year in the US.
                        In November, the country will deicide who will be our President for the next 1460 days.
                        As of writing, it has been over 200 days since the COVID-19 pandemic hit our nation.
                        We are still navigating the fallout of record breaking unemployment numbers.
                        Nationwide protests, calling for accountability in law enforcement, have been answered by the deployment of armed, federal forces.
                        One thousand lives are lost daily to the virus.
                        Chaos abounds.
                        Leadership and hope, for many, feel scarce.
                    </p>
                    <p className="mb-md-0">
                        Now more than ever, Americans are looking for stability.
                        Certainty.
                    </p>
                </div>
                <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                    <div>
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
}

export default FramingScreen