import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const AboutHeader = ({ title, info }) => (
  <div className="aboutHeader">
    <span className="aboutHeaderTitle">{title}</span>
    <span className="aboutHeaderInfo"> {info}</span>
  </div>
)

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
          <h3 className="pb-2">Margie Mikulskis, M.Ed.</h3>
          <AboutHeader
            title="SESP, Special Education Surrogate Parent"
            info="Volunteer
            as special education decision-maker for a student in state DCF
            custody"
          />
          <AboutHeader
            title="COPAA SEAT II Graduate"
            info="(Council of Parent Attorneys
            and Advocates-Special Education Advocate Training II) and COPAA
            Member"
          />
          <AboutHeader
            title="Massachusetts Advocates for Children"
            info="Volunteer
            Advocate for Helpline and Intensive Technical Assistance Casework,
            2021- Present"
          />
          <AboutHeader
            title="William and Mary Law School"
            info="Graduate of Special
            Education Advocacy Certificate Program, 2019"
          />
          <AboutHeader
            title="SPAN"
            info="(Special Needs Advocacy Network) Member"
          />
          <AboutHeader
            title="Boston Medical Center"
            info="Ease Clinic Volunteer, 2020"
          />
          <AboutHeader
            title="Federation for Children with Special Needs"
            info="Training and Internship, 2016"
          />
          <AboutHeader
            title="Lesley College, M.Ed"
            info=""
          />
          <AboutHeader
            title="Boston College, B.A."
            info=""
          />
          <p>
            Margie is a professional advocate and educational consultant,
            helping families and their children with special needs to obtain the
            services and individualized instruction necessary to meet their
            unique needs and make effective progress in school.
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
            through the special education world can be difficult, and I&#39;m
            glad to share my knowledge and expertise with other parents to help
            them navigate the process. I often think back to my own advocate and
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
