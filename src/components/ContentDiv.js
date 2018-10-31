import React from 'react'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

export default props => (
  <StyledDiv>
    <h4>
      <span
        style={{
          backgroundImage: `linear-gradient(-100deg, rgba(255, 255, 255, 0), ${
            props.color
          } 80%, rgba(255, 255, 255, 0))`,
        }}
      >
        {props.title}
      </span>
    </h4>
    <p>{props.content}</p>
  </StyledDiv>
)

const StyledDiv = styled.div`
  h4 {
    margin-bottom: ${rhythm(0.25)};
    user-select: none;
  }
`
