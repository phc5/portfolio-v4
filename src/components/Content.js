import React from 'react'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

export default () => (
  <StyledGrid>
    <div>
      <h4>stuff i like to use</h4>
      <p>javascript, react, graphql, node.js, aws, css, python</p>
    </div>
    <div>
      <h4>places i've worked</h4>
      <p>kelley blue book, salespad</p>
    </div>
    <div>
      <h4>interests</h4>
      <p>travel, sports, food, stocks, cars, video games, calisthenics</p>
    </div>
    <StyledSocialDiv>
      <h4>contact and social</h4>
      <p>
        <a
          href="https://github.com/phc5"
          target="_blank"
          rel="noreferrer noopener"
        >
          github
        </a>
        ,{' '}
        <a
          href="https://twitter.com/paulhyunchong"
          target="_blank"
          rel="noreferrer noopener"
        >
          twitter
        </a>
        ,{' '}
        <a
          href="https://instagram.com/_paulhc/"
          target="_blank"
          rel="noreferrer noopener"
        >
          instagram
        </a>
        , <a href="mailto:paulhyunchong@gmail.com">email</a>
      </p>
    </StyledSocialDiv>
  </StyledGrid>
)

const StyledGrid = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    grid-gap: ${rhythm(2)};
  }

  h4 {
    margin-bottom: ${rhythm(0.25)};
  }
`
const StyledSocialDiv = styled.div`
  a {
    color: rgba(34, 34, 34, 1);

    &:hover {
      color: rgba(34, 34, 34, 0.4);
    }
  }
`
