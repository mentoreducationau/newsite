import React from "react"
import {
  CardPanel,
  PrincipleCardWrapper,
  PrincipleContent,
  PrinciplesWrapper,
  PrincipleTitle,
} from "./index.css"

export default function Principles() {
  const principles = [
    {
      title: "Principles",
      content: [
        "Relationship based",
        "Outcome Focused",
        "Adult Learning Principles",
      ],
    },
    {
      title: "Practices",
      content: [
        "Flexible, Modular delivery",
        "Support & mentor",
        "Respect current knowledge",
      ],
    },
    {
      title: "Outcomes",
      content: ["Client driven", "Full disclosure", "Structured programs"],
    },
    {
      title: "Client Story",
      content: [
        "Completion is important",
        "Validation via feedback",
        "User Group discussions",
      ],
    },
  ]
  return (
    <PrinciplesWrapper>
      {principles.map((item, index) => (
        <PrincipleCardWrapper key={index}>
          <CardPanel>
            <PrincipleTitle>{item.title}</PrincipleTitle>
            <PrincipleContent>
              {item.content.map((it, index) => (
                <p key={index}>{it}</p>
              ))}
            </PrincipleContent>
          </CardPanel>
        </PrincipleCardWrapper>
      ))}
    </PrinciplesWrapper>
  )
}
