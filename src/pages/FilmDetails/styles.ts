import styled, { css } from 'styled-components';
import {AiFillStar} from 'react-icons/ai'

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  min-height: 100vh;

  overflow-x: visible;
  background-size: 'cover';
  background-attachment: fixed;

`;

export const BackImg = styled.img`
  display: block;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-position-x: center;
  z-index: -1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 10px 15px 10px;
  width:100vw;
  height: fit-content;
  min-height: inherit;

  background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 30%, transparent 95% );
`;

export const PlayerContainer = styled.div`
  display:flex;
  max-width: 900px;
  width: 100%;
  height: 56.25vw;
  max-height: 506.25px;
  -webkit-box-shadow: -1px 7px 33px -3px rgba(235,23,23,1);
  -moz-box-shadow: -1px 7px 33px -3px rgba(235,23,23,1);
  box-shadow: -1px 7px 33px -3px rgba(235,23,23,1);
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin-right: 10px;

  .featured--name {
    font-size: 60px;
    font-weight: bold;
    margin-top: 30px;

    text-shadow: 3px 0px 10px rgba(0, 0, 0, 1);
  }

  .featured--info {

    font-size: 18px;
    font-weight: bold;
    height: 18px;
    line-height: 16px;
    padding: 0;
    margin-top: 15px;

    text-shadow: 3px 0px 10px rgba(0, 0, 0, 1);

    .featured--points,
    .featured--year,
    .featured--seasons {
      display: inline-block;
      margin-right: 10px;
    }

    .featured--points {
      color: var(--color-green-text);
    }
  }

  @media (max-width:768px) {
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

  .featured--overview {
    margin-top: 15px;

    font-size: 20px;
    color: var(--color-white);
    text-shadow: 3px 0px 10px rgba(0, 0, 0, 1);
    max-width: 100%;
    max-height: 51%;
    overflow-y: hidden;
    text-overflow: ellipsis;

    @media (max-width:768PX) {
      font-size: 16px;
      max-width: 100%;
    }
  }

  .featured--genres {
    margin-top: 15px;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 600;
    color: var(--color-red);
    text-shadow: 3px 0px 10px rgba(0, 0, 0, 1);
  }
`;

const iconCSS= css`

  font-size: 18px;
  fill: var(--color-green-text);
  padding: 0;
  margin: 0;
`;

export const StarIcon = styled(AiFillStar)`
  ${iconCSS}
`;
