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
      const path = `/${node.heading.toLowerCase().replace(/ /g, "-")}`
      createPage({
        path,
        component: SchoolsTemplate,
        context: {
          pagePath: path,
          schoolData: node,
        },
      })
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
        const path = `/${
          node.faculties[i].heading
            .toLowerCase()
            .replace(/ & /g, "-")
            .replace(/ /g, "-") + "-courses"
        }`
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
                coreUnits {
                  unitCode
                  unitName
                  unitType
                }
                electiveUnits {
                  unitCode
                  unitName
                  unitType
                }
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

  return Promise.all([schools, faculties, courses])
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
