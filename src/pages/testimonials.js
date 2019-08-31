import React from "react"
import { Link } from "gatsby"
import TestimonialsV3 from '../components/Testimonials/testimonialsV3'

import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection"
import SEO from "../components/seo"
import testimonialsV3 from "../components/Testimonials/testimonialsV3";

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      styleClass="testimonials-background"
    />
    <TestimonialsV3 />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "book-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
