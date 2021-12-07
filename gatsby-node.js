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
            heading
            introduction {
              raw
            }
            faculties {
              heading
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
            node.coursesSelection[j].courses[i].courseName
              .toLowerCase()
              .replace(/ /g, "-") +
            "-" +
            node.coursesSelection[j].courses[i].courseCode.toLowerCase()
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

  return Promise.all([schools, courses])
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
