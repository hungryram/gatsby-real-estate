
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const _ = require("lodash")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}




exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogDetail = path.resolve("src/templates/blog-detail.js")
    const tagDetail = path.resolve("src/templates/tags-detail.js")
    const legalDetail = path.resolve("src/templates/legal-detail.js")

    const result = await graphql(`
      {
        postsRemark: allMarkdownRemark(
            limit: 2000
            filter: {fileAbsolutePath: {regex: "/content/blog/"}}
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  tags
                }
              }
            }
          },
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        },
        legal: allMarkdownRemark(
            limit: 2000
            filter: {fileAbsolutePath: {regex: "/content/legal/"}}
          ) {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
      }
    `)


    const posts = result.data.postsRemark.edges
    posts.forEach(({ node }) => {
        createPage({
            path: "/blog" + node.fields.slug,
            component: blogDetail,
            context: { slug: node.fields.slug },
        })
    })

    const legal = result.data.legal.edges
    legal.forEach(({ node }) => {
        createPage({
            path: "/legal" + node.fields.slug,
            component: legalDetail,
            context: { slug: node.fields.slug },
        })
    })



    // Extract tag data from query
    const tags = result.data.tagsGroup.group
    // Make tag pages
    tags.forEach(tag => {
        createPage({
            path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
            component: tagDetail,
            context: {
                tag: tag.fieldValue,
            },
        })
    })

}