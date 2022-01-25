import React from 'react';

const QouteCoursesBanner = () => {
    return (
        <div>
            <div className="section"
            style={{
                padding: `0 2rem 4rem 2rem`,
                margin: `0`
            }}
            >
                <div className="container center-align"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="300"
                data-sal-easing="ease"
                >
                    <h4>
                    “Completing the Diploma of Financial Planning led me to gaining a <strong>promotion</strong> and a pay <strong>increase</strong> of nearly $10,000...”
                    </h4>
                    <span className="btn red"
                    style={{
                        fontWeight: `bold`,
                        fontSize: `1.2rem`,
                        padding: `.5rem 2rem 2.5rem 2rem`
                    }}>
                        Courses 
                    </span>
                </div>
            </div>
        </div>
    );
}

export default QouteCoursesBanner;
