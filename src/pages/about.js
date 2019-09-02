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
        <div className="col-9 col-md-4 my-3 mx-auto">
          <Img
            fluid={data.portfolio_img.childImageSharp.fluid}
            className="bordered-image"
          />
        </div>
        <div className="col-11 col-md-8 my-3 mx-auto">
          <h3 className="pb-2">Margie Mikulskis</h3>
          <p>
            I trained as an advocate at the Federation for Children with Special
            Needs, and have worked in urban and suburban school communities to
            advocate for a diverse population of students with disabilities. I
            completed the ISEA at William and Mary Law School in 2019, and
            continue to volunteer at the Federation for Children with Special
            Needs. I’m a Board Member of SPaN (Special Needs Advocacy Network)
            and member of COPAA. I hold a M.Ed. from Lesley College and B.A.
            from Boston College.
            <br />
            <br />
            Each case I work on is a priority for me and I dedicate my time and
            attention to understanding the student’s disability and needs by
            analyzing school reports, IEPs, 504s, and evaluations, as well as
            understanding the concerns and goals of the parents. I support
            parents by being there for them and following through, participating
            in school and IEP meetings and acting as their second voice to speak
            up for them and their child to the school district. I work with
            school personnel in a collaborative way, treating all those involved
            with dignity and respect, while working towards the best possible
            outcome for the child.
            <br />
            <br />I enjoy helping families find ways to better support their
            children in their school and community. I know how challenging it
            can be for parents, as I have been in tough situations myself with
            my child with special needs. The journey through the special
            education world can be difficult. I'm glad to share my knowledge and
            experience with other parents to help them navigate the system. I
            often think back to my advocate and mentor who turned around my
            daughter’s life, while empowering me to understand how to
            successfully advocate as a parent. She suggested that I become an
            advocate. I took her up on that and often think of her as I continue
            in her footsteps.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  {
    portfolio_img: file(relativePath: { eq: "portfolio-image-cropped.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
