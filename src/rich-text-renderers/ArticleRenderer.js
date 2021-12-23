import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Paragraph } from "../styles/Typography.css"

const ArticleRenderer = ({ node }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Paragraph><b>{text}</b></Paragraph>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>
    },
  }

  return <>{renderRichText(node, options)}</>
}

export default ArticleRenderer
