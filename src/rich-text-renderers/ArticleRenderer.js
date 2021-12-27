import React from "react"
import styled from "styled-components"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Paragraph, Subtitle } from "../styles/Typography.css"

const ImageWrapper = styled.div`
  width: 65%;
  height: auto;
  float: ${props => (props.index % 2 === 0 ? "left" : "right")};
  margin-left: ${props => (props.index % 2 === 0 ? "0" : "2.5rem")};
  margin-right: ${props => (props.index % 2 === 0 ? "2.5rem" : "0")};

  @media(max-width: 451px){
    width: 100%;
    height: auto;
    float: none;
    margin: 0;
  }
`

const ArticleRenderer = ({ node }) => {
  const richTextImages = {}
  node.references.map(reference => {
    return (richTextImages[reference.contentful_id] = {
      image: reference.gatsbyImageData,
      alt: reference.title,
    })
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
        const index = Object.keys(richTextImages).indexOf(
          node.data.target.sys.id
        )
        const imageData = richTextImages[node.data.target.sys.id]
        const image = getImage(imageData.image)

        return (
          <ImageWrapper index={index}>
            <GatsbyImage image={image} alt={imageData.alt} />
          </ImageWrapper>
        )
      },
    },
  }

  return <>{renderRichText(node, options)}</>
}

export default ArticleRenderer
