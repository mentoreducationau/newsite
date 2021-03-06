import React, { useState, useRef } from "react"
import {
  AccordionSection,
  AccordionBlock,
  AccordionIcon,
  AccordionContent,
  AccordionTitle,
  AccordionUnitNameTd
} from "./Accordion.css"

const UnitAccordion = ({ item, title }) => {
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
        <AccordionTitle>
          {title}
        </AccordionTitle>
      </AccordionBlock>
      <AccordionContent
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        active={setActive}
      >
        <table>
          <tbody>
            {item.map(it => (
              <tr key={it.unitCode}>
                <td><AccordionUnitNameTd><li></li>{it.unitName}</AccordionUnitNameTd></td>
                <td>{it.unitCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </AccordionContent>
    </AccordionSection>
  )
}

export default UnitAccordion
