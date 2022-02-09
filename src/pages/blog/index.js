import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"
export default function BlogTemplate({ data }) {
    return (
        <Layout>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    {data.allMarkdownRemark.nodes.map((node) => {
                        return (
                            <Link to={"/blog" + node.fields.slug}>{node.frontmatter.title}</Link>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export const BlogDataList = graphql`
{
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/.*content/blog/"}, fields: {}}
  ) {
    nodes {
      frontmatter {
        title
      }
      id
      fields {
        slug
      }
    }
  }
}

`