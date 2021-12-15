//   const [courseItems, setCourseItems] = React.useState([])
//   const [activeTab, setActiveTab] = React.useState()

//   useEffect(() => {
//     const newCourseItems = []
//     for (let [value] of Object.entries(courses[0])) {
//       newCourseItems.push(`${value}`)
//       setCourseItems(newCourseItems)
//       setActiveTab(Object.keys(courses[0])[0])
//     }
//   },[])

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
          tabContentArray.map((content, index) => (
            <Display activeTab={activeTab} id={index + 1} key={index}>
              <Renderer node={content} />
            </Display>
          ))}
      </TabInfoWrapper>
    </TabWrapper>
  )
}

export default Tab
