import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout'

export default function BlogDetail() {
    return (
        <Layout>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <div data-uk-grid>
                        <div className="uk-width-3-5@s">
                            <p>contet here</p>
                        </div>
                        <div className="uk-width-expand">
                            <p>sidebar</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}