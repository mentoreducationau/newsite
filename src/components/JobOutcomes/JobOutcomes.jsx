import React from "react"
import { jobRoles } from "./JobArray"
import JobOutcomesMobile from "./mobile"

import { useWindowSize } from "../../hooks/useWindowSize"

import {
  JobOutcomesContainer,
  JobOutcomesCourseContainer,
  JobDetailWrapper,
  JobTitleWrapper,
  SeparatorLine,
  JobListItem,
  QualificationsList,
  QaulificationLink,
  JobTitle,
  JobHeader,
} from "./JobOutcomes.css"

const JobOutcomes = ({ course }) => {
  const [size] = useWindowSize()
  const breakpoint = size < 1024
  const [displayJob, setDisplayJob] = React.useState(0)

  return breakpoint ? (
    <JobOutcomesMobile displayJob={displayJob} setDisplayJob={setDisplayJob} />
  ) : (
    <>
      {course ? (
        <JobOutcomesCourseContainer>
          <JobDetailWrapper>
            <JobTitleWrapper>
              <JobHeader>Job Role</JobHeader>
              <SeparatorLine width="50%" />
            </JobTitleWrapper>
            <QualificationsList>
              {jobRoles.map((role, i) => (
                <JobListItem key={i} onMouseEnter={() => setDisplayJob(i)}>
                  <JobTitle
                    className={displayJob === i ? "underline font-bold" : ""}
                  >
                    {role.role.charAt(0).toUpperCase() + role.role.slice(1)}
                  </JobTitle>
                  <SeparatorLine
                    width="30%"
                    height="2px"
                    id={i}
                    displayJob={displayJob}
                  />
                </JobListItem>
              ))}
            </QualificationsList>
          </JobDetailWrapper>
          <JobDetailWrapper>
            <JobTitleWrapper>
              <JobHeader>Avg. Salary</JobHeader>
              <SeparatorLine width="30%" />
            </JobTitleWrapper>
            <QualificationsList>
              {jobRoles.map((role, i) => (
                <JobListItem key={i} onMouseEnter={() => setDisplayJob(i)}>
                  <JobTitle className={displayJob === i ? "font-bold" : ""}>
                    ${(role.salary - (role.salary % 1000)) / 1000}k per year
                  </JobTitle>
                  <SeparatorLine
                    width="25%"
                    height="2px"
                    id={i}
                    displayJob={displayJob}
                  />
                </JobListItem>
              ))}
            </QualificationsList>
          </JobDetailWrapper>
          <JobDetailWrapper last>
            <JobTitleWrapper>
              <JobHeader>Required Qualification/s</JobHeader>
            </JobTitleWrapper>
            {jobRoles.map((role, i) => (
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
            ))}
          </JobDetailWrapper>
        </JobOutcomesCourseContainer>
      ) : (
        <JobOutcomesContainer course={course}>
          <JobDetailWrapper>
            <JobTitleWrapper>
              <JobHeader>Job Role</JobHeader>
              <SeparatorLine width="50%" />
            </JobTitleWrapper>
            <QualificationsList>
              {jobRoles.map((role, i) => (
                <JobListItem key={i} onMouseEnter={() => setDisplayJob(i)}>
                  <JobTitle
                    className={displayJob === i ? "underline font-bold" : ""}
                  >
                    {role.role.charAt(0).toUpperCase() + role.role.slice(1)}
                  </JobTitle>
                  <SeparatorLine
                    width="30%"
                    height="2px"
                    id={i}
                    displayJob={displayJob}
                  />
                </JobListItem>
              ))}
            </QualificationsList>
          </JobDetailWrapper>
          <JobDetailWrapper>
            <JobTitleWrapper>
              <JobHeader>Avg. Salary</JobHeader>
              <SeparatorLine width="30%" />
            </JobTitleWrapper>
            <QualificationsList>
              {jobRoles.map((role, i) => (
                <JobListItem key={i} onMouseEnter={() => setDisplayJob(i)}>
                  <JobTitle className={displayJob === i ? "font-bold" : ""}>
                    ${(role.salary - (role.salary % 1000)) / 1000}k per year
                  </JobTitle>
                  <SeparatorLine
                    width="25%"
                    height="2px"
                    id={i}
                    displayJob={displayJob}
                  />
                </JobListItem>
              ))}
            </QualificationsList>
          </JobDetailWrapper>
          <JobDetailWrapper last>
            <JobTitleWrapper>
              <JobHeader>Required Qualification/s</JobHeader>
            </JobTitleWrapper>
            {jobRoles.map((role, i) => (
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
            ))}
          </JobDetailWrapper>
        </JobOutcomesContainer>
      )}
    </>
  )
}

export default JobOutcomes
