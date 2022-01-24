const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  // NOTE bookNowLinkText
  // bookNowLinkUrl have been removed for now and will need to be added back in conditionally at some stage!
  const schools = await graphql(`
    query SchoolsQuery {
      allContentfulSchool {
        edges {
          node {
            id
            heading
            introduction {
              raw
            }
            faculties {
              heading
              introduction {
                raw
              }
              courseSections {
                heading
                courses {
                  courseName
                  courseCode
                  studyLevel
                  heroImage {
                    gatsbyImageData(aspectRatio: 0.56)
                  }
                  courseGuide {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(schools => {
    if (schools.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    // Create pages for each markdown file.
    const SchoolsTemplate = path.resolve(
      `src/templates/SchoolsTemplate/index.js`
    )

    schools.data.allContentfulSchool.edges.forEach(({ node }) => {
      for (var i = 0; i < node.faculties.length; i++) {
        const path = `/schools/${node.faculties[i].heading
          .toLowerCase()
          .replace(/ & /g, "-")
          .replace(/ /g, "-")}`
        createPage({
          path,
          component: SchoolsTemplate,
          context: {
            pagePath: path,
            schoolData: node,
          },
        })
      }
    })
  })

  const faculties = await graphql(`
    query facultiesQuery {
      allContentfulSchool {
        edges {
          node {
            id
            heading
            introduction {
              raw
            }
            faculties {
              heading
              introduction {
                raw
              }
              courseSections {
                heading
                courses {
                  courseName
                  courseCode
                  studyLevel
                }
              }
            }
          }
        }
      }
    }
  `).then(faculties => {
    if (faculties.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    // Create pages for each markdown file.
    const CoursesListTemplate = path.resolve(
      `src/templates/SchoolsTemplate/coursesList.js`
    )

    faculties.data.allContentfulSchool.edges.forEach(({ node }) => {
      for (var i = 0; i < node.faculties.length; i++) {
        const path = `/${node.faculties[i].heading
          .toLowerCase()
          .replace(/ & /g, "-")
          .replace(/ /g, "-")}`
        createPage({
          path,
          component: CoursesListTemplate,
          context: {
            pagePath: path,
            facultyData: node.faculties[i],
          },
        })
      }
    })
  })

  const courses = await graphql(`
    query CoursesQuery {
      allContentfulCoursesPage {
        edges {
          node {
            heading
            coursesSelection {
              heading
              courses {
                courseCode
                courseName
                 entryRequirements {
                  raw
                }
                intro {
                  raw
                }
                landingIntro {
                  raw
                }
                learningExperience {
                  raw
                }
                outcomes {
                  raw
                }
                overview {
                  raw
                }
                paymentOptions {
                  raw
                }
                unitsDelivery {
                  raw
                  references {
                    ... on ContentfulCoreUnitGroup {
                      id
                      coreUnits {
                        unitName
                        unitCode
                      }
                    }
                    ... on ContentfulElectiveUnitGroup {
                      id
                      electiveUnitGroup {
                        unitName
                        unitCode
                      }
                    }
                  }
                }
                studyLevel
                heroImage {
                  gatsbyImageData
                  file {
                    url
                  }
                }
                pricing {
                  salePrice
                }
              }
            }
          }
        }
      }
    }
  `).then(courses => {
    if (courses.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    // Create pages for each markdown file.
    const CoursesTemplate = path.resolve(
      `src/templates/CoursesTemplate/index.js`
    )
    courses.data.allContentfulCoursesPage.edges.forEach(({ node }) => {
      for (var j = 0; j < node.coursesSelection.length; j++) {
        for (var i = 0; i < node.coursesSelection[j].courses.length; i++) {
          const path = `/${
            "courses/" +
            node.coursesSelection[j].courses[i].courseCode.toLowerCase() +
            "-" +
            node.coursesSelection[j].courses[i].studyLevel
              .toLowerCase()
              .replace(/ /g, "-") +
            "_" +
            node.coursesSelection[j].courses[i].courseName
              .toLowerCase()
              .replace(/ /g, "-")
          }`
          createPage({
            path,
            component: CoursesTemplate,
            context: {
              pagePath: path,
              courseData: node.coursesSelection[j].courses[i],
            },
          })
        }
      }
    })
  })

  const coursesAboutSIS = await graphql(`
    query StudentInformationSessionQuery1 {
      allContentfulStudentInformationSession {
        edges {
          node {
            course {
              courseCode
              courseName
              entryRequirements {
                raw
              }
              intro {
                raw
              }
              landingIntro {
                raw
              }
              learningExperience {
                raw
              }
              outcomes {
                raw
              }
              overview {
                raw
              }
              paymentOptions {
                raw
              }
              unitsDelivery {
                raw
                references {
                  ... on ContentfulCoreUnitGroup {
                    id
                    coreUnits {
                      unitName
                      unitCode
                    }
                  }
                  ... on ContentfulElectiveUnitGroup {
                    id
                    electiveUnitGroup {
                      unitName
                      unitCode
                    }
                  }
                }
              }
              studyLevel
              heroImage {
                gatsbyImageData
                file {
                  url
                }
              }
              pricing {
                salePrice
              }
            }
          }
        }
      }
    }
  `).then(coursesAboutSIS => {
    if (coursesAboutSIS.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    // Create pages for each markdown file.
    const CoursesTemplate = path.resolve(
      `src/templates/CoursesTemplate/index.js`
    )
    coursesAboutSIS.data.allContentfulStudentInformationSession.edges.forEach(
      ({ node }) => {
        const path = `/${
          "courses/" +
          node.course.courseCode.toLowerCase() +
          "-" +
          node.course.studyLevel.toLowerCase().replace(/ /g, "-") +
          "_" +
          node.course.courseName.toLowerCase().replace(/ /g, "-")
        }`
        createPage({
          path,
          component: CoursesTemplate,
          context: {
            pagePath: path,
            courseData: node.course,
          },
        })
      }
    )
  })

  const studentLifeArticles = await graphql(`
    query studentLifeArticleQuery {
      allContentfulStudentLifeArticles {
        edges {
          node {
            author
            date(formatString: "LL")
            title
            articleBody {
              raw
              references {
                contentful_id
                __typename
                title
                gatsbyImageData
              }
            }
            image {
              gatsbyImageData
            }
          }
        }
      }
    }
  `).then(studentLifeArticles => {
    if (studentLifeArticles.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    // Create pages for each markdown file.
    const StudentLifeArticlesTemplate = path.resolve(
      `src/templates/StudentLifeTemplate/index.js`
    )

    studentLifeArticles.data.allContentfulStudentLifeArticles.edges.forEach(
      ({ node }) => {
        const path = `/student-life/${node.title
          .toLowerCase()
          .replace(/ /g, "-")
          .replace("/", "-")}`
        createPage({
          path,
          component: StudentLifeArticlesTemplate,
          context: {
            pagePath: path,
            articleData: node,
          },
        })
      }
    )
  })

  const studentInformationSessions = await graphql(`
    query StudentInformationSessionsQuery {
      allContentfulStudentInformationSession {
        edges {
          node {
            id
            coverImage {
              gatsbyImageData(aspectRatio: 1.8, layout: FULL_WIDTH)
            }
            sessionDate(formatString: "YYYY-MM-DD")
            course {
              courseCode
              courseName
              studyLevel
              pricing {
                salePrice
              }
              entryRequirements {
                raw
              }
              landingIntro {
                raw
              }
              learningExperience {
                raw
              }
              outcomes {
                raw
              }
              paymentOptions {
                raw
              }
              unitsDelivery {
                raw
                references {
                  ... on ContentfulCoreUnitGroup {
                    id
                    coreUnits {
                      unitName
                      unitCode
                    }
                  }
                  ... on ContentfulElectiveUnitGroup {
                    id
                    electiveUnitGroup {
                      unitName
                      unitCode
                    }
                  }
                }
              }
            }
            hosts {
              name
              role
              portrait {
                gatsbyImageData(aspectRatio: 1)
              }
            }
            youtubeUrl {
              file {
                url
              }
            }
            zoomWebinarId
          }
        }
      }
    }
  `).then(studentInformationSessions => {
    if (studentInformationSessions.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    // Create pages for each markdown file.
    const studentInformationSessionsTemplate = path.resolve(
      `src/templates/StudentInformationSessionTemplate/index.js`
    )

    studentInformationSessions.data.allContentfulStudentInformationSession.edges.forEach(
      ({ node }) => {
        const path = `/student-information-session/${
          node.course.courseCode.toLowerCase() +
          "-" +
          node.course.studyLevel.toLowerCase().replace(/ /g, "-") +
          "_" +
          node.course.courseName.toLowerCase().replace(/ /g, "-") +
          "-" +
          node.sessionDate.replace(/-/g, "")
        }`
        createPage({
          path,
          component: studentInformationSessionsTemplate,
          context: {
            pagePath: path,
            sessionData: node,
          },
        })
      }
    )
  })

  return Promise.all([
    schools,
    faculties,
    courses,
    studentLifeArticles,
    studentInformationSessions,
    coursesAboutSIS,
  ])
}
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        assert: require.resolve("assert/"),
        fs: false,
      },
    },
  })
}
