import React from 'react'
import { rhythm } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(2)} ${rhythm(3 / 4)}`,
        }}
      >
        {children}
      </div>
    )
  }
}

export default Template
