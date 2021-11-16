import React from "react"
import { jobRoles } from "./JobArray"

import {
  JobOutcomesContainer,
  JobDetailWrapper,
  JobTitleWrapper,
  SeparatorLine,
  JobListItem,
  QualificationsList,
  QaulificationLink,
  JobTitle,
  DropdownArrow,
  JobHeader,
  SalaryTitle,
} from "./JobOutcomes.css"

const JobOutcomesMobile = ({ displayJob, setDisplayJob }) => {
  const [isOpen, setOpen] = React.useState(displayJob === 0)

  const handleOpen = (i) => {
    setDisplayJob(i)
    
    if (displayJob === i && isOpen) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  return (
    <JobOutcomesContainer>
      <JobDetailWrapper>
        <JobHeader>Job Role</JobHeader>
        <QualificationsList>
          {jobRoles.map((role, i) => (
            <JobListItem
              key={i}
              className={displayJob === i ? "font-bold" : ""}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "1rem 1rem 0 0",
                }}
                onClick={() => handleOpen(i)}
                onKeyDown={() => handleOpen(i)}
                role="button"
                tabIndex="0"
              >
                <JobTitle light size="sm">
                  {role.role.charAt(0).toUpperCase() + role.role.slice(1)}
                </JobTitle>
                <DropdownArrow isOpen={displayJob === i && isOpen} />
              </div>
              <SeparatorLine
                margin="1rem 0"
                height="2px"
                style={{
                  display: displayJob === i && isOpen ? "initial" : "none",
                }}
              />
              <div
                style={{
                  padding: "0 0.3rem",
                  flexDirection: "column",
                  display: displayJob === i && isOpen ? "flex" : "none",
                }}
              >
                <JobTitleWrapper>
                  <JobTitle size="xs">Avg. Salary</JobTitle>
                  <SalaryTitle>
                    ${(role.salary - (role.salary % 1000)) / 1000}k per year
                  </SalaryTitle>
                </JobTitleWrapper>
                <SeparatorLine width="95%" height="1px" margin="1rem 0" />
                <JobTitleWrapper>
                  <JobTitle size="xs">Required Qualification/s</JobTitle>
                  <QualificationsList key={i} displayJob={displayJob} id={i}>
                    {role.requiredQaulifications.map((qualification, i) => (
                      <JobListItem key={i}>
                        <QaulificationLink
                          href={`https://www.mentor.edu.au/courses/${qualification.link}`}
                          target="_blank"
                        >
                          {qualification.name}
                        </QaulificationLink>
                      </JobListItem>
                    ))}
                  </QualificationsList>
                </JobTitleWrapper>
              </div>
              <SeparatorLine height="2px" margin="1rem 0" />
            </JobListItem>
          ))}
        </QualificationsList>
      </JobDetailWrapper>
    </JobOutcomesContainer>
  )
}

export default JobOutcomesMobile
