import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.background_img.childImageSharp.fluid}
      // title={
      //     <h1 className="title text-dark text-uppercase text-center display-4 font-weight-bold">
      //       advocacy for children
      //     </h1>
      // }
    />
    <div className="index-bottom pb-5 pt-3 mx-auto">
      <div className="container">
        <div className="row mx-auto">
          <h1 className="mx-auto text-center">Advocacy For Children</h1>
        </div>
        <div className="row mx-auto">
          <h4 className="mx-auto text-center">Providing advocacy for children ages 3-18</h4>
        </div>
        <div className="row mx-auto pt-3 my-auto">
          <div className="col col-11 col-md-6">
            <Img
              fluid={data.hands_img.childImageSharp.fluid}
              className="bordered-image"
            />
          </div>
          <div className="col col-11 col-md-6 pt-3">
            <div className="row mx-auto">
              <p>
                Assisting parents in understanding their children’s special
                needs from the school perspective and how those needs can be
                supported and serviced by the school to help your child reach
                their potential.{" "}
              </p>
            </div>
            <div className="row mx-auto">
              <Link to="/contact/" className="link-block">
                <button className="btn btn-yellow btn-block text-capitalize">
                  get in touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  {
    background_img: file(relativePath: { eq: "3-girls.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    hands_img: file(relativePath: { eq: "holding-hands.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
