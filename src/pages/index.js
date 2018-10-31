import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Content from '../components/Content'
import { rhythm } from '../utils/typography'

class Index extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Layout location={this.props.location}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: "Paul Chong's portfolio" }]}
            title="Paul Chong | Software Engineer"
          />
          <Bio />
          <Content />
        </Layout>
      </Fragment>
    )
  }
}

export default Index
