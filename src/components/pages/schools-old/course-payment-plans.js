import React from "react";
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
export default function CoursePaymentPlans() {
  return (
    <div>
      <div
        className="section"
        style={{
          padding: `1rem`,
        }}
      >
        <h3>Flexible Delivery Options: Nationwide</h3>
        <p>
          Mentor Education specialises in providing professional education and
          training services to you anywhere, any-time. We appreciate that
          learning needs differ for each individual and organisation, which is
          why we allow you to select the approach that works best for you.
        </p>
        <div
          className="row center-align"
          style={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <div
            className="col s12 m6"
            style={{
              padding: `1rem`,
              background: `white`,
              height: `200px`,
              margin: `1rem`,
              width: `40%`,
              display: `flex`,
              justifyContent: `center`,
              flexDirection: 'column'
            }}
          >
            <div className=""
            >
                <h3>Online - Upfront Payments</h3>
            </div>
           <div>hi</div>
          </div>
          <div
            className="col s12 m6"
            style={{
              padding: `2rem`,
              background: `white`,
              height: `200px`,
              margin: `1rem`,
              width: `40%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
