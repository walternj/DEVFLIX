import styled, { css } from 'styled-components';
import {MdNavigateBefore, MdNavigateNext} from 'react-icons/md'

export const Container = styled.div`
  margin-bottom: 30px;

  > h2 {
    margin: 0 0 0 30px;
  }

`;

const iconCSS = css`
  width: 40px;
  height: 40px;
  fill: #fff;
`;

export const NavLeftIcon = styled(MdNavigateBefore)`
   ${iconCSS}
`;

export const NavRightIcon = styled(MdNavigateNext)`
   ${iconCSS}
`;

export const ListContainer = styled.div`
  overflow-x: hidden;
  padding-left: 30px;

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

    .movieRow--item {
      display: inline-block;
      width: 150px;
      cursor: pointer;

      > img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
      }
      >img:hover {
        transform: scale(1)
      }
    }
  }
`;


