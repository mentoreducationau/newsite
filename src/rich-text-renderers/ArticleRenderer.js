import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Paragraph, Subtitle } from "../styles/Typography.css"

const ArticleRenderer = ({ node }) => {
  const richTextImages = {}
  node.references.map(reference => {
    return richTextImages[reference.contentful_id] = {
      image: reference.gatsbyImageData,
      alt: reference.title,
    }
  })
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => (
        <Paragraph>
          <b>{text}</b>
        </Paragraph>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      [BLOCKS.HEADING_4]: (node, children) => <Subtitle>{children}</Subtitle>,
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        // render the EMBEDDED_ASSET as you need
        // const imageData = richTextImages[node.data.target.sys.id]
        const imageData = richTextImages["6IFceeldbZ3TfdoUl6YokB"]
        const image = getImage(imageData.image)

        return (
          <div className="align-center">
            <GatsbyImage image={image} alt={imageData.alt} />
          </div>
        )
      },
    },
  }

  return <>{renderRichText(node, options)}</>
}

export default ArticleRenderer
