import React from "react"

import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection"
import SEO from "../components/seo"
import ServiceList from "../components/Services/servicesList"

const ServicesPage = ({ data }) => (
  <Layout>
    <SEO title="Services" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      styleClass="services-background"
      fixed={false}
    />
    <br />
    <ServiceList />
    <br />
    <p className="col-10 mx-auto">
      <small>
        <i>
          Disclaimer: Margie Mikulskis Advocacy services are non-legal and do
          not constitute legal advice or legal services. If we/you at any time
          believe you need legal services we will provide you with referrals of
          Special Education Attorneys and/or organizations that provide legal
          representation.
        </i>
      </small>
    </p>
    <br />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "time-for-change.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default ServicesPage
