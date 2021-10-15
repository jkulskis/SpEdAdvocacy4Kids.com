/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./bootstrap.min.css"
import "./layout.css"
import Header from "./Globals/Header"
import Navbar from "./Globals/Navbar"
import Footer from "./Globals/Footer"

const LogRocket = require('logrocket/setup')({
  sdkServer: 'https://sungbean.com',
  ingestServer: 'https://sungbean.com'
});
LogRocket.init('tf13-test/margies-website');

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
