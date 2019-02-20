import React, { Component } from 'react'
import { Link } from 'gatsby';
import matter from 'gray-matter';

export default class PostListing extends Component {
    render() {
        const {post} = this.props;
        return (
        <article>
            <h3><Link to={post.slug}>{post.title}</Link></h3>
            <p>{post.createdAt}</p>
            <p>{post.body.childMarkdownRemark.excerpt}</p>
        </article>
        )
    }
}
