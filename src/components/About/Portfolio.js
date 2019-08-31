import React, { Component } from 'react'

export default class Portfolio extends Component {
 render() {
  return (
   <div>
    portfolio
   </div>
  )
 }
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
