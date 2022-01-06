import React from 'react'

import FacultyCard from '../../../components/pages/schools/faculty-card'


export default function SchoolCard() {
    return (
       
          <div className="col s12 l6">
            <div
              className="card-panel z-depth-2 center-align"
              style={{
                height: `100%`,
                width: `100%`,
                justifyContent: `center`,
                padding: "0 0 1rem 0",
              }}
            >
              <div
                className="imgBox valign-wrapper"
                style={{
                  minHeight: `30%`,
                  minWidth: `100%`,
                  background:
                    "red",
                  filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#3648ee'`,
                  endColorstr: `'#1e31de',GradientType=0 )`,
                  justifyContent: `center`,
                  padding: `1rem`,
                }}
              >
                <h2
                  className="white-text"
                  style={{ margin: `0`, lineHeight: `1.7rem` }}
                >
                  School of Accounting and Finance
                </h2>
              </div>
              <div className="row">
                
                <div className="col s12 "
                style={{
                  alignContent: `center`,
                  justifyContent: `center`
                }}
                >
                <div
                  className="schoolIntro"
                  style={{
                    padding: `1.2rem 1.2rem .5rem 1.2rem`,
                    textAlign: `justify`,
                  }}
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet et laborum, assumenda dicta accusamus provident
                    voluptatem dolor, rerum, dolore aliquid nesciunt fugiat vero
                    omnis quas voluptates ratione blanditiis reprehenderit
                    pariatur?
                  </p>
                </div>
                
                  <FacultyCard />
                  <FacultyCard />
                  <FacultyCard />

                </div>
              </div>
            </div>
          </div>
    )
}
