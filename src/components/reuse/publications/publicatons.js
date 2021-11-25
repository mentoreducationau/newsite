import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Publicatons = () => {
  return (
    <div>
      <div
        className="section"
        style={{
          padding: `2rem`,
        }}
      >
        <div
          className="publication-header"
          style={{
            textAlign: `center`,
            paddingBottom: `2rem`,
          }}
          data-sal="slide-down"
          data-sal-delay="400"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <h1>
            Featured in the following leading financial publications and
            journals:
          </h1>
        </div>

        <div className="row">
          <div
            className="col s4 l2"
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="500"
            data-sal-easing="ease"
          >
            <StaticImage src="./images/pub1.png" alt="publications-img-1" />
          </div>
          <div
            className="col s4 l2"
            data-sal="slide-left"
            data-sal-delay="200"
            data-sal-duration="500"
            data-sal-easing="ease"
          >
            <StaticImage src="./images/pub2.png" alt="publications-img-2" />
          </div>{" "}
          <div
            className="col s4 l2"
            data-sal="slide-left"
            data-sal-delay="300"
            data-sal-duration="500"
            data-sal-easing="ease"
          >
            <StaticImage src="./images/pub3.png" alt="publications-img-4" />
          </div>{" "}
          <div
            className="col s4 l2"
            data-sal="slide-left"
            data-sal-delay="400"
            data-sal-duration="500"
            data-sal-easing="ease"
          >
            <StaticImage src="./images/pub4.png" alt="publications-img-4" />
          </div>{" "}
          <div
            className="col s4 l2"
            data-sal="slide-left"
            data-sal-delay="600"
            data-sal-duration="500"
            data-sal-easing="ease"
          >
            <StaticImage src="./images/pub5.png" alt="publications-img-5" />
          </div>{" "}
          <div
            className="col s4 l2"
            data-sal="slide-left"
            data-sal-delay="700"
            data-sal-duration="500"
            data-sal-easing="ease"
          >
            <StaticImage src="./images/pub6.png" alt="publications-img-6" />
          </div>{" "}
          <div
            className="col s4 l2"
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="800"
            data-sal-easing="ease"
          >
            <StaticImage src="./images/pub7.png" alt="publications-img-7" />
          </div>{" "}
          <div
            className="col s4 l2"
            data-sal="slide-left"
            data-sal-delay="900"
            data-sal-duration="500"
            data-sal-easing="ease"
          >
            <StaticImage src="./images/pub8.png" alt="publications-img-8" />
          </div>{" "}
          <div
            className="col s4 l2"
            data-sal="slide-left"
            data-sal-delay="1000"
            data-sal-duration="500"
            data-sal-easing="ease"
          >
            <StaticImage src="./images/pub9.png" alt="publications-img-9" />
          </div>{" "}
          <div
            className="col s4 l2"
            data-sal="slide-left"
            data-sal-delay="1100"
            data-sal-duration="500"
            data-sal-easing="ease"
          >
            <StaticImage src="./images/pub10.png" alt="publications-img-10" />
          </div>{" "}
          <div
            className="col s4 l2"
            data-sal="slide-left"
            data-sal-delay="1200"
            data-sal-duration="500"
            data-sal-easing="ease"
          >
            <StaticImage src="./images/pub11.png" alt="publications-img-11" />
          </div>{" "}
          <div
            className="col s4 l2"
            data-sal="slide-left"
            data-sal-delay="1300"
            data-sal-duration="500"
            data-sal-easing="ease"
          >
            <StaticImage src="./images/pub12.png" alt="publications-img-12" />
          </div>{" "}
          <div
            className="col s4 l2"
            data-sal="slide-left"
            data-sal-delay="1400"
            data-sal-duration="500"
            data-sal-easing="ease"
          >
            <StaticImage src="./images/pub13.png" alt="publications-img-13" />
          </div>
          <div className="col s4 l2">
            <StaticImage src="./images/pub14.png" alt="publications-img-14" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publicatons
