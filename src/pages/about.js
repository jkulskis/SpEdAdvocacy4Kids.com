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
            Margie is a professional advocate and educational consultant,
            helping families and their children with special needs to obtain the
            services and individualized instruction necessary for them to make
            effective progress in school. She has experience working with a wide
            range of disabilities, and specializes in autism, language-based
            learning challenges and ADHD.
          </p>
          <p>
            Margie is a Board Member of SPaN (Special Needs Advocacy Network),
            member of COPAA (Council of Parent Advocates and Attorneys) and a
            graduate of the Advocacy Program at William and Mary Law School. She
            stays up-to-date with special education regulations and takes
            professional development coursework throughout the year. She
            advocates in the Boston Medical Center EASE Clinic, volunteers at
            the Federation for Children with Special Needs Phone Center, and
            takes on complicated DDS cases through BAMSI.
          </p>
          <p>
            She holds an M.Ed. from Lesley College and B.A. from Boston College.
          </p>
          <p>
            “Each case I work on is a priority for me and I dedicate my time and
            attention to understanding the student’s disability and needs by
            analyzing school reports, IEPs, 504s, and evaluations, as well as
            understanding the concerns and goals of the parents. I support
            parents by being there for them and following through, participating
            in school and IEP meetings and acting as their second voice to speak
            up for them at school meetings and draft written correspondence with
            school districts. I work with school personnel in a collaborative
            way, treating all those involved with dignity and respect, while
            working towards the best possible outcome for the child.”
          </p>
          <p>
            “I know how challenging it can be for a parent to advocate for a
            child with special needs, as I have been there myself. The journey
            through the special education world can be difficult, and I'm glad
            to share my knowledge and expertise with other parents to help them
            navigate the process. I often think back to my own advocate and
            mentor who turned around my daughter’s life, while empowering me to
            understand how to successfully advocate for my child. She suggested
            that I become an advocate, which prompted me to train as a
            professional advocate. I often think of her as I continue in her
            footsteps.”
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
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
