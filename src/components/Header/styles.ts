import styled, { css } from 'styled-components';
import {FaSearch } from 'react-icons/fa'


export const Container = styled.header<{background: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 70px;
  width: 100vw;
  position: fixed;
  z-index: 9;
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
    height: 30px;

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

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin-right: 10px;
  margin-left: 10px;
  border: 0 none;

  @media (max-width:768PX) {
    padding-left: 10px;
    margin-right: 5px;
    margin-left: 5px;
  }

  input {
    position: relative;
    width: 26px;
    font-size: 18px;
    margin-left: auto;
    margin-right: -10px;
    padding: 7px 5px;
    outline: 0;
    border-radius: 4px;
    cursor: pointer;
    transition: width 0.3s ease-in-out,  border 0.6s ease-in-out;

    &:focus {
      width: 100%;
      border: 1.2px var(--color-red) solid;

    }

    @media (max-width:768PX) {
      padding: 7px 0;

      > input {
        padding: 0;
        font-size: 14px;
      }
    }
    @media (max-width:400PX) {
      width: 22px;
      right: 5px;
      margin-right: -22px;
    }

    @media (max-width:400PX) {
      height: 28px;
    }
  }
`;

const iconCSS= css`
  position: relative;
  width: 26px;
  height:auto;

  fill: var(--color-green-text);
  flex-shrink: 0;
  right: 20px;
  z-index: -1;

  @media (max-width:768PX) {
    width: 22px;

  }

  @media (max-width:400PX) {
    width: 22px;
    right: 5px
  }
`;

export const SearchIcon = styled(FaSearch)`
  ${iconCSS}
`;
