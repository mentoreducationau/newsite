const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  // NOTE bookNowLinkText
  // bookNowLinkUrl have been removed for now and will need to be added back in conditionally at some stage!
  const result = await graphql(`
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
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each markdown file.
  const SchoolsTemplate = path.resolve(`src/templates/SchoolsTemplate/index.js`)
  result.data.allContentfulSchool.edges.forEach(({ node }) => {
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
