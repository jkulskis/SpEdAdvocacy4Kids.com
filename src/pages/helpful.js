import React from "react"
import { Link } from "gatsby"
import Contact from "../components/Contact/Contact"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaSmileBeam } from "react-icons/fa"

const HelpfulPage = ({ data }) => (
  <Layout>
    <SEO title="Helpful Info" />
    <div className="row">
      <h1 className="py-5 pl-5 text-center mx-auto">Coming Soon <FaSmileBeam /></h1>
    </div>
  </Layout>
)

export default HelpfulPage
