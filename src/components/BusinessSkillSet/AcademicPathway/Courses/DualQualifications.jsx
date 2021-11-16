import React, { useEffect, useState } from 'react'
import { CardsWrapper } from './courseCard.css'
import CourseCard from './CourseCard'

const DualQualifications = ({ courses }) => {
    const [dualCourses, setDualCourses] = useState([])

    useEffect(() => {
       const newCourses = []
       
       courses && courses.map(course => {
           if (course.type === 'dualQualification') newCourses.unshift(course)
           return null
       })
       setDualCourses(newCourses)
    },[courses])
    
    return (
        <CardsWrapper>
            {dualCourses.map((course, i) => (
                <CourseCard key={i} course={course} dualCourse />
            ))}
        </CardsWrapper>
    )
}

export default DualQualifications
