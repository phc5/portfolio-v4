import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

export default () => (
  <StyledNav>
    <Link to="/">Home</Link>
    <a
      href="https://www.github.com/phc5"
      target="_blank"
      rel="noreferrer noopener"
    >
      GitHub
    </a>
    <Link to="/blog">Blog</Link>
  </StyledNav>
)

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: ${rhythm(0.5)};

  a {
    color: rgba(34, 34, 34, 1);
    margin: 0 ${rhythm(0.5)};
    text-decoration: none;

    &:hover {
      color: rgba(34, 34, 34, 0.4);
    }
  }
`
