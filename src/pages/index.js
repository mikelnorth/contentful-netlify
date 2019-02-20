import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import PostListing from '../components/Posts/PostListing.js';



const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <h2>Posts</h2>
    {data.allContentfulBlogPost.edges.map(({ node }) => {
      return <PostListing key={node.id} post={node} />
    })}
  </Layout>
)

export default IndexPage

export const query = graphql`
query SiteMeta {
  site {
    siteMetadata {
      title
    }
  }
  allContentfulBlogPost {
    edges {
      node {
        title
       body {
          childMarkdownRemark {
            excerpt
          }
        }
        createdAt(formatString:"MMM DD, YYYY")
        slug
        id
      }
    }
  }
}
`

