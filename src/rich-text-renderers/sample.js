import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Paragraph } from "../styles/Typography.css"

const Renderer = ({ node }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph color="black">{children}</Paragraph>
    },
  }

  return <>{renderRichText(node, options)}</>
}

export default Renderer
