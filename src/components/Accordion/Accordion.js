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
          {item.courseName}
        </AccordionTitle>
      </AccordionBlock>
      <AccordionContent
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        active={setActive}
      >
        <table>
          <thead>
            <tr>
              <td style={{ textAlign: "left", fontSize: "20px", lineHeight: "22px" }} colSpan="5">
                {item.sessionInformation}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: "#34A57C", color: "#ffffff" }}>
              <th>Date</th>
              <th>Class Codes</th>
              <th>Description</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
            {item.sessionsList.map(
              (it, idx) =>
                idx < 3 && (
                  <tr key={it.courseCode}>
                    <td>{it.dateAndTime.split(" ")[0]}</td>
                    <td>{it.classCode}</td>
                    <td>{it.descripion}</td>
                    <td>{it.dateAndTime.split(" ")[1]}</td>
                    <td>{it.dateAndTime.split(" ")[1]}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </AccordionContent>
    </AccordionSection>
  )
}

export default Accordion
