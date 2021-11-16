import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"

import { Paragraph } from "../../styles/Typography.css"
import { AccordionContainer, AccordionItemButtonIcon } from "./index.css"

import JobOutcomes from "../JobOutcomes/JobOutcomes"
import QualificationPathway from "./QualificationPathway"

const CareerAccordion = () => {
  return (
    <AccordionContainer>
      <Accordion allowMultipleExpanded allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <AccordionItemState>
                {({ expanded }) => (
                  <AccordionItemButtonIcon
                    className={expanded ? "active" : ""}
                  />
                )}
              </AccordionItemState>
              <Paragraph style={{ marginBottom: 0 }}>
                Average salaries for those employed with qualifications from
                this faculty
              </Paragraph>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <JobOutcomes course />
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <AccordionItemState>
                {({ expanded }) => (
                  <AccordionItemButtonIcon
                    className={expanded ? "active" : ""}
                  />
                )}
              </AccordionItemState>
              <Paragraph style={{ marginBottom: 0 }}>
                Explore your qualification pathway options
              </Paragraph>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <QualificationPathway />
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </AccordionContainer>
  )
}

export default CareerAccordion
