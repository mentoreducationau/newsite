import React, { useState, useRef } from "react"
import Renderer from "../../../rich-text-renderers/sample"
import {
  AccordionSection,
  AccordionBlock,
  AccordionIcon,
  AccordionContent,
  AccordionTitle,
} from "./faqs.css"

const FaqAccordion = ({ item }) => {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")

  const content = useRef(null)

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "")
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight + 16}px`
    )
  }

  return (
    <AccordionSection onClick={toggleAccordion}>
      <AccordionBlock active={setActive}>
        <AccordionIcon className={`${setActive}`} />
        <AccordionTitle style={{ color: "#fff" }} course>
          {item.question}
        </AccordionTitle>
      </AccordionBlock>
      <AccordionContent
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        active={setActive}
      >
        <Renderer node={item.answer} />
      </AccordionContent>
    </AccordionSection>
  )
}

export default FaqAccordion
