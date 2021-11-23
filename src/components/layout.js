/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import PageTransition from 'gatsby-plugin-page-transitions';

import Header from "./header";
// import Footer from "./footer";
import Footer from "./Footer/footer"
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery1 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <PageTransition
    
  >
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: "100vw",
          minHeight: "1000px",
        }}
      >
        <main
          style={{
            margin: `0`,
            minHeight: "100vh",
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
      </PageTransition>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
