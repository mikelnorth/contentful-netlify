import React, { Component } from 'react'
import Layout from '../components/layout';

export default class PostPage extends Component {
  render() {
    if (!this.props.data) {
      return <div>Sorry no data</div>
    }
    const { contentfulBlogPost } = this.props.data;

    return (
      <Layout location={this.props.location}>
        <span>{contentfulBlogPost.date}</span>
        <h1>{contentfulBlogPost.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentfulBlogPost.body.childMarkdownRemark.html }} />
      </Layout>
    )
  }
}


export const query = graphql`
    query BlogPostQuery($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
          title
          body {
            childMarkdownRemark {
              html
              excerpt
            }
          }
          slug
          id
        }
  }
`;
