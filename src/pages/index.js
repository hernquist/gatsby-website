import React from 'react';

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to {data.site.siteMetadata.desc}</p>
    </div>
)

export default IndexPage

export const query = graphql`
  query SiteMeta { 
    site {
      port
      polyfill
      siteMetadata {
        title
        desc
      }
      buildTime
    }
    
  }
`