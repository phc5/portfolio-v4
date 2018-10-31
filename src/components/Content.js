import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import ContentDiv from './ContentDiv'
import { rhythm } from '../utils/typography'

export default () => (
  <StyledGrid>
    <ContentDiv
      title="stuff i like to use"
      content="javascript, react, graphql, node.js, aws, css, python"
      color="rgba(255, 245, 157, 0.8)"
    />
    <StyledWorkDiv>
      <h4>
        <span>places i've worked</span>
      </h4>
      <p>
        <a
          href="https://www.kbb.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          kelley blue book
        </a>
        ,{' '}
        <a
          href="https://salespad.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          salespad
        </a>
      </p>
    </StyledWorkDiv>
    <ContentDiv
      title="other interests"
      content="travel, sports, food, stocks, cars, video games, calisthenics"
      color="rgba(255, 204, 128, 0.8)"
    />
    <StyledSocialDiv>
      <h4>
        <span>contact and social</span>
      </h4>
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
          href="https://linkedin.com/in/paulhchong"
          target="_blank"
          rel="noreferrer noopener"
        >
          linkedin
        </a>
        , <Link to="/blog">blog</Link>,{' '}
        <a href="mailto:paulhyunchong@gmail.com">email</a>
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
`
const StyledSocialDiv = styled.div`
  a {
    color: rgba(34, 34, 34, 1);

    &:hover {
      color: rgba(34, 34, 34, 0.4);
    }
  }

  h4 {
    margin-bottom: ${rhythm(0.25)};
    user-select: none;

    span {
      background-image: linear-gradient(
        -100deg,
        rgba(255, 255, 255, 0),
        rgba(129, 212, 250, 0.8) 80%,
        rgba(255, 255, 255, 0)
      );
    }
  }
`
const StyledWorkDiv = styled.div`
  a {
    color: rgba(34, 34, 34, 1);

    &:hover {
      color: rgba(34, 34, 34, 0.4);
    }
  }

  h4 {
    margin-bottom: ${rhythm(0.25)};
    user-select: none;

    span {
      background-image: linear-gradient(
        -100deg,
        rgba(255, 255, 255, 0),
        rgba(165, 214, 167, 0.8) 80%,
        rgba(255, 255, 255, 0)
      );
    }
  }
`
