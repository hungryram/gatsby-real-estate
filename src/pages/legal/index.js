import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"
import Pagebanner from "../../components/Pagebanner"

export default function LegalTemplate({ data }) {
    return (
        <Layout>
          <Pagebanner 
            pageTitle="Legal Policies"
          />
            <div className="uk-section">
                <div className="uk-container uk-container-large uk-text-center">
                    <ul className="uk-list">
                        {data.allMarkdownRemark.nodes.map((node) => {
                            return (
                                <li key={node.id}>
                                    <Link to={"/legal" + node.fields.slug}>{node.frontmatter.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export const LegalData = graphql`
{
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/.*content/legal/"}, fields: {}}
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