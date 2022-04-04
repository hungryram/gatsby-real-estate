import * as React from "react"
import Layout from "../components/Layout"

export default function Idx() {
    return (
        <Layout>
            <div className="uk-section">
                <div className="uk-container">
                    <div dangerouslySetInnerHTML={{ __html: "{idxbody}" }} /> 
                </div>
            </div>
        </Layout>
    )
}