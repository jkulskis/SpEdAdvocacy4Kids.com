import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function BackgroundSection({
  img,
  styleClass,
  fixed,
  title,
  children,
}) {
  if (fixed) {
    return (
      <BackgroundImage className={styleClass} fixed={img}>
        {title}
        {children}
      </BackgroundImage>
    )
  } else {
    return (
      <BackgroundImage className={styleClass} fluid={img}>
        {title}
        {children}
      </BackgroundImage>
    )
  }
}

BackgroundSection.defaultProps = {
  title: "", // default title is no text
  styleClass: "default-background",
  fixed: false,
}
