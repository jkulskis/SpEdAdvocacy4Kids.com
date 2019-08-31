import React from "react"
import { Link } from "gatsby"
import Contact from "../components/Contact/Contact"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaPoop } from "react-icons/fa"

const HelpfulPage = ({ data }) => (
  <Layout>
    <SEO title="Helpful Info" />
    <div className="row">
     <td>
     <h1 className="py-5 pl-5 text-center mx-auto">
        As of Now, We provide no helpful info whatsoever
      </h1>
     </td>
     <td>
     <FaPoop className="mx-auto" size="100"/>
     </td>
    </div>
  </Layout>
)

export default HelpfulPage
