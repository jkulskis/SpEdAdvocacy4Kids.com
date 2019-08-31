import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection"
import SEO from "../components/seo"
import Img from "gatsby-image"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <div className="container pt-5 pb-5">
      <div className="row mx-auto">
        <div className="col-11 col-md-6 my-3">
          <Img
            fluid={data.portfolio_img.childImageSharp.fluid}
            className="bordered-image"
          />
        </div>
        <div className="col-11 col-md-6 my-3 mx-auto">
         <h3 className="pb-2">Margaret Mikulskis</h3>
          <p>
            I trained as an advocate at the Federation for Children with Special
            Needs, and have worked in urban and suburban school communities to
            advocate for a diverse population of students and disabilities. I
            completed the ISEA at William and Mary Law School, and continue to
            volunteer at the Federation for Children with Special Needs. I’m a
            Board Member of SPaN (Special Needs Advocacy Network), and a member
            of COPAA. I hold a M.Ed. from Lesley College and a B.A. from Boston
            College. 
            <br /><br />
            I take each case as a priority and give dedicated time and
            attention to understanding the student’s disability and needs,
            analyze school reports, IEPs and 504s, evaluations, as well as
            understand the concerns and goals of the parent(s) so that I can
            provide the best possible guidance and advice. I support the parents
            by being there for them and following through, participating in
            school and IEP meetings and acting as their second voice to speak up
            for them and their child. I work with the school in a collaborative
            way and treat all those involved with dignity and respect while
            working towards the best possible outcome for the student. 
            <br /><br />
            I enjoy helping families to find ways to better support their children in
            school. I know how challenging it can be for parents, as I have been
            in tough situations myself with my own child with special needs. I
            have been through the difficult journey of special education and am
            glad to share my knowledge and experience with other parents. I
            often think back to the advocate who turned around my daughter’s
            life while empowering me to understand how to successfully advocate
            for my daughter. She suggested to me that I become an advocate. My
            advocate has since deceased, yet I think often of her and am proud
            to continue in her footsteps.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  {
    portfolio_img: file(relativePath: { eq: "portfolio-image-blank.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
