import React from "react"
import { Link } from "gatsby"
import Contact from "../components/Contact/Contact"

import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection"
import SEO from "../components/seo"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      styleClass="contact-background"
    />
    <h4 className="mx-auto col-11 text-center pt-5">You can reach Margaret at 617-548-6024 by call or text, or by using the form below</h4>
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
