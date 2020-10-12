import styled, { css } from 'styled-components'
import {FaSearch, FaWindowClose } from 'react-icons/fa'


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
    align-self: auto;
    width: 36px;
    height: 32px;
    font-size: 18px;
    margin-left: auto;
    margin-right: -28px;
    padding: 7px 5px;
    outline: 0;
    border-radius: 4px;

    cursor: pointer;
    transition: width 0.3s ease-in-out,  border 0.6s ease-in-out;

    &:focus {
      width: 100%;
      border: 1.2px var(--color-red) solid;

    }
    &:not(:focus) {
      width: 36px;
      border: 0 transparent solid;

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
      margin-right: -28px;
    }

    @media (max-width:400PX) {
      height: 28px;
    }
  }

  .buttonContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0;

  }
`;

const iconCSS= css`

  width: 26px;
  height:auto;

  fill: var(--color-green-text);
  flex-shrink: 0;
  right: 20px;
  cursor: pointer;

  @media (max-width:768PX) {
    width: 26px;

  }

  @media (max-width:400PX) {
    width: 22px;
    right: 5px;
  }
`;

export const SearchIcon = styled(FaSearch)`
  ${iconCSS}
`;

export const CloseIcon = styled(FaWindowClose)`
  ${iconCSS}
`;
