import React from "react";

import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";

const Pathways = () => {
  return (
    <div>
      <div
        className="section"
        style={{
          paddingBottom: `2rem`,
        }}
      >
        <div className="pathways-header">
          <h1
            style={{
              textAlign: `center`,
            }}
          >
            Explore the pathways to <strong> Higher Education </strong>{" "}
            available through Mentor Educations courses
          </h1>
        </div>
        <div
          className="container"
          style={{
            background: ` #efeef1`,
            padding: ` 1rem 5rem`,
            minHeight: `100%`,
          }}
        >
          <div
            className="row"
            style={{
              margin: `0`,
            }}
          >
            <div
              className="col s12 m10"
              style={{
                paddingTop: `.5rem`,
              }}
            >
              <span>
                <p
                  style={{
                    textAlign: `center`,
                  }}
                >
                  Learn more about our pathways to Higher Education in Business,
                  Accounting and Finance
                </p>
              </span>
            </div>
            <div
              className="col s12 m2 hide-on-small-only"
              style={{
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                padding: `1.5rem 0 .5rem 4rem`,
              }}
            >
              <p
                className="btn red"
                style={{
                  display: `flex`,
                  padding: `1.5rem 2rem`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  float: `right`,
                  fontSize: `1rem`,
                  //   width: `4.5rem `,
                }}
              >
                GO
                <span>
                  <ArrowRightAlt
                    style={{
                      display: `flex`,
                      paddingLeft: `.1rem`,
                      alignItems: `center`,
                      justifyContent: `center`,
                      fontSize: "30",
                    }}
                  />
                </span>
              </p>
            </div>
            <div
              className="col s12 m2 hide-on-med-and-up"
              style={{
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
              }}
            >
              <p
                className="btn red"
                style={{
                  display: `flex`,
                  padding: `1.5rem 2rem`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  float: `right`,
                  fontSize: `1rem`,
                  //   width: `4.5rem `,
                }}
              >
                GO
                <span>
                  <ArrowRightAlt
                    style={{
                      display: `flex`,
                      paddingLeft: `.1rem`,
                      alignItems: `center`,
                      justifyContent: `center`,
                      fontSize: "30",
                    }}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pathways;
