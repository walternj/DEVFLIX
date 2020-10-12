import styled from 'styled-components';

export const Container = styled.div`
  display: flex;


  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;

  max-width: 100vw;
  min-height: 100vh;
  margin: auto;
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
