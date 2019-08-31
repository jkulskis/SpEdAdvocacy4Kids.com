import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      {title}
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "", // default title is no text
  styleClass: "default-background",
}
