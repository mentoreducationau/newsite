import React from "react"
import { Link } from "gatsby"
import { Title, Paragraph, ParagraphMedium } from "../../styles/Typography.css"
import { FaqContainer, SearchContainer, InlineSearch } from "./index.css"

const Faq = () => {
  return (
    <FaqContainer>
      <Title style={{ textAlign: "left" }}>Frequently Asked Questions</Title>
      <Paragraph>Find the answers to all your possible questions</Paragraph>
      <SearchContainer>
        <InlineSearch>
          <input type="text" placeholder="Start typing here…" />
          <button>?</button>
        </InlineSearch>
        <ParagraphMedium> or Head to our <Link to="/faq">FAQs</Link> page</ParagraphMedium>
      </SearchContainer>
    </FaqContainer>
  )
}

export default Faq
