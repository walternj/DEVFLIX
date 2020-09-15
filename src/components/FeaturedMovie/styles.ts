import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  background-size: 'cover';
  background-position: 'center';
  background-attachment: fixed;

  .featured--vertical {
    z-index: 3;
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, var(--color-background) 10%, transparent 90% );

    .featured--horizontal {
      z-index: 3;
      width: inherit;
      height: inherit;
      background: linear-gradient(to right, var(--color-background) 30%, transparent 70% );

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
        color: var(--color-grey-text);
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
        margin-right: 30px;
        font-size: 14px;
        max-width: 100%;
      }
    }
  }
`;

export const ButtonsContainer =  styled.div`
  margin-top: 15px;

  .featured--watchbutton,
  .featured--mylistbutton {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s;
  }

  .featured--watchbutton:hover,
  .featured--mylistbutton:hover {
    opacity: 0.7;
  }

  .featured--watchbutton {
    background-color: var(--color-primary);
    color: var(--color-black);
  }

  .featured--mylistbutton {
    background-color: var(--color-grey-button);
    color: var(--color-white-button);
  }

  @media (max-width:768px) {
    .featured--watchbutton,
    .featured--mylistbutton {
      font-size: 16px;
    }
  }
`;
