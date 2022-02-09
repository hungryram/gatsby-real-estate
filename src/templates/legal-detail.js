import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import Pagebanner from '../components/Pagebanner'
import Seo from '../components/Seo'

export default function LegalDetail({ data }) {
    const seo = data.markdownRemark.frontmatter.search_engine_optimization
    return (
        <Layout>
            <Seo
                title={seo.title_tag}
                description={seo.meta_description}
            />
            <Pagebanner
                pageTitle={data.markdownRemark.frontmatter.title}
            />
            <div className="uk-section">
                <div className="uk-container">
                    <h2>Legal</h2>
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                </div>
            </div>
        </Layout>
    )
}

export const LegalPage = graphql`
query ($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      frontmatter {
        title
        search_engine_optimization {
          meta_description
          title_tag
        }
      }
      html
    }
  }
  
`