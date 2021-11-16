import React from "react";
import { Link } from "gatsby";
import MailchimpForm from './reuse/mailchimp-signup/mailchimp-form'
const Footer = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         author
  //         description
  //       }
  //     }
  //   }
  // `);
  return (
    <div
      className="page-footer red darken-2"
      style={{
       
        width: "100vw",
        
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            
           <MailchimpForm />

          </div>
          <div className="col l4 offset-12 sm12">
            <ul
              className="row"
              style={{
                color: "white",
              }}
            >
              <li>
                <Link to="/about/" className="grey-text text-lighten-4">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/schools/" className="grey-text text-lighten-4">
                  Schools
                </Link>
              </li>
              <li>
                <Link to="/courses/" className="grey-text text-lighten-4">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/student-info/" className="grey-text text-lighten-4">
                  Student Information
                </Link>
              </li>
              <li>
                <Link
                  to="/special-offers/"
                  className="grey-text text-lighten-4"
                >
                  Special Offers
                </Link>
              </li>
              <li style={{ paddingBottom: "1rem" }}>
                <Link to="/contact/" className="grey-text text-lighten-4">
                  Contact
                </Link>
              </li>
              <li>
                <button className="btn-flat white" style={{ color: "#37474f" }}>
                  Sign-In{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
