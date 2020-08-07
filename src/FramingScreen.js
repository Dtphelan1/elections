import React from 'react';
import PageSection from './PageSection'

function FramingScreen() {
    return (
        <PageSection className="text-left">
            <h1>Why Talk About Elections?</h1>
            <div className="row d-flex mb-3">
                <div className="col-sm-12 col-md-6">
                    <p>
                        2020 is a major election year in the US, when we decide who will lead our country for the next 1460 days.
                        As of writing, it has been over 200 days since the COVID-19 pandemic hit our nation.
                        We're grappling with the fallout of record breaking unemployment numbers.
                        Nationwide protests, calling for accountability in law enforcement, have been answered by the deployment armed, federal force.
                        A thousand lives are lost daily to the virus.
                        Chaos abounds.
                        Leadership and hope, for many, feel scarce.
                    </p>
                    <p className="mb-md-0">
                        Many Americans are looking for answers.
                        Certainty.
                    </p>
                </div>
                <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                    <img src={`${process.env.PUBLIC_URL}/img/black-voting-box.jpg`} alt="" style={{ objectFit: "cover", height: "100%", maxHeight: "215px" }} />
                </div>
            </div>

            <p>
                It is in pursuit of that certainty, we will turn our attention to the mathematics of democratic elections.
                Specifically, we'll explore what kind of voting system the American presidential system uses, what kind of information our system misses out on, common pitfalls that are inherent in the structure of our voting system, and how alternative approaches can help avoid them.
                By the end of this exploration, hopefully readers have learned a little more about how elections work today, how they should work, the chasm between those two ideas, and how we can start to cross that chasm.

            </p>

        </PageSection>
    );
}

export default FramingScreen