import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { IntroText } from "../components/pages/student-information/index.css"

const FaqRenderer = ({ node }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <IntroText><b>{text}</b></IntroText>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <IntroText>{children}</IntroText>
    },
  }

  return <>{renderRichText(node, options)}</>
}

export default FaqRenderer
