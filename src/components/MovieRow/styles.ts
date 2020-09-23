import styled, { css } from 'styled-components';
import {MdNavigateBefore, MdNavigateNext} from 'react-icons/md'

export const Container = styled.div`
  padding-bottom: 30px;
  padding-left: 30px;

  > h2 {
    margin: 0 0 0 30px;
  }

`;

const iconCSS = css`
  width: 40px;
  height: 40px;
  fill: var(--color-primary);
`;

export const NavLeftIcon = styled(MdNavigateBefore)`
   ${iconCSS}
`;

export const NavRightIcon = styled(MdNavigateNext)`
   ${iconCSS}
`;

export const ListContainer = styled.div`
  overflow-x: hidden;
  .moviewRow--left,
  .movieRow--right {
    position: absolute;
    width: 40px;
    height: 225px;

    background-color: rgba(0, 0, 0, 0.6);
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;

    @media (max-width:768PX) {
      opacity: 1;
    }
  }

  .moviewRow--left {
    left: 0;
  }

  .movieRow--right {
    right: 0;
  }

  &:hover  .moviewRow--left,
  &:hover  .movieRow--right{
    opacity: 1;
  }

  .movieRow--list {
    transition: all ease 0.5s;
    height: 225px;
    overflow: hidden;

    .movieRow--item {
      position: relative;
      display: inline-block;
      width: 150px;
      cursor: pointer;


      > img {
        width: 100%;
        height: 225px;
        transform: scale(0.9);
        transition: all ease 0.2s;
      }

      .movieRow--icon-container {
        position: absolute;
        text-align: center;
        justify-content: center;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
        overflow:hidden;
        background: transparent;
        transform: scale(0.9);
        transition: all ease 0.2s;

        > svg {
          font-size: 60px;
          margin-top: 82.5px;
          fill: var(--color-primary);
          opacity: 0.9;
        }
      }


      &:hover {
        >img {
          transform: scale(1)
        }

        .movieRow--icon-container {
          transform: scale(1);
          z-index: 3;
        }
      }

    }
  }
`;


