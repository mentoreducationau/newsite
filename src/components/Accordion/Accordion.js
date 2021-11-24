import React, { useState, useRef } from "react"
import {
  AccordionSection,
  AccordionBlock,
  AccordionIcon,
  AccordionContent,
  AccordionTitle,
} from "./Accordion.css"

const Accordion = ({ item }) => {
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
          {item.title}
        </AccordionTitle>
      </AccordionBlock>
      <AccordionContent
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        active={setActive}
      >
        <table>
          <tr>
            <td style={{ textAlign: "center" }} colspan="5">
              {item.description}
            </td>
          </tr>
          <tr style={{ background: "#34A57C", color: "#ffffff" }}>
            <th>Date</th>
            <th>Class Codes</th>
            <th>Description</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
          {item.courses.map(
            (it, idx) =>
              idx < 3 && (
                <tr>
                  <td>{it.date}</td>
                  <td>{it.classCode}</td>
                  <td>{it.description}</td>
                  <td>{it.startTime}</td>
                  <td>{it.endTime}</td>
                </tr>
              )
          )}
        </table>
      </AccordionContent>
    </AccordionSection>
  )
}

export default Accordion
