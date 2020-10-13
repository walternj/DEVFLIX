import styled, { css } from 'styled-components'
import { MdPlaylistAdd, MdPlayArrow } from 'react-icons/md'

export const Container= styled.section<{ImgUrl: string}>`
  overflow-x: visible;
  height: 100vh;
  min-height: 100%;
  width: 100vw;
  background-size: 'cover';
  /* background: ${props => `url(${props.ImgUrl})`}; */
  background-position: 'center';

  .featured--vertical {
    z-index: 4;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to top, var(--color-background) 10%, transparent 90% );

    .featured--horizontal {
      z-index: 3;
      width: inherit;
      height: inherit;
      background-color: linear-gradient(to right, var(--color-background) 30%, transparent 70% );

      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 30px;
      padding-bottom: 150px;
      padding-top: 70px;
      min-height: fit-content;

      .featured--name {
        font-size: 60px;
        font-weight: bold;
      }

      .featured--genres {
        margin-top: 15px;
        font-size: 18px;
        font-weight: 600;
        color: var(--color-grey-text);
      }

      @media (max-width:768px) {
        padding-left: 15px;
        padding-right: 15px;
        .featured--name {
          font-size: 32px;
        }

        .featured--info {
          font-size: 16px;
        }

        .featured--genres {
          font-size: 14px;
        }
      }
    }

    .featured--info {
      font-size: 18px;
      font-weight: bold;
      margin-top: 15px;

      .featured--points,
      .featured--year,
      .featured--seasons {
        display: inline-block;
        margin-right: 15px;
      }

      .featured--points {
        color: var(--color-green-text);
      }
    }

    .featured--overview {
      margin-top: 15px;
      font-size: 20px;
      color: var(--color-grey-text);
      max-width: 50%;
      max-height: 51%;
      overflow-y: hidden;
      text-overflow: ellipsis;

      @media (max-width:768PX) {
        font-size: 14px;
        max-width: 100%;
      }
    }
  }
`;

export const BackImg = styled.div`
  display: block;
  position: fixed;
  overflow-x: visible;
  width: 100vw;
  height: 100%;
  background-position-x: center;
  z-index: -1;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  max-width: 300px;
  padding: 0;

  .featured--watchbutton,
  .featured--mylistbutton {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;

    font-size: 40px;
    font-weight: bold;
    padding: 5px 0;

    border-radius: 5px;
    text-decoration: none;
    opacity: 1;
    transition: all ease 0.2s;
  }

  .featured--watchbutton:hover,
  .featured--mylistbutton:hover {
    opacity: 0.7;

  }

  .featured--watchbutton {
    background-color: var(--color-red);
    color: var(--color-black);
    margin-right: 10px;
  }

  .featured--mylistbutton {
    background-color: var(--color-grey-button);
    color: var(--color-white-button);

  }

  @media (max-width:768px) {
    .featured--watchbutton,
    .featured--mylistbutton {
      font-size: 36px;
      padding: 2px 0;
    }
  }
`;

const iconCSS= css`
  padding: 0;
  margin: 0;
`;

export const AddFavoriteIcon = styled(MdPlaylistAdd)`
  fill: var(--color-green-text);
  ${iconCSS}
`;

export const PlayArrowIcon = styled(MdPlayArrow)`
  fill: var(--color-primary);
  ${iconCSS}
`;
