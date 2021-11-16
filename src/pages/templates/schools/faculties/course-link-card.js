import React from "react";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import {Link } from 'gatsby'



export default function CourseLinkCard() {
  return (
    <div className="col s12 m4"
    >
        <Link to="/templates/schools/faculties/course-page" >
        <div className="card z-depth-1"
        style={{
            height: `5rem`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`
        }}
        >
            <div className=""
            style={{
                width: `75%`,
                height: `100%`,
                background: `lightgrey`,
                alignItems: `center`,
                justifyContent: `center`,
                display: `flex`
            }}
            >
                <h4
                style={{
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: 'center',
                    color: `black`,
                    margin: `0`
                }}
                >Course Name</h4>
            </div>
            <div className=""
            style={{
                background: `orange`,
                width: `25%`,
                height: `100%`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                color: `black`

            }}
            >
                <LibraryBooksIcon />
            </div>
        </div>
        </Link>
    </div>
  );
}
