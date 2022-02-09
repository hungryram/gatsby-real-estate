import * as React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

export default function Hero() {
    return (
        <StaticQuery query={graphql`
        query {
            markdownRemark {
              frontmatter {
                main_image {
                  hero_image
                  heading
                  body
                }
              }
            }
          }
          
      
       `}
            render={data => (


                <div
                    className="uk-background-norepeat uk-background-cover uk-background-center uk-section uk-section-large uk-flex uk-flex-middle"
                    data-uk-height-viewport
                    style={{ 
                        backgroundImage: `url(${data.markdownRemark.frontmatter.main_image.hero_image})`,
                        backgroundColor: "rgb(0 0 0 / 44%)",
                        backgroundBlendMode: "overlay"  
                    }}>
                    <div className="uk-width-1-1">
                        <div className="uk-container uk-container-large uk-light uk-text-center">
                            <div>
                                {
                                    data.markdownRemark.frontmatter.main_image.heading &&
                                    <h1 className="uk-heading-xsmall">{data.markdownRemark.frontmatter.main_image.heading}</h1>
                                }
                                {
                                    data.markdownRemark.frontmatter.main_image.body &&
                                    <p>{data.markdownRemark.frontmatter.main_image.body}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}
        />
    )
}