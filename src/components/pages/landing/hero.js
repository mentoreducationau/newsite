import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="container-hero responsive-image hide-on-med-and-down">
        <div className="section ">
          <div
            className="row "
            style={{
              marginRight: "1.5rem",
            }}
          >
            <div className="col m12 l6" style={{ height: `50vh` }}></div>
            <div
              className="col m12 l6 valign-wrapper "
              style={{ height: `100vh` }}
            >
              <div
                className="row"
                style={{
                  marginLeft: `16%`,
                  marginTop: `8rem`,
                }}
              >
                <h1
                  className="center-align"
                  style={{
                    textAlign: `center`,
                    width: `100%`,
                    padding: `20px 10px`,
                    color: `white`,
                    background: `red`,
                    lineHeight: "2.5rem",
                  }}
                  data-sal="slide-up"
                  data-sal-delay="200"
                  data-sal-easing="ease"
                >
                  Excite your potential with Mentor Education
                </h1>

                <div className="center-align">
                <div
                    className=""
                    data-sal="slide-left"
                    data-sal-delay="200"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                  >
                  <p
                    className="btn-large"
                    style={{
                      width: `80%`,
                      fontSize: `130%`,
                      fontWeight: `bold`,
                      height: "100%",
                      background: `red`,
                      marginBottom: `.5rem`,
                    }}
                  >
                    Speak with an expert now
                  </p>
                  </div>
                  <div
                    className=""
                    data-sal="slide-left"
                    data-sal-delay="400"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                  >
                  <p
                    className="btn-large"
                    style={{
                      width: `80%`,
                      fontWeight: `bold`,
                      height: "100%",
                      background: `red`,
                      marginBottom: `.5rem`,
                    }}
                  >
                    Download Course Guide
                  </p>
                  </div>
                  <div
                    className=""
                    data-sal="slide-left"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                  >
                    <p
                      className="btn-large"
                      style={{
                        width: `80%`,
                        fontWeight: `bold`,
                        height: "100%",
                        background: `red`,
                      }}
                    >
                      View Courses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-hero-small show-on-small">
        <div
          className="row hide-on-med-and-up"
          style={{
            marginBottom: "0",
          }}
        >
          <h1
            className="center-align"
            style={{
              textAlign: `center`,
              marginBottom: "0",
              width: `100%`,
              padding: `20px 10px`,
              color: `white`,
              background: `red`,
              lineHeight: "2.5rem",
            }}
          >
            Excite your potential with Mentor Education
          </h1>
          <div className="container-hero-small-img "></div>

          <div className="center-align section ">
            <p
              className="btn-large responsive-text"
              style={{
                width: `80%`,
                fontSize: `120%`,
                fontWeight: `bold`,
                height: "100%",
                background: `red`,
                marginBottom: `.5rem`,
                lineHeight: `2rem`,
                padding: ".5rem .5rem",
              }}
            >
              Speak with an expert now
            </p>
            <p
              className="btn-large"
              style={{
                width: `80%`,
                fontWeight: `bold`,
                height: "100%",
                background: `red`,
                marginBottom: `.5rem`,
              }}
            >
              Download Course Guide
            </p>
            <p
              className="btn-large"
              style={{
                width: `80%`,
                fontWeight: `bold`,
                height: "100%",
                background: `red`,
                marginBottom: `.1rem`,
              }}
            >
              View Courses
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
