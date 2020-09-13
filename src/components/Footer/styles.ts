import styled, { css } from 'styled-components';
import {IoMdBrowsers, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'

export const Container = styled.footer`
  margin: 30px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .footer--left-container {
    > p {
      font-size: 12px
    }
  }

  .footer--right-container {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    > span {
      font-size: 12px;
      margin-right: 7px;
      padding-bottom: 3px;
    }
  }

  a {
    height: 26px;

  }
  a + a {
    margin-left: 5px;
  }
`;


const iconCSS= css`
  width: 26px;
  height:auto;
  fill: var(--color-red);
  flex-shrink: 0;
`;

export const LinkedinIcon = styled(IoLogoLinkedin)`
  ${iconCSS}
`;

export const GithubIcon = styled(IoLogoGithub)`
  ${iconCSS}
`;

export const SiteIcon = styled(IoMdBrowsers)`
  ${iconCSS}
`;
