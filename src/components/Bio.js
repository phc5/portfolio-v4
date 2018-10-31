import React, { Fragment } from 'react'
import styled from 'styled-components'

import profilePic from '../assets/profile-pic.jpg'
import { rhythm, scale } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <Fragment>
        <StyledBioContainer>
          <StyledImage src={profilePic} alt="Paul Chong" />
          <StyledName>paul chong</StyledName>
          <StyledSubtitle>software engineer</StyledSubtitle>
          <StyledParagraph>passionate about the web and tacos</StyledParagraph>
        </StyledBioContainer>
        <StyledHorizontalRule />
      </Fragment>
    )
  }
}

export default Bio

const StyledBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: ${rhythm(1.5)};
  max-width: 300px;
`

const StyledImage = styled.img`
  align-self: center;
  height: ${rhythm(4)};
  margin-bottom: ${rhythm(0.25)};
  width: ${rhythm(4)};
`

const StyledName = styled.h1`
  align-self: center;
  margin-bottom: 0;
  font-size: ${rhythm(1.35)};
`

const StyledSubtitle = styled.p`
  align-self: center;
  margin-bottom: 0;
`

const StyledParagraph = styled.p`
  align-self: center;
  font-size: ${rhythm(0.4)};
  margin-bottom: 0;
`

const StyledHorizontalRule = styled.hr`
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #fff, #ccc, #fff);
  margin-bottom: ${rhythm(2)};
`
