import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;

  max-width: 100vw;
  min-height: 100vh;

  padding-top: 70px;
`;

export const Content  = styled.div`
  display: inline-flex;
  flex-wrap: wrap;

  .mylist--item {
    display: flex;
    margin: 0;
    width: 150px;
    cursor: pointer;

    > img, span {
      width: 150px;
      height: 225px;
      max-height: 225px;

      transform: scale(0.9);
      transition: all ease 0.2s;

      -webkit-box-shadow: 0px 0px 16px -6px rgba(240,14,14,1);
      -moz-box-shadow: 0px 0px 16px -6px rgba(240,14,14,1);
      box-shadow: 0px 0px 16px -6px rgba(240,14,14,1);
    }

    > span {
      display: flex;

      text-align: center;
      align-items: center;
      justify-content: center;

      background: black;
    }

    &:hover {
      >img, span {
        transform: scale(1)
      }


      .movieRow--icon-container {
        transform: scale(1);
        z-index: 3;
      }
    }
  }
`;
