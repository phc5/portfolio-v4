import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Nav from '../components/Nav'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

class Blog extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Fragment>
        <Nav />
        <Layout location={this.props.location}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: "Paul Chong's portfolio" }]}
            title="Paul Chong's Blogs"
          />

          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title')
            const url = get(node, 'frontmatter.url')
            return (
              <div key={title}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <a href={url} target="_blank" rel="noreferrer noopener">
                    {title}
                  </a>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
        </Layout>
      </Fragment>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            url
          }
        }
      }
    }
  }
`
