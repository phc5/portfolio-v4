import React, { Fragment } from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Content from '../components/Content'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Fragment>
        <Nav />
        <Layout location={this.props.location}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: siteDescription }]}
            title={siteTitle}
          />
          <Bio />
          <Content />
        </Layout>
      </Fragment>
    )
  }
}

export default BlogIndex
