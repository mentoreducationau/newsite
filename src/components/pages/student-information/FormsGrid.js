import React from "react"
import { FormsGridWrapper, GridTitle, FormGrid, StatementText, GridWrapper } from "./index.css"

const FormsGrid = ({ faculties, handleGridClick, showGrid }) => {
  return (
    <GridWrapper showGrid={showGrid}>
      <StatementText>Click on a tab below to view all student forms:</StatementText>
      <FormsGridWrapper>
        {faculties.map((item, index) => (
          <FormGrid bg={index % 2} onClick={() => handleGridClick(index)}>
            <GridTitle bg={index % 2}>{item.facultyName}</GridTitle>
          </FormGrid>
        ))}
      </FormsGridWrapper>
    </GridWrapper>
  )
}
export default FormsGrid
