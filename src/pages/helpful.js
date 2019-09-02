import React from "react"
import { Link } from "gatsby"
import Contact from "../components/Contact/Contact"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaSmileBeam } from "react-icons/fa"

const HelpfulPage = ({ data }) => (
  <Layout>
    <SEO title="Helpful Info" />
    <table className="table table-hover table-borderless mx-auto col-10">
      <thead className="mx-auto">
        <tr>
          <th scope="col" className="half-col-middle">
            Resource
          </th>
          <th scope="col" className="half-col-middle">
            Link
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="half-col-middle">
            Federation for Children with Special Needs
          </td>
          <td className="half-col-middle">
            <a href="https://www.fcsn.org" target="_blank">fcsn.org</a>
          </td>
        </tr>
        <tr>
          <td className="half-col-middle">Autism Insurance Resource Center</td>
          <td className="half-col-middle">
          <a href="https://massairc.org/" target="_blank">massairc.org</a>
          </td>
        </tr>
        <tr>
          <td className="half-col-middle">Massachusetts Family Ties</td>
          <td className="half-col-middle">
          <a href="http://www.massfamilyties.org/" target="_blank">massfamilyties.org</a>
          </td>
        </tr>
        <tr>
          <td className="half-col-middle">Massachusetts Department of Elementary and Secondary Education</td>
          <td className="half-col-middle">
          <a href="http://www.doe.mass.edu/" target="_blank">doe.mass.edu</a>
          </td>
        </tr>
        <tr>
          <td className="half-col-middle">Massachusetts Department of Developmental Services (DDS)</td>
          <td className="half-col-middle">
          <a href="http://www.mass.gov/dds" target="_blank">mass.gov/dds</a>
          </td>
        </tr>
        <tr>
          <td className="half-col-middle">Autism Speaks</td>
          <td className="half-col-middle">
          <a href="http://www.autismspeaks.org/" target="_blank">autismspeaks.org</a>
          </td>
        </tr>
        <tr>
          <td className="half-col-middle">AANE (Asperger/Autism Network)</td>
          <td className="half-col-middle">
          <a href="http://www.aane.org/" target="_blank">aane.org</a>
          </td>
        </tr>
      </tbody>
    </table>
  </Layout>
)

export default HelpfulPage
