import React, { Component } from 'react';

class PostPage extends Component {

  render() {
    const { data } = this.props;
    const {title, date } = data.markdownRemark.frontmatter;
    const { html } = data.markdownRemark;
    return (
      <article>
        <span>{data.markdownRemark.frontmatter.date}</span>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div 
          dangerouslySetInnerHTML={{
            __html: html
          }}>
        </div>


      </article>
    );
  }
}

export default PostPage;

export const qury = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`;