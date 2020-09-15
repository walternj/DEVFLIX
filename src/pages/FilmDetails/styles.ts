import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-size: 'cover';
  background-position: 'center';
  background-position-x: center;

  background-attachment: fixed;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 30px 30px 30px;

  width:100vw;
  height: inherit;
  min-height: fit-content;

  background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 30%, transparent 90% );
`;

export const PlayerContainer = styled.div`

  max-width: 1200px
`;

export const TextContainer = styled.div`
  max-width: 1200px;

  .featured--name {
    font-size: 60px;
    font-weight: bold;
  }

  .featured--genres {
    margin-top: 15px;
    font-size: 18px;
    color: var(--color-white);
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
      color: var(--color-white);
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
`
