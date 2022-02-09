import React from "react"
import Renderer from "../../rich-text-renderers/sample"

import { TabTitle } from "../../styles/Typography.css"

import {
  TabButtonsWrapper,
  TabWrapper,
  TabButton,
  TabInfoWrapper,
  Display,
} from "./Tab.css"
import UnitAccordion from "./UnitAccordion"

const tabTitleArray = [
  "Outcomes",
  "Entry Requirements",
  "Units & Delivery",
  "Learning Experience",
  "Payment Options",
]

const Tab = ({ tabContentArray }) => {
  const [activeTab, setActiveTab] = React.useState(1)
  return (
    <TabWrapper>
      <TabButtonsWrapper>
        {tabTitleArray.map((title, index) => {
          return (
            <TabButton
              id={index + 1}
              key={index}
              onClick={() => setActiveTab(index + 1)}
              className={activeTab === index + 1 ? "active" : ""}
            >
              <TabTitle>
                {title
                  .replace(/([A-Z])/g, " $1")
                  .trim()
                  .trim()}
              </TabTitle>
            </TabButton>
          )
        })}
      </TabButtonsWrapper>

      <TabInfoWrapper>
        {tabContentArray &&
          tabContentArray.map((content, index) =>
            index === 2 ? (
              <Display activeTab={activeTab} id={index + 1} key={index}>
                <Renderer node={content} />
                <UnitAccordion
                  item={content.references[0].coreUnits}
                  title="Core Units"
                />
              </Display>
            ) : (
              <Display activeTab={activeTab} id={index + 1} key={index}>
                <Renderer node={content} />
              </Display>
            )
          )}
      </TabInfoWrapper>
    </TabWrapper>
  )
}

export default Tab
