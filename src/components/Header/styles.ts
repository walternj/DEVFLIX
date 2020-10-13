import styled, { css } from 'styled-components'
import {MdPlaylistPlay} from 'react-icons/md'

export const Container = styled.header<{background: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 70px;
  width: 100vw;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 26px;

  transition: all ease 0.5s;
  background: ${props => (props.background ? 'var(--color-header)' : 'transparent')};

  @media (max-width:768PX) {
      padding: 0 10px;
      justify-content:space-around;
    }

  .header--logo {
    height: 35px;
    cursor: pointer;

    @media (max-width:400PX) {
      height: 28px;
    }
  }

  .header--user {
    display: flex;
    height: 32px;
    padding: 0;

    > a img {
      height: 32px;
      border-radius: 4px;
    }

    @media (max-width:400PX) {
      height: 28px;

      > a img { height: 28px}
    }
  }
`;

const iconCSS = css`
  width: 40px;
  height: 40px;

  cursor: pointer;
`;

export const MyList = styled(MdPlaylistPlay)`
  ${iconCSS}
  fill: var(--color-green-text);

  position: absolute;
  right: 18px;
  top: 70px;
`;

