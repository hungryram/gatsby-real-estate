import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout"

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"
        } tagged with "${tag}"`

    return (
        <Layout>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <div>
                        <h1>{tagHeader}</h1>
                        <ul>
                            {edges.map(({ node }) => {
                                const { slug } = node.fields
                                const { title } = node.frontmatter
                                return (
                                    <li key={slug}>
                                        <Link to={"/blog" + slug }>{title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                        {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
                        <Link to="/tags">All tags</Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`